import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const PRIVATE_PREFIX = "supabase://";
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = new Set([".pdf", ".doc", ".docx"]);

// Thrown for bad user input — API routes return 400
export class FileValidationError extends Error {
  readonly statusCode = 400 as const;
  constructor(message: string) {
    super(message);
    this.name = "FileValidationError";
  }
}

// Thrown for server-side infra problems — API routes return 500
export class StorageConfigError extends Error {
  readonly statusCode = 500 as const;
  constructor(message: string) {
    super(message);
    this.name = "StorageConfigError";
  }
}

function getSupabaseUrl(): string {
  return process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
}

function getSupabaseServiceRoleKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || "";
}

export async function saveResumeFile(file: File): Promise<string> {
  if (!file || file.size === 0) {
    throw new FileValidationError("Resume file is required.");
  }

  if (file.size > MAX_BYTES) {
    const mb = (file.size / (1024 * 1024)).toFixed(1);
    throw new FileValidationError(`File is ${mb} MB. Maximum allowed is 10 MB.`);
  }

  const ext = (path.extname(file.name) || ".pdf").toLowerCase();
  if (!ALLOWED_MIME.has(file.type) && !ALLOWED_EXT.has(ext)) {
    throw new FileValidationError("Only PDF, DOC, and DOCX files are accepted.");
  }

  const fileName = `${Date.now()}-${crypto.randomUUID()}${ext}`;

  const supabaseUrl = getSupabaseUrl();
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "resumes";

  if (!supabaseUrl || !serviceRoleKey) {
    // Never use local disk on Vercel or in production
    if (process.env.VERCEL || process.env.NODE_ENV === "production") {
      throw new StorageConfigError(
        "Server misconfigured: missing Supabase storage credentials. " +
          "Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and SUPABASE_STORAGE_BUCKET in Vercel.",
      );
    }

    // Local dev disk fallback — only when Supabase creds are absent
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadDir, fileName), buffer);
    return `/uploads/${fileName}`;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  // Preflight: verify the bucket is reachable before attempting the upload.
  // Catches wrong bucket name, wrong URL, paused Supabase project, etc. early.
  const { error: bucketErr } = await supabase.storage.getBucket(bucket);
  if (bucketErr) {
    console.error("[resume-upload] bucket preflight failed:", {
      bucket,
      urlPrefix: supabaseUrl.slice(0, 30),
      error: bucketErr.message,
    });
    throw new StorageConfigError(
      `Storage bucket "${bucket}" not found or inaccessible: ${bucketErr.message}`,
    );
  }

  const filePath = `resumes/${fileName}`;
  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    upsert: false,
    contentType: file.type || "application/octet-stream",
  });

  if (error) {
    // Supabase wraps the original fetch error in .originalError (StorageUnknownError)
    const inner =
      (error as unknown as { originalError?: { message?: string } }).originalError?.message;
    const detail = inner ? `${error.message} — ${inner}` : error.message;
    console.error("[resume-upload] Supabase upload error:", { message: error.message, inner, bucket, filePath });
    throw new StorageConfigError(`Resume upload failed: ${detail}`);
  }

  return `${PRIVATE_PREFIX}${bucket}/${filePath}`;
}

export async function getResumeAccessUrl(storedValue: string): Promise<string | null> {
  if (!storedValue) return null;
  if (!storedValue.startsWith(PRIVATE_PREFIX)) return storedValue;

  const supabaseUrl = getSupabaseUrl();
  const serviceRoleKey = getSupabaseServiceRoleKey();
  if (!supabaseUrl || !serviceRoleKey) return null;

  const key = storedValue.slice(PRIVATE_PREFIX.length);
  const slashIndex = key.indexOf("/");
  if (slashIndex <= 0) return null;

  const bucketName = key.slice(0, slashIndex);
  const filePath = key.slice(slashIndex + 1);

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
  const { data, error } = await supabase.storage.from(bucketName).createSignedUrl(filePath, 60 * 30);
  if (error) return null;
  return data.signedUrl;
}

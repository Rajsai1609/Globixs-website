import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const maxBytes = 5 * 1024 * 1024;
const PRIVATE_PREFIX = "supabase://";

function getSupabaseUrl() {
  return process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
}

function getSupabaseServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || "";
}

export async function saveResumeFile(file: File) {
  if (!file || file.size === 0) {
    throw new Error("Resume file is required.");
  }

  if (file.size > maxBytes) {
    throw new Error("File size must be 5MB or less.");
  }

  const ext = path.extname(file.name) || ".pdf";
  const fileName = `${Date.now()}-${crypto.randomUUID()}${ext}`;

  const supabaseUrl = getSupabaseUrl();
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "resumes";

  if (supabaseUrl && serviceRoleKey) {
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
    const filePath = `resumes/${fileName}`;
    const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
      upsert: false,
      contentType: file.type || "application/octet-stream",
    });
    if (error) {
      throw new Error(`Resume upload failed: ${error.message}`);
    }
    return `${PRIVATE_PREFIX}${bucket}/${filePath}`;
  }

  // Never use local disk fallback on Vercel serverless.
  if (process.env.VERCEL) {
    throw new Error(
      "Storage is not configured. Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL), SUPABASE_SERVICE_ROLE_KEY, and SUPABASE_STORAGE_BUCKET in Vercel.",
    );
  }

  // Local dev fallback when Supabase storage credentials are not set.
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const fullPath = path.join(uploadDir, fileName);
  await writeFile(fullPath, buffer);

  return `/uploads/${fileName}`;
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

  const bucket = key.slice(0, slashIndex);
  const filePath = key.slice(slashIndex + 1);

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(filePath, 60 * 30);
  if (error) return null;
  return data.signedUrl;
}


import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const maxBytes = 5 * 1024 * 1024;

export async function saveResumeFile(file: File) {
  if (!file || file.size === 0) {
    throw new Error("Resume file is required.");
  }

  if (file.size > maxBytes) {
    throw new Error("File size must be 5MB or less.");
  }

  const ext = path.extname(file.name) || ".pdf";
  const fileName = `${Date.now()}-${crypto.randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const fullPath = path.join(uploadDir, fileName);
  await writeFile(fullPath, buffer);

  return `/uploads/${fileName}`;
}


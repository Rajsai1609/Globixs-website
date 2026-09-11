/**
 * Generates the full icon set from the Globixs mark.
 *
 *   npm run favicons:generate
 *
 * Source: design/globixs-mark.png (see scripts/lib/mark.ts for the interim
 * fallback when it is missing).
 *
 * Outputs picked up by the App Router file conventions:
 *   src/app/favicon.ico    16 / 32 / 48 multi-size (PNG-in-ICO)
 *   src/app/icon.png       32×32
 *   src/app/apple-icon.png 180×180
 * Outputs referenced by src/app/manifest.ts:
 *   public/icon-192.png, public/icon-512.png, public/icon-512-maskable.png
 */
import fs from "node:fs";
import path from "node:path";
import { renderMark, renderMaskableMark, markSourceLabel } from "./lib/mark";

const ICO_SIZES = [16, 32, 48] as const;

/**
 * Multi-image ICO container with PNG payloads (supported by every current
 * browser). Layout: 6-byte header, 16-byte directory entry per image, then
 * the image data back to back.
 */
function buildIco(images: readonly { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const dirSize = 16 * images.length;
  let offset = 6 + dirSize;
  const entries: Buffer[] = [];
  for (const { size, png } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}

function write(label: string, relPath: string, data: Buffer): void {
  const out = path.resolve(relPath);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, data);
  console.log(`  ${label.padEnd(30)} ${relPath} (${(data.length / 1024).toFixed(1)} KB)`);
}

async function generate(): Promise<void> {
  console.log(`Generating icon set from ${markSourceLabel()}`);

  const icoImages = await Promise.all(
    ICO_SIZES.map(async (size) => ({ size, png: await renderMark(size) }))
  );
  write("favicon.ico (16/32/48)", "src/app/favicon.ico", buildIco(icoImages));
  write("icon.png (32)", "src/app/icon.png", icoImages[1].png);
  write("apple-icon.png (180)", "src/app/apple-icon.png", await renderMark(180));
  write("icon-192.png", "public/icon-192.png", await renderMark(192));
  write("icon-512.png", "public/icon-512.png", await renderMark(512));
  write("icon-512-maskable.png", "public/icon-512-maskable.png", await renderMaskableMark(512));

  console.log("Done.");
}

generate().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

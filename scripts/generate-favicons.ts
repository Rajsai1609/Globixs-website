import sharp from "sharp";
import fs from "fs";
import path from "path";

const BRAND_BLUE = "#1E3A8A";

function iconSvg(size: number): string {
  const r = Math.round(size * 0.18); // rounded corner radius
  const fontSize = Math.round(size * 0.62);
  // Optical vertical centering: cap-height sits ~72% of font-size above baseline
  const textY = Math.round(size / 2 + fontSize * 0.36);
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${BRAND_BLUE}" rx="${r}" ry="${r}"/>
  <text
    x="${size / 2}"
    y="${textY}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="${fontSize}"
    font-weight="700"
    fill="white"
    text-anchor="middle"
  >G</text>
</svg>`;
}

// PNG-in-ICO: modern browsers (Chrome, Firefox, Safari, Edge) all support this.
function buildIco(pngBuffer: Buffer): Buffer {
  const pngSize = pngBuffer.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // image count = 1

  const dir = Buffer.alloc(16);
  dir.writeUInt8(32, 0);        // width
  dir.writeUInt8(32, 1);        // height
  dir.writeUInt8(0, 2);         // color count (0 = true color)
  dir.writeUInt8(0, 3);         // reserved
  dir.writeUInt16LE(1, 4);      // planes
  dir.writeUInt16LE(32, 6);     // bits per pixel
  dir.writeUInt32LE(pngSize, 8); // size of image data
  dir.writeUInt32LE(22, 12);    // offset to image data (header=6 + dir=16)

  return Buffer.concat([header, dir, pngBuffer]);
}

function report(label: string, outPath: string): void {
  const { size } = fs.statSync(outPath);
  console.log(`  ${label}: ${outPath} (${(size / 1024).toFixed(1)} KB)`);
}

async function generate(): Promise<void> {
  console.log("Generating Globixs favicon set…");

  // 32×32 — browser favicon
  const png32 = await sharp(Buffer.from(iconSvg(32))).png().toBuffer();

  const icon32Path = path.resolve("src/app/icon.png");
  fs.writeFileSync(icon32Path, png32);
  report("icon.png (32×32)", icon32Path);

  const faviconPath = path.resolve("src/app/favicon.ico");
  fs.writeFileSync(faviconPath, buildIco(png32));
  report("favicon.ico (32×32 PNG-in-ICO)", faviconPath);

  // 180×180 — iOS home screen
  const png180 = await sharp(Buffer.from(iconSvg(180))).png().toBuffer();

  const appleAppPath = path.resolve("src/app/apple-icon.png");
  fs.writeFileSync(appleAppPath, png180);
  report("apple-icon.png (180×180)", appleAppPath);

  // public/ copy so the explicit layout.tsx reference `/apple-touch-icon.png` resolves
  const applePublicPath = path.resolve("public/apple-touch-icon.png");
  fs.writeFileSync(applePublicPath, png180);
  report("apple-touch-icon.png (180×180, public/)", applePublicPath);

  console.log("\nDone. Run `npm run build` to verify.");
}

generate().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});

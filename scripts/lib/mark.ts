/**
 * Loads the Globixs mark (red rounded square, white pixel-G) as a PNG at a
 * given size, for the favicon and OG generators.
 *
 * Source of truth: design/globixs-mark.png. When that file exists it is
 * used as-is (resized with sharp). When it is missing, an INTERIM mark is
 * drawn from the brand description so the site never ships a generic icon;
 * drop the official PNG at that path and re-run the generators to replace it.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

export const MARK_PATH = path.resolve("design/globixs-mark.png");
export const BRAND_RED = "#c8262c";

/* 7×7 pixel "G" — 1 = white pixel. Interim only. */
const PIXEL_G: readonly string[] = [
  "0111110",
  "1100011",
  "1100000",
  "1100000",
  "1100111",
  "1100011",
  "0111110",
];

function interimMarkSvg(size: number): string {
  const grid = PIXEL_G.length;
  const pad = size * 0.2;
  const cell = (size - pad * 2) / grid;
  const gap = cell * 0.12;
  const radius = size * 0.22;
  const rects = PIXEL_G.flatMap((row, y) =>
    [...row].flatMap((bit, x) =>
      bit === "1"
        ? [
            `<rect x="${(pad + x * cell + gap / 2).toFixed(2)}" y="${(pad + y * cell + gap / 2).toFixed(2)}" width="${(cell - gap).toFixed(2)}" height="${(cell - gap).toFixed(2)}" rx="${(cell * 0.12).toFixed(2)}" fill="#ffffff"/>`,
          ]
        : []
    )
  );
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="${BRAND_RED}"/>
  ${rects.join("\n  ")}
</svg>`;
}

export function hasOfficialMark(): boolean {
  return fs.existsSync(MARK_PATH);
}

/** Square PNG of the mark at `size` px (transparent outside the rounded square). */
export async function renderMark(size: number): Promise<Buffer> {
  if (hasOfficialMark()) {
    return sharp(MARK_PATH)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
  }
  return sharp(Buffer.from(interimMarkSvg(size))).png().toBuffer();
}

/**
 * Maskable variant: the mark scaled to fit the safe zone (inner 80%) on a
 * solid brand-red square, so platform masks never clip the G.
 */
export async function renderMaskableMark(size: number): Promise<Buffer> {
  const inner = Math.round(size * 0.8);
  const mark = await renderMark(inner);
  const offset = Math.round((size - inner) / 2);
  return sharp({
    create: { width: size, height: size, channels: 4, background: BRAND_RED },
  })
    .composite([{ input: mark, left: offset, top: offset }])
    .png()
    .toBuffer();
}

export function markSourceLabel(): string {
  return hasOfficialMark()
    ? `official mark (${path.relative(process.cwd(), MARK_PATH)})`
    : "INTERIM mark (design/globixs-mark.png not found — drop the official PNG there and re-run)";
}

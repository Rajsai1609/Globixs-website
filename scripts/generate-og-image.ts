/**
 * Generates public/og-image.png (1200×630) for Open Graph / Twitter cards.
 *
 *   npm run og:generate
 *
 * Dark slate background matching the site's hero band (--hero / --hero-2 in
 * globals.css), the brand red accent, the three pillars, and the logo SVG
 * with its gray wordmark recolored to white for contrast on slate.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const WIDTH = 1200;
const HEIGHT = 630;
const PAD = 72;

// Site tokens (globals.css)
const SLATE = "#2e3438";      // --hero
const SLATE_2 = "#383e42";    // --hero-2
const RED = "#c8262c";        // --brand

const LOGO_GRAY = "#6E6F72";  // wordmark fill in globixs-logo.svg
const LOGO_WHITE = "#FFFFFF";

const logoPath = path.resolve("public/globixs-logo.svg");
const outPath = path.resolve("public/og-image.png");

const PILLARS = ["AI Automation", "Digital Marketing", "Technology Consulting"] as const;

function pillarRow(): string {
  // Three pills across the width, each with a red square bullet.
  const y = 372;
  const gap = 24;
  const widths = [236, 262, 330];
  const totalW = widths.reduce((a, b) => a + b, 0) + gap * (widths.length - 1);
  const startX = PAD;
  const scale = Math.min(1, (WIDTH - PAD * 2) / totalW);
  let x = startX;
  return PILLARS.map((label, i) => {
    const w = Math.round(widths[i] * scale);
    const pill = `
      <rect x="${x}" y="${y}" width="${w}" height="56" rx="28" fill="white" fill-opacity="0.06" stroke="white" stroke-opacity="0.18"/>
      <rect x="${x + 22}" y="${y + 23}" width="10" height="10" fill="${RED}"/>
      <text x="${x + 44}" y="${y + 36}" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="white">${label}</text>`;
    x += w + gap;
    return pill;
  }).join("");
}

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${SLATE}"/>
      <stop offset="100%" stop-color="${SLATE_2}"/>
    </linearGradient>
    <radialGradient id="wash" cx="0.9" cy="0" r="0.7">
      <stop offset="0%" stop-color="${RED}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <rect width="2" height="2" fill="white" fill-opacity="0.07"/>
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#wash)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>

  <!-- Eyebrow -->
  <text x="${PAD}" y="${PAD + 72}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="white" fill-opacity="0.6" letter-spacing="4">SEATTLE-BASED · WORKING NATIONWIDE</text>

  <!-- Headline -->
  <text x="${PAD}" y="${PAD + 160}" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="800" fill="white">Run leaner with AI,</text>
  <text x="${PAD}" y="${PAD + 240}" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="800" fill="white">marketing and consulting.</text>

  <!-- Accent divider -->
  <rect x="${PAD}" y="${PAD + 272}" width="96" height="5" fill="${RED}"/>

  ${pillarRow()}

  <!-- Domain -->
  <text x="${PAD}" y="${HEIGHT - PAD + 6}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="white" fill-opacity="0.5" letter-spacing="1">www.globixs.com</text>
</svg>
`.trim();

async function renderLogo(): Promise<{ buffer: Buffer; width: number; height: number }> {
  const raw = fs.readFileSync(logoPath, "utf8");
  if (!raw.includes(LOGO_GRAY)) {
    throw new Error(`Expected wordmark fill ${LOGO_GRAY} in ${logoPath}; the logo file changed.`);
  }
  const recolored = raw.split(LOGO_GRAY).join(LOGO_WHITE);
  const buffer = await sharp(Buffer.from(recolored)).resize({ width: 300 }).png().toBuffer();
  const meta = await sharp(buffer).metadata();
  if (!meta.width || !meta.height) throw new Error("Could not read rendered logo dimensions.");
  return { buffer, width: meta.width, height: meta.height };
}

async function generate(): Promise<void> {
  const logo = await renderLogo();
  await sharp(Buffer.from(svg))
    .png()
    .composite([
      {
        input: logo.buffer,
        left: WIDTH - PAD - logo.width,
        top: HEIGHT - PAD - logo.height + 12,
      },
    ])
    .toFile(outPath);

  const { size } = fs.statSync(outPath);
  console.log(`Generated ${outPath} (${(size / 1024).toFixed(1)} KB), logo ${logo.width}×${logo.height}`);
}

generate().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

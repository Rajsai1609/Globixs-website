/**
 * Generates public/og-image.png (1200×630) for Open Graph / Twitter cards.
 *
 *   npm run og:generate
 *
 * Dark slate background (site --hero / --hero-2 tokens) with the faint pixel
 * grid, the Globixs mark (from scripts/lib/mark.ts), the company name, and
 * the three pillars. The mark is the same source used for all favicons, so
 * link previews and browser tabs show the same logo.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { renderMark, markSourceLabel } from "./lib/mark";

const WIDTH = 1200;
const HEIGHT = 630;
const PAD = 72;

// Site tokens (globals.css)
const SLATE = "#2e3438"; // --hero
const SLATE_2 = "#383e42"; // --hero-2
const RED = "#c8262c"; // --brand
const EYEBROW = "#f2a5a8";
const MUTED = "#a7b0b7";

const MARK_SIZE = 112;
const outPath = path.resolve("public/og-image.png");

const PILLARS = ["AI Automation", "Digital Marketing", "Technology Consulting"] as const;

function pillarRow(y: number): string {
  const gap = 20;
  const widths = [236, 262, 330];
  let x = PAD;
  return PILLARS.map((label, i) => {
    const w = widths[i];
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
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#wash)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>

  <!-- Company name sits to the right of the mark (composited at PAD, PAD) -->
  <text x="${PAD + MARK_SIZE + 28}" y="${PAD + 48}" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="800" fill="white">Globixs Technology Solutions</text>
  <text x="${PAD + MARK_SIZE + 28}" y="${PAD + 86}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="${EYEBROW}" letter-spacing="3">SEATTLE-BASED · WORKING NATIONWIDE</text>

  <!-- Headline -->
  <text x="${PAD}" y="${PAD + 250}" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="800" fill="white">Run leaner with AI,</text>
  <text x="${PAD}" y="${PAD + 322}" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="800" fill="white">marketing and consulting.</text>

  ${pillarRow(PAD + 372)}

  <!-- Domain -->
  <text x="${PAD}" y="${HEIGHT - PAD + 18}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="${MUTED}" letter-spacing="1">www.globixs.com</text>
</svg>
`.trim();

async function generate(): Promise<void> {
  console.log(`Generating OG image from ${markSourceLabel()}`);
  const mark = await renderMark(MARK_SIZE);
  await sharp(Buffer.from(svg))
    .png()
    .composite([{ input: mark, left: PAD, top: PAD }])
    .toFile(outPath);

  const { size } = fs.statSync(outPath);
  console.log(`Generated ${path.relative(process.cwd(), outPath)} (${(size / 1024).toFixed(1)} KB)`);
}

generate().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

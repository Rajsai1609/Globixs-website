import sharp from "sharp";
import fs from "fs";
import path from "path";

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 60;

const logoPath = path.resolve("public/logo.png");
const outPath = path.resolve("public/og-image.png");

const hasLogo = fs.existsSync(logoPath);

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0A1F44"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Accent bar on the right -->
  <rect x="${WIDTH - 8}" y="0" width="8" height="${HEIGHT}" fill="#E53935"/>

  <!-- Decorative right-side geometric shape -->
  <polygon points="${WIDTH - 200},0 ${WIDTH - 8},0 ${WIDTH - 8},${HEIGHT} ${WIDTH - 380},${HEIGHT}"
           fill="white" fill-opacity="0.04"/>

  <!-- Location tag -->
  <text
    x="${PADDING}"
    y="${PADDING + 40}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18"
    font-weight="400"
    fill="white"
    fill-opacity="0.55"
    letter-spacing="4"
  >SEATTLE, WA</text>

  <!-- Main title -->
  <text
    x="${PADDING}"
    y="${PADDING + 120}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="62"
    font-weight="700"
    fill="white"
  >Globixs Technology</text>
  <text
    x="${PADDING}"
    y="${PADDING + 195}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="62"
    font-weight="700"
    fill="white"
  >Solutions</text>

  <!-- Tagline -->
  <text
    x="${PADDING}"
    y="${PADDING + 280}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="28"
    font-weight="300"
    fill="white"
    fill-opacity="0.80"
  >AI-Powered IT Staffing &amp; Consultancy</text>

  <!-- Accent divider line -->
  <rect x="${PADDING}" y="${PADDING + 310}" width="80" height="4" fill="#E53935" rx="2"/>

  <!-- Domain -->
  <text
    x="${PADDING}"
    y="${HEIGHT - PADDING - 10}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    font-weight="400"
    fill="white"
    fill-opacity="0.45"
    letter-spacing="1"
  >globixstech.com</text>
</svg>
`.trim();

async function generate() {
  const base = await sharp(Buffer.from(svg)).png();

  if (hasLogo) {
    const logoResized = await sharp(logoPath)
      .resize({ height: 80, fit: "inside" })
      .toBuffer();

    const logoMeta = await sharp(logoResized).metadata();
    const logoW = logoMeta.width ?? 80;
    const logoH = logoMeta.height ?? 80;

    await base
      .composite([
        {
          input: logoResized,
          left: WIDTH - PADDING - logoW,
          top: HEIGHT - PADDING - logoH,
        },
      ])
      .toFile(outPath);

    console.log(`Logo composited (${logoW}×${logoH}px)`);
  } else {
    await base.toFile(outPath);
    console.log("No logo found — skipped");
  }

  const { size } = fs.statSync(outPath);
  console.log(`Generated: ${outPath}`);
  console.log(`File size: ${(size / 1024).toFixed(1)} KB`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});

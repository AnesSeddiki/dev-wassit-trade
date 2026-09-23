const sharp = require("sharp");
const path = require("path");

const ROOT = __dirname + "/..";
const OUT = path.join(ROOT, "scripts", "fb-cover.png");

const W = 1640;
const H = 624;
const BG = "#0b0b0d";
const AMBER = "#f59e0b";
const PINK = "#db2777";

function svgBuf(svg) {
  return Buffer.from(svg);
}

async function roundedCard(inputPath, targetWidth, radius, angleDeg, shadowBlur = 22, shadowOpacity = 0.55) {
  const meta = await sharp(inputPath).metadata();
  const targetHeight = Math.round((meta.height / meta.width) * targetWidth);

  const resized = await sharp(inputPath)
    .resize({ width: targetWidth, height: targetHeight, fit: "cover" })
    .toBuffer();

  const mask = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${targetWidth}" height="${targetHeight}">
      <rect x="0" y="0" width="${targetWidth}" height="${targetHeight}" rx="${radius}" ry="${radius}" fill="#fff"/>
    </svg>
  `);

  const clipped = await sharp(resized)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const border = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${targetWidth}" height="${targetHeight}">
      <rect x="1" y="1" width="${targetWidth - 2}" height="${targetHeight - 2}" rx="${radius}" ry="${radius}"
        fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
    </svg>
  `);

  const pad = shadowBlur * 3;
  const cardW = targetWidth + pad * 2;
  const cardH = targetHeight + pad * 2;

  const shadow = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${cardW}" height="${cardH}">
      <defs>
        <filter id="b" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="${shadowBlur}" />
        </filter>
      </defs>
      <rect x="${pad}" y="${pad + 14}" width="${targetWidth}" height="${targetHeight}" rx="${radius}" ry="${radius}"
        fill="rgba(0,0,0,${shadowOpacity})" filter="url(#b)" />
    </svg>
  `);

  const card = await sharp({
    create: { width: cardW, height: cardH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      { input: shadow, left: 0, top: 0 },
      { input: clipped, left: pad, top: pad },
      { input: border, left: pad, top: pad },
    ])
    .png()
    .toBuffer();

  const rotated = await sharp(card)
    .rotate(angleDeg, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const rMeta = await sharp(rotated).metadata();
  return { buffer: rotated, width: rMeta.width, height: rMeta.height };
}

async function main() {
  const glow = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${AMBER}" stop-opacity="0.9" />
          <stop offset="45%" stop-color="${PINK}" stop-opacity="0.55" />
          <stop offset="70%" stop-color="${PINK}" stop-opacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      <ellipse cx="700" cy="200" rx="700" ry="480" fill="url(#g)" filter="url(#blur)" opacity="0.75" />
    </svg>
  `);

  const grainTile = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter>
      <rect width="100%" height="100%" filter="url(#n)" opacity="0.35"/>
    </svg>
  `);

  const logo = await sharp(path.join(ROOT, "public/wassit-logo.png"))
    .resize({ width: 620 })
    .toBuffer();
  const logoMeta = await sharp(logo).metadata();

  const tagline = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="620" height="40">
      <text x="4" y="28" font-family="Consolas, 'Courier New', monospace" font-size="20"
        letter-spacing="4" fill="${AMBER}" opacity="0.9">DEV.WASSITTRADE.COM</text>
    </svg>
  `);

  const cardA = await roundedCard(path.join(ROOT, "public/templates-screenshots/dukaken.jpg"), 380, 16, -8, 18);
  const cardB = await roundedCard(path.join(ROOT, "public/templates-screenshots/auto-parts.jpg"), 380, 16, 6, 18);
  const cardC = await roundedCard(path.join(ROOT, "public/templates-screenshots/razzi.jpg"), 380, 16, -3, 18);

  const r = Math.round;
  const composites = [
    { input: glow, left: 0, top: 0 },
    { input: cardA.buffer, left: 880, top: r(H / 2 - cardA.height / 2 - 30) },
    { input: cardB.buffer, left: 990, top: r(H / 2 - cardB.height / 2 + 45) },
    { input: cardC.buffer, left: 1100, top: r(H / 2 - cardC.height / 2 - 5) },
    // Nudged up from dead-center: Facebook's circular profile photo overlaps the
    // bottom-left of the cover on desktop, so keep the wordmark clear of that zone.
    { input: logo, left: 130, top: r(H / 2 - logoMeta.height / 2 - 72) },
    { input: tagline, left: 133, top: r(H / 2 + logoMeta.height / 2 - 56) },
    { input: grainTile, tile: true, blend: "overlay" },
  ];

  await sharp({ create: { width: W, height: H, channels: 4, background: BG } })
    .composite(composites)
    .png()
    .toFile(OUT);

  console.log("written", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

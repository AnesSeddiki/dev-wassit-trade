const sharp = require("sharp");
const path = require("path");

const ROOT = __dirname + "/..";
const OUT = path.join(ROOT, "scripts", "ad-square.png");

const SIZE = 1080;
const BG = "#0b0b0d";
const AMBER = "#f59e0b";
const PINK = "#db2777";
const FONT = "'Segoe UI', Tahoma, Arial, sans-serif";

const r = Math.round;
const svgBuf = (svg) => Buffer.from(svg);

async function roundedCard(inputPath, targetWidth, radius, angleDeg, shadowBlur = 16) {
  const meta = await sharp(inputPath).metadata();
  const targetHeight = r((meta.height / meta.width) * targetWidth);

  const resized = await sharp(inputPath)
    .resize({ width: targetWidth, height: targetHeight, fit: "cover" })
    .toBuffer();

  const mask = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${targetWidth}" height="${targetHeight}">
      <rect width="${targetWidth}" height="${targetHeight}" rx="${radius}" ry="${radius}" fill="#fff"/>
    </svg>
  `);
  const clipped = await sharp(resized).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();

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
      <rect x="${pad}" y="${pad + 10}" width="${targetWidth}" height="${targetHeight}" rx="${radius}" ry="${radius}"
        fill="rgba(0,0,0,0.55)" filter="url(#b)" />
    </svg>
  `);

  const card = await sharp({ create: { width: cardW, height: cardH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: shadow, left: 0, top: 0 },
      { input: clipped, left: pad, top: pad },
      { input: border, left: pad, top: pad },
    ])
    .png()
    .toBuffer();

  const rotated = await sharp(card).rotate(angleDeg, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const rMeta = await sharp(rotated).metadata();
  return { buffer: rotated, width: rMeta.width, height: rMeta.height };
}

async function main() {
  const glow = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${AMBER}" stop-opacity="0.9" />
          <stop offset="45%" stop-color="${PINK}" stop-opacity="0.55" />
          <stop offset="70%" stop-color="${PINK}" stop-opacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="75" />
        </filter>
      </defs>
      <ellipse cx="540" cy="420" rx="620" ry="500" fill="url(#g)" filter="url(#blur)" opacity="0.5" />
    </svg>
  `);

  const grainTile = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter>
      <rect width="100%" height="100%" filter="url(#n)" opacity="0.35"/>
    </svg>
  `);

  const logo = await sharp(path.join(ROOT, "public/wassit-logo.png")).resize({ width: 360 }).toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoTop = 64;

  const badgeY = logoTop + logoMeta.height + 34;
  const badge = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="70">
      <rect x="230" y="4" width="620" height="56" rx="28" fill="rgba(245,158,11,0.12)" stroke="${AMBER}" stroke-opacity="0.55" stroke-width="2"/>
      <text x="520" y="40" font-family="${FONT}" font-size="24" font-weight="600" fill="${AMBER}" text-anchor="middle">خاص بتجار الجملة والمصنّعين</text>
      <text x="775" y="45" font-family="Segoe UI Emoji" font-size="30" fill="${AMBER}" text-anchor="middle">🏭</text>
    </svg>
  `);

  const headlineTop = badgeY + 90;
  const headline = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="180">
      <text x="540" y="62" font-family="${FONT}" font-size="66" font-weight="700" fill="#ffffff" text-anchor="middle">بيع بالجملة؟</text>
      <text x="540" y="140" font-family="${FONT}" font-size="66" font-weight="700" fill="#ffffff" text-anchor="middle">خود موقعك الخاص اليوم</text>
    </svg>
  `);

  const subTop = headlineTop + 190;
  const sub = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="50">
      <text x="540" y="34" font-family="${FONT}" font-size="29" fill="rgba(255,255,255,0.65)" text-anchor="middle">تعرض منتجاتك، تستقبل الطلبات، وتديرها بسهولة</text>
    </svg>
  `);

  const cardA = await roundedCard(path.join(ROOT, "public/templates-screenshots/dukaken.jpg"), 300, 14, -9);
  const cardB = await roundedCard(path.join(ROOT, "public/templates-screenshots/auto-parts.jpg"), 300, 14, 7);
  const cardC = await roundedCard(path.join(ROOT, "public/templates-screenshots/razzi.jpg"), 300, 14, -3);

  const collageTop = subTop + 70;
  const collageCenterY = collageTop + 165;

  const ctaTop = collageTop + 350;
  const cta = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="80">
      <rect x="350" y="4" width="380" height="68" rx="34" fill="${AMBER}"/>
      <text x="515" y="48" font-family="${FONT}" font-size="30" font-weight="700" fill="#0b0b0d" text-anchor="middle">راسلنا الآن</text>
      <text x="670" y="49" font-family="Segoe UI Emoji" font-size="26" fill="#0b0b0d" text-anchor="middle">📩</text>
    </svg>
  `);

  const trustTop = ctaTop + 92;
  const trust = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="36">
      <text x="540" y="24" font-family="${FONT}" font-size="22" fill="rgba(255,255,255,0.55)" text-anchor="middle">الدفع بعد التسليم فقط — بدون عمولة على طلبياتك</text>
    </svg>
  `);

  const urlTop = trustTop + 46;
  const url = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="36">
      <text x="540" y="24" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="3"
        fill="${AMBER}" opacity="0.9" text-anchor="middle">DEV.WASSITTRADE.COM</text>
    </svg>
  `);

  const composites = [
    { input: glow, left: 0, top: 0 },
    { input: logo, left: r(540 - logoMeta.width / 2), top: logoTop },
    { input: badge, left: 0, top: badgeY },
    { input: headline, left: 0, top: headlineTop },
    { input: sub, left: 0, top: subTop },
    { input: cardA.buffer, left: r(540 - cardA.width / 2 - 190), top: r(collageCenterY - cardA.height / 2 + 20) },
    { input: cardB.buffer, left: r(540 - cardB.width / 2 + 190), top: r(collageCenterY - cardB.height / 2 + 10) },
    { input: cardC.buffer, left: r(540 - cardC.width / 2), top: r(collageCenterY - cardC.height / 2 - 20) },
    { input: cta, left: 0, top: ctaTop },
    { input: trust, left: 0, top: trustTop },
    { input: url, left: 0, top: urlTop },
    { input: grainTile, tile: true, blend: "overlay" },
  ];

  await sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: BG } })
    .composite(composites)
    .png()
    .toFile(OUT);

  console.log("written", OUT, "total height used:", urlTop + 36);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

const sharp = require("sharp");
const path = require("path");

const ROOT = __dirname + "/..";
const OUT = path.join(ROOT, "scripts", "auto-parts-ad.png");

const SIZE = 1080;
const BG = "#0b0b0d";
const AMBER = "#f59e0b";
const PINK = "#db2777";
const FONT = "'Segoe UI', Tahoma, Arial, sans-serif";

const r = Math.round;
const svgBuf = (svg) => Buffer.from(svg);

async function roundedScreenshot(inputPath, targetWidth, radius, shadowBlur = 26) {
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
      <rect x="1.5" y="1.5" width="${targetWidth - 3}" height="${targetHeight - 3}" rx="${radius}" ry="${radius}"
        fill="none" stroke="rgba(245,158,11,0.35)" stroke-width="3"/>
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
      <rect x="${pad}" y="${pad + 16}" width="${targetWidth}" height="${targetHeight}" rx="${radius}" ry="${radius}"
        fill="rgba(0,0,0,0.6)" filter="url(#b)" />
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

  const cMeta = await sharp(card).metadata();
  return { buffer: card, width: cMeta.width, height: cMeta.height, pad };
}

async function main() {
  const glow = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${AMBER}" stop-opacity="0.85" />
          <stop offset="45%" stop-color="${PINK}" stop-opacity="0.5" />
          <stop offset="70%" stop-color="${PINK}" stop-opacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="75" />
        </filter>
      </defs>
      <ellipse cx="540" cy="120" rx="640" ry="420" fill="url(#g)" filter="url(#blur)" opacity="0.5" />
    </svg>
  `);

  const grainTile = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
      <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter>
      <rect width="100%" height="100%" filter="url(#n)" opacity="0.35"/>
    </svg>
  `);

  const logo = await sharp(path.join(ROOT, "public/wassit-logo.png")).resize({ width: 190 }).toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoTop = 26;

  const badgeY = logoTop + logoMeta.height + 14;
  const badge = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="52">
      <rect x="195" y="2" width="690" height="44" rx="22" fill="rgba(245,158,11,0.12)" stroke="${AMBER}" stroke-opacity="0.55" stroke-width="2"/>
      <text x="515" y="29" font-family="${FONT}" font-size="18" font-weight="600" fill="${AMBER}" text-anchor="middle">خاص بتجار قطع غيار السيارات (جملة وتجزئة)</text>
      <text x="835" y="31" font-family="Segoe UI Emoji" font-size="19" fill="${AMBER}" text-anchor="middle">🔧</text>
    </svg>
  `);

  const headlineTop = badgeY + 62;
  const headline = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="58">
      <text x="540" y="44" font-family="${FONT}" font-size="44" font-weight="700" fill="#ffffff" text-anchor="middle">موقعك الخاص لبيع قطع الغيار</text>
    </svg>
  `);

  const shot = await roundedScreenshot(path.join(ROOT, "public/templates-screenshots/auto-parts.jpg"), 660, 14, 14);
  const visibleShotHeight = shot.height - shot.pad * 2;
  const shotVisibleTop = headlineTop + 70;
  const shotPlacedTop = shotVisibleTop - shot.pad;

  const checklistTop = shotVisibleTop + visibleShotHeight + 26;
  const checklistItems = [
    "وسّع نطاق مبيعاتك إلى الويب بصفحة هبوط احترافية",
    "تنظيم وسرعة البحث عن القطع في متجرك",
    "استقبل طلبياتك بضغطة زر فقط من المشتري",
    "يدعم الهواتف والحواسيب وكل الأنظمة",
  ];
  const rowH = 40;
  const checklistSvg = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${rowH * checklistItems.length + 10}">
      ${checklistItems
        .map((item, i) => {
          const cy = i * rowH + 22;
          return `
            <circle cx="770" cy="${cy - 6}" r="11" fill="rgba(16,185,129,0.18)" />
            <text x="770" y="${cy - 1}" font-family="${FONT}" font-size="13" font-weight="700" fill="#10b981" text-anchor="middle">✓</text>
            <text x="750" y="${cy}" font-family="${FONT}" font-size="19" fill="rgba(255,255,255,0.85)" text-anchor="end">${item}</text>
          `;
        })
        .join("")}
    </svg>
  `);

  const ctaTop = checklistTop + rowH * checklistItems.length + 8;
  const cta = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="64">
      <rect x="360" y="0" width="360" height="56" rx="28" fill="${AMBER}"/>
      <text x="520" y="36" font-family="${FONT}" font-size="24" font-weight="700" fill="#0b0b0d" text-anchor="middle">راسلنا الآن</text>
      <text x="655" y="37" font-family="Segoe UI Emoji" font-size="21" fill="#0b0b0d" text-anchor="middle">📩</text>
    </svg>
  `);

  const urlTop = ctaTop + 72;
  const url = svgBuf(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="30">
      <text x="540" y="20" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="2"
        fill="${AMBER}" opacity="0.9" text-anchor="middle">DEV.WASSITTRADE.COM/AUTO-PARTS</text>
    </svg>
  `);

  console.log({ headlineTop, shotVisibleTop, visibleShotHeight, checklistTop, ctaTop, urlTop, bottom: urlTop + 30 });

  const composites = [
    { input: glow, left: 0, top: 0 },
    { input: logo, left: r(540 - logoMeta.width / 2), top: logoTop },
    { input: badge, left: 0, top: badgeY },
    { input: headline, left: 0, top: headlineTop },
    { input: shot.buffer, left: r(540 - shot.width / 2), top: shotPlacedTop },
    { input: checklistSvg, left: 0, top: checklistTop },
    { input: cta, left: 0, top: ctaTop },
    { input: url, left: 0, top: urlTop },
    { input: grainTile, tile: true, blend: "overlay" },
  ];

  await sharp({ create: { width: SIZE, height: SIZE, channels: 4, background: BG } })
    .composite(composites)
    .png()
    .toFile(OUT);

  console.log("written", OUT, "bottom used:", urlTop + 32);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

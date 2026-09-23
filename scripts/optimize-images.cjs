const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname + "/..";

async function optimizeScreenshots() {
  const dir = path.join(ROOT, "public", "templates-screenshots");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));
  for (const f of files) {
    const inPath = path.join(dir, f);
    const outPath = path.join(dir, f.replace(/\.png$/, ".jpg"));
    const before = fs.statSync(inPath).size;
    await sharp(inPath)
      .resize({ width: 1000, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath);
    const after = fs.statSync(outPath).size;
    fs.unlinkSync(inPath);
    console.log(`${f} -> ${f.replace(/\.png$/, ".jpg")}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
  }
}

async function optimizePersonalPhoto() {
  const inPath = path.join(ROOT, "public", "professional-personal-image.png");
  const tmpPath = inPath + ".tmp.png";
  const before = fs.statSync(inPath).size;
  await sharp(inPath)
    .resize({ width: 480, withoutEnlargement: true })
    .png({ quality: 85, compressionLevel: 9, palette: true })
    .toFile(tmpPath);
  fs.renameSync(tmpPath, inPath);
  const after = fs.statSync(inPath).size;
  console.log(`professional-personal-image.png  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

(async () => {
  await optimizeScreenshots();
  await optimizePersonalPhoto();
})();

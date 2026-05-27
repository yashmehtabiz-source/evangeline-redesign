// One-off: prep the new wordmark logo (run: node scripts/process-wordmark.mjs)
//  - Black source has a wide transparent canvas → trim to tight text, resize.
//  - Vanilla variant was NOT provided, so derive it: recolor opaque pixels to
//    cream, preserving alpha (same ornamental-G design, just light).
import sharp from "sharp";

const SRC = "/Users/onkarpalav/Downloads/evangeline-assets-v2/evangeline-wordmark-black.png";
const DIR = "public/brand/logo";
const VANILLA = [250, 247, 242]; // --surface #FAF7F2

// Trim transparent margins, cap width for web (wordmark renders ≤ ~200px tall-cap).
const blackBuf = await sharp(SRC)
  .trim()
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

await sharp(blackBuf).toFile(`${DIR}/evangeline-wordmark-black.png`);
await sharp(blackBuf).webp({ quality: 90 }).toFile(`${DIR}/evangeline-wordmark-black.webp`);

// Derive vanilla: keep alpha, repaint RGB.
const { data, info } = await sharp(blackBuf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  if (data[i + 3] > 0) {
    data[i] = VANILLA[0];
    data[i + 1] = VANILLA[1];
    data[i + 2] = VANILLA[2];
  }
}
const vanillaBuf = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toBuffer();
await sharp(vanillaBuf).toFile(`${DIR}/evangeline-wordmark-vanilla.png`);
await sharp(vanillaBuf).webp({ quality: 90 }).toFile(`${DIR}/evangeline-wordmark-vanilla.webp`);

console.log(`trimmed+resized to ${info.width}x${info.height} (≈${(info.width / info.height).toFixed(1)}:1)`);
console.log("wrote black + vanilla (png + webp)");

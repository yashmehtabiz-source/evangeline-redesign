// One-off: trim transparent canvas padding on the hero bottle PNGs so they fill
// their container, then add a small uniform margin back. (run: node scripts/trim-bottle-padding.mjs)
import sharp from "sharp";

const DIR = "public/brand/products";
const NAMES = [
  "cleanser-transparent",
  "serum-transparent",
  "eye-transparent",
  "moisturizer-transparent",
];
const PAD = 20;
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

for (const name of NAMES) {
  const png = `${DIR}/${name}.png`;
  const before = await sharp(png).metadata();

  // trim() reads the file; resolve to a buffer before writing back to the same path.
  const buf = await sharp(png)
    .trim({ threshold: 10 })
    .extend({ top: PAD, bottom: PAD, left: PAD, right: PAD, background: TRANSPARENT })
    .png({ compressionLevel: 9 })
    .toBuffer();

  await sharp(buf).toFile(png);
  await sharp(buf).webp({ quality: 90 }).toFile(`${DIR}/${name}.webp`);

  const after = await sharp(buf).metadata();
  console.log(
    `${name}: ${before.width}x${before.height} → ${after.width}x${after.height}`,
  );
}
console.log("done");

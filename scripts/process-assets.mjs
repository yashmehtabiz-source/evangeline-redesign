// One-off asset processor (run: node scripts/process-assets.mjs)
//  - Logos: key pure-black background → transparent (soft edge), resize, write PNG.
//  - Products: resize longest edge ≤ 2000px, re-encode JPG q82 + WebP sibling.
import sharp from "sharp";
import { readdir, rename, unlink } from "node:fs/promises";
import path from "node:path";

const LOGO_DIR = "public/brand/logo";
const PROD_DIR = "public/brand/products";
const LOGO_MAX_W = 800;
const PROD_MAX = 2000;

// Soft black-key on max(r,g,b): ≤LOW → transparent, ≥HIGH → opaque, between → ramp.
const LOW = 24;
const HIGH = 72;

async function keyLogo(file) {
  const full = path.join(LOGO_DIR, file);
  // Read into memory + resize first, then key — source is the buffer, so we can
  // safely write back to the same path.
  const { data, info } = await sharp(full)
    .resize({ width: LOGO_MAX_W, withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info; // 4
  for (let i = 0; i < data.length; i += channels) {
    const m = Math.max(data[i], data[i + 1], data[i + 2]);
    let a;
    if (m <= LOW) a = 0;
    else if (m >= HIGH) a = 255;
    else a = Math.round(((m - LOW) / (HIGH - LOW)) * 255);
    data[i + 3] = a;
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(full);
  return `${file} → ${width}x${height} (alpha keyed)`;
}

async function optimizeProduct(file) {
  if (!/\.jpe?g$/i.test(file)) return null;
  const full = path.join(PROD_DIR, file);
  const tmp = full + ".tmp.jpg";
  const webp = full.replace(/\.jpe?g$/i, ".webp");

  const resized = sharp(full).resize({
    width: PROD_MAX,
    height: PROD_MAX,
    fit: "inside",
    withoutEnlargement: true,
  });
  const meta = await resized.clone().metadata();
  await resized.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
  await resized.clone().webp({ quality: 82 }).toFile(webp);
  await rename(tmp, full).catch(async (e) => {
    await unlink(tmp).catch(() => {});
    throw e;
  });
  return `${file} → ${meta.width}x${meta.height} (jpg q82 + webp)`;
}

const logos = (await readdir(LOGO_DIR)).filter((f) => f.endsWith(".png"));
for (const f of logos) console.log(await keyLogo(f));

const prods = (await readdir(PROD_DIR)).filter((f) => /\.jpe?g$/i.test(f));
for (const f of prods) console.log(await optimizeProduct(f));

console.log("done");

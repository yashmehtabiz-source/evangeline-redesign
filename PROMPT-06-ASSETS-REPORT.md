# Prompt 6 — Brand Asset Integration Report

## What was done

Copied 16 client assets into `/public/brand/`, made the logo PNGs transparent
and the product JPGs web-sized, swapped real imagery in via `next/image` where we
have it, kept placeholders everywhere we don't, set the favicon, and pushed —
Vercel auto-deployed and the new assets are live.

## Files copied + renamed

**logo/** (from source PNGs): `evangeline-lockup.png` (was `Evangeline Logo with
Droplet-04.png`), `wordmark-green.png` (`CALLA GREEN`), `wordmark-vanilla.png`,
`wordmark-peach.png`, `wordmark-black.png`, `droplet-{black,teal,olive,ivory,pink}.png`
(`icons-01..05`).
**products/** (from JPGs): `biostem-serum-angled.jpg` (`1D`), `…-front.jpg` (`2D`),
`…-detail.jpg` (`5A`), `textures-dollops.jpg` (`3E`), `ritual-group-1.jpg` (`4A`),
`ritual-group-2.jpg` (`4B`). Each product also has a `.webp` sibling.
`favicon.png` ← processed teal droplet.

## Logo transparency approach

`sharp` (already bundled with Next, vips 8.17.3 — no install). One-off
`scripts/process-assets.mjs`: soft black-key on `max(r,g,b)` — ≤24 → transparent,
≥72 → opaque, ramped between (feathers edges, avoids halo). Logos resized to
≤800px. Verified on the lockup: `hasAlpha:true`, mean alpha 14.9 (bg keyed, green
mark preserved). No `sips`/blend-mode fallback needed.

## Product optimization

Same script: longest edge ≤2000px (`fit: inside`), JPG q82 (mozjpeg) in place +
WebP q82 sibling. Originals were 8000–11880px / 13–38 MB each → now 27–122 KB.
Total `public/brand/` = 1.1 MB.

## Placeholders → real images

- Header + Footer wordmark → `evangeline-lockup.png`
- Home Hero editorial → `ritual-group-1.jpg`
- Home Ritual grid: Biostem Serum card → `biostem-serum-front.jpg` (via product data)
- Home Shop-by-Concern: Firmness & Tone → `biostem-serum-angled.jpg`
- PDP gallery main + 4 thumbs → front / angled / detail / dollops (thumb click now
  swaps the main image, since we have real shots)
- PDP What-It-Does → `textures-dollops.jpg`
- PDP Ritual Context → `ritual-group-2.jpg`

## Placeholders retained (assets still missing)

- Home Ritual + Concern cards for Cleanser, Eye Restore, Moisturizer (no single shots)
- About founder portrait, manufacturing/lab imagery, founder signature scan
- Clinical-authority clinic partner logos
- Biostimulation-strip dollops accent — **skipped**: no natural slot without
  changing the layout (brief allowed skipping).

## Deploy

Live: **https://evangeline-redesign.vercel.app** — all 3 pages, favicon, WebP,
and the `next/image` optimizer verified returning 200 after the auto-deploy.
Commit `feat: integrate brand assets — logo, hero, PDP gallery, favicon`.

## Surprises / deviations

- Source filenames differed from the brief: `CALLA GREEN` (not "CALLA REEN"),
  and the lockup file had no ellipsis. Mapped to the intended targets.
- `sharp` was already available — skipped the `npm i sharp` step.
- Favicon uses the **transparency-processed** teal droplet, not the raw
  black-background original — reads cleaner in a browser tab.
- Black-on-black reserve logos (`wordmark-black`, `droplet-black`) key to near-
  empty PNGs. They're unused reserves, so left as-is.
- A transient `.claude/` lock got staged; added `.claude/` to `.gitignore` and
  unstaged it.

## Verify manually

- Hero/flat-lay group shots are square on white; `object-cover` into 4/5 and 1/1
  crops the sides slightly — confirm the products stay centered and uncropped.
- Logo lockup at 44–48px header height — confirm legibility on mobile.

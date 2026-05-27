# Prompt 8 — New Wordmark Logo Report

## Files copied / generated (`public/brand/logo/`)

- `evangeline-wordmark-black.png` + `.webp` — from the v2 source, trimmed of its
  transparent canvas and resized to 1000×119.
- `evangeline-wordmark-vanilla.png` + `.webp` — **derived** (see deviations).
- `scripts/process-wordmark.mjs` — the one-off processor.

## Left untouched

- `evangeline-lockup.png` — retained as the fallback, no longer referenced in code.
- `favicon.png` (teal droplet) — a wordmark is unusable at 16×16, so the tab icon stays.

## Components updated

- **components/Header.tsx** — logo `Image` swapped to `evangeline-wordmark-black.png`,
  `h-7 w-auto md:h-8`, alt `"Evangeline"`. Layout/nav untouched.
- **components/Footer.tsx** — same swap, `h-9 w-auto`.
- **components/about/AboutCta.tsx** — added the vanilla wordmark centered above the
  block: `mx-auto mb-8 h-8 w-auto md:h-10`, alt `"Evangeline"`.

## Sizing decisions

- Header `h-7` / md `h-8`; Footer `h-9`; CTA `h-8` / md `h-10` — all `w-auto`.
- `Image` props set to **1000×119** (the real trimmed aspect, ≈8.4:1), not the
  brief's 200×40. With `h-* w-auto`, the width/height ratio must match the actual
  image or `next/image` squishes it horizontally; 200×40 (5:1) would distort.

## Deviations / surprises

- **Vanilla variant was not in the source folder** — only the black wordmark was
  present (the lone "vanilla" file on disk is the *old* design, wrong logo). Rather
  than ship a mismatched logo or block, I derived the vanilla from the new black
  wordmark: recolored every opaque pixel to cream (#FAF7F2), preserving alpha and
  the ornamental G. Verified: opaque pixel RGBA = (250,247,242,…). Swap in the real
  client vanilla later by overwriting `evangeline-wordmark-vanilla.png`.
- **Black source was an 8000×4168 canvas** with wide transparent padding. Trimmed to
  tight text (1000×119) so `h-*` sizing renders the wordmark at a usable scale.

## Live URL

https://evangeline-redesign.vercel.app — wordmark (black + vanilla), retained
lockup, and unchanged favicon all verified 200 after auto-deploy.
Commit `feat: integrate new wordmark logo — black on cream, vanilla on sage CTA`.

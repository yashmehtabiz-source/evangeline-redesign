# Prompt 9 — Firmness Card Image Swap

## File copied

`concern-firmness.jpg` (1600×1600) → `public/brand/products/` + generated
`concern-firmness.webp` sibling (105 KB).

## Component updated

`components/home/ShopByConcern.tsx` — the **Firmness & Tone** card only:
- `image` → `/brand/products/concern-firmness.jpg`
- `imageAlt` → `"Firmness — fresh sage sprig on cream linen"`

Other three cards (Hydration & Barrier, Under-Eye, Daily Cleanse), copy, layout,
and section header untouched.

## Old image

Was `/brand/products/biostem-serum-angled.jpg` (Biostem Serum bottle, angled).
**Retained** in the repo — still used by the PDP gallery thumbnail
(`components/pdp/PdpHero.tsx`).

## Live URL

https://evangeline-redesign.vercel.app — pushed to `main`, Vercel auto-deploying.
Commit `feat: swap firmness card image — botanical sage replaces product bottle
for visual consistency`.

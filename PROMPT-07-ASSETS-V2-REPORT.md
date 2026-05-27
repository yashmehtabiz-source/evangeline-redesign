# Prompt 7 — Brand Asset Integration v2 Report

## What was done

Copied all 11 v2 JPGs into `/public/brand/products/`, generated a WebP sibling for
each at source resolution (`sharp`), swapped the remaining placeholders for
`next/image`, committed, and pushed — Vercel auto-deployed and the assets are live.

## Files copied (11 + 11 WebP siblings)

`cleanser-bottle`, `eye-restore-bottle`, `moisturizer-bottle` (1600²);
`concern-hydration`, `concern-eye`, `concern-cleanse` (1600²);
`manufacturing-vancouver` (1536×1152); `journal-science`, `journal-ritual`,
`journal-founder` (1920×1080); `founder-portrait` (1080×1350).
All present, names matched the brief exactly.

## Placeholders → real images

- **Home / The Ritual:** Cleanser (01), Eye Restore (03), Moisturizer (04) cards
  (Serum already had its shot). Wired via `product.image` in `lib/products.ts`.
- **Home / Shop by Concern:** Hydration & Barrier, Under-Eye, Daily Cleanse
  (Firmness already done). Specific alts passed through a new `imageAlt`.
- **Home / Journal:** all three teaser cards (Science / Ritual / Founder).
- **About / Founder Profile:** founder portrait (4:5).
- **About / Manufacturing & Standards:** Vancouver lab (4:3).

## Deliberately retained as placeholders

- **Clinical Authority** — clinic partner logos (none provided).
- **Founder Letter** — handwritten signature scan (not provided).

## Live URL

https://evangeline-redesign.vercel.app — pages and sample new assets verified
returning 200 after auto-deploy. Commit
`feat: integrate brand assets v2 — bottles, concerns, journal, founder, manufacturing`.

## Deviations / surprises

- **Extended `ConcernCard` and `JournalCard`** with optional `image` + `imageAlt`
  props so the brief's specific alt text flows through (they were placeholder-only
  before). `ProductCard` already supported images via the product data.
- **JPGs kept as-is** per the brief — three exceed 1 MB (`journal-ritual` 1.7 MB).
  WebP siblings are far smaller and `next/image` re-optimizes delivery, so served
  bytes stay light; the large originals only sit in the repo.
- Source aspect ratios matched the target wrappers cleanly (founder 1080×1350 ≈ 4:5,
  manufacturing 1536×1152 = 4:3) — no awkward cropping expected.
- No missing or failed files; all 11 copied on the first pass.

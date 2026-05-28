# Prompt 13 — Trim Bottle Padding + Enlarge Hero

## Trimmed PNG dimensions (before → after)

| Bottle | Before | After |
|--------|--------|-------|
| cleanser-transparent | 1600×1600 | 353×1358 |
| serum-transparent | 1600×1600 | 410×1420 |
| eye-transparent | 1600×1600 | 416×1227 |
| moisturizer-transparent | 1600×1600 | 331×1416 |

`trim({ threshold: 10 })` → cropped to opaque bounding box, + 20px transparent
margin re-added. WebP siblings regenerated. Script left at
`scripts/trim-bottle-padding.mjs`.

## Final container heights

Image wrapper: `h-72 md:h-96 lg:h-[28rem] xl:h-[32rem]` (288 / 384 / 448 / 512).
Grid gap `gap-2 md:gap-3`; outer `min-h-[500px] md:min-h-[640px]`. `items-end`
baseline + `object-contain object-bottom` kept.

## Visual consistency

Yes — with the excess canvas removed, all four bottles now scale to the same
container height and sit on a shared floor. The cleanser, previously dwarfed by its
padding, is now visually on par with the other three.

## Live URL

https://evangeline-redesign.vercel.app — pushed to `main` (`e726fca`), auto-deploying.

# Prompt 12 — Hero Sequencer Polish

## Bottle sizing (container heights per breakpoint)

`h-56` (224px, mobile) → `md:h-72` (288px) → `lg:h-80` (320px) → `xl:h-96` (384px).
Image is `h-full w-auto object-contain object-bottom`. Grid gap dropped to `gap-4`.
Outer min-height raised to `min-h-[420px] md:min-h-[560px]`.

## Baseline alignment

**Yes** — each bottle's image sits in a `flex h-* items-end justify-center` wrapper,
plus `object-bottom` on the image, so all four rest on a shared floor regardless of
their differing source canvas heights.

## Hover vs mobile label behavior

Implemented. Each bottle has a name label (`text-xs uppercase tracking-widest
text-sage`, `mt-4`):
- **Mobile (< md):** `opacity-100` — always visible.
- **md and up:** `md:opacity-0`, revealed via `md:group-hover/bottle:opacity-100`
  (250ms transition), gated behind `done` so it only activates after the 3500ms
  entry sequence completes.
- The 4px hover lift is kept, now on the image via `group-hover/bottle:-translate-y-1`
  (also `done`-gated). Names: Nourishing BioPro Cleanser, Biostem Serum, Biopeptide
  Eye Restore, Biostem Daily Moisture Complex.

Entry timing, easing, step-label sequence, left hero, and reduced-motion: unchanged.

## Live URL

https://evangeline-redesign.vercel.app — pushed to `main` (`aad2e7c`), auto-deploying.

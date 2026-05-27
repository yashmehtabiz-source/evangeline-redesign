# Prompt 11 — Hero Ritual Sequencer

## New component

`components/home/RitualSequencer.tsx` — **98 lines**. Client component. Four
transparent bottle PNGs in a row (desktop) / 2×2 grid (mobile), with a synced
sage step label below.

## Files modified

- `app/globals.css` — added `@keyframes bottleIn` + `.seq-bottle` class and a
  `prefers-reduced-motion` override.
- `components/home/Hero.tsx` — right column now renders `<RitualSequencer />`
  (kept `md:pl-6` spacing; dropped the `BrandImage`/`Reveal` wrapper). Left text +
  CTAs + grid/padding/bg unchanged.
- `public/brand/products/` — 4 `*-transparent.png` + `.webp` siblings copied in.

## Animation implementation

**Hybrid, by concern:** bottle entrance is **pure CSS** — one `@keyframes bottleIn`
(opacity 0 + `translateY(20px) scale(0.96)` → settled), `cubic-bezier(0.22,1,0.36,1)`,
700ms, `both` fill, with per-bottle `animation-delay` set inline (400/1100/1800/2500ms).
The **step label uses a `setTimeout` chain** (fade-out at `at−250`, swap text + fade-in
at `at`) — JS is the cleaner fit there because the label cycles through five text
states with a crossfade, which CSS-only would force into brittle keyframe juggling.
A `done` flag flips at 3500ms: bottles swap from `.seq-bottle` to a static class so
the finished animation's filled transform no longer overrides the hover lift
(`hover:-translate-y-1`, 300ms ease, cursor-pointer). Once-per-load only — no
IntersectionObserver, so scrolling never replays it.

## drop-shadow

**Yes** — applied `drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)]` on each bottle. The
client cutouts have clean alpha (no baked contact shadow), so the CSS filter gives
the "placed on a surface" grounding.

## Reduced motion

`matchMedia('(prefers-reduced-motion: reduce)')` → all four bottles render instantly
(CSS override zeroes the animation), label jumps straight to "A FOUR-STEP RITUAL",
hover enabled immediately.

## Deviations

- **Source files were `*-transparent.jpg` (white bg), not `.png`** — flagged and
  paused; you re-supplied real transparent PNGs (1600², alpha confirmed). Now using
  those. The earlier white-key fallback script was removed.
- Bottles normalized by container height only (`h-40 → md:h-48 → lg:h-52`,
  `w-auto object-contain`), no image re-processing, per constraint.
- `ritual-group-1.jpg` retained (no longer referenced in code).

## Live URL

https://evangeline-redesign.vercel.app — pushed to `main` (`915575d`), auto-deploying.

## Subjective note

Couldn't watch motion through tooling (curl can't see animation); markup + timing
verified in code and the served build. Expected feel: a calm, staggered "settle" —
soft, not bouncy. Please eyeball the checklist (hard-refresh replay, mobile 2×2,
hover-after-settle) in the browser.

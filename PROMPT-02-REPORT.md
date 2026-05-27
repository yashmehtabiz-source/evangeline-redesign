# Prompt 2 — Homepage Report

## What was built

Composed the full homepage as nine ordered sections: Hero, Biostimulation
Strip, Shop by Concern, Founder, The Ritual, Testimonials, Clinical Authority,
Journal Teaser, and Newsletter. Each section is its own component under
`components/home/`, assembled in a thin `app/page.tsx`. Repeated patterns were
extracted into reusable cards (ProductCard, ConcernCard, TestimonialCard,
JournalCard) and primitives (Eyebrow, Stars, BioIcon, Reveal). Product cards and
the $510 ritual total pull live from `lib/products.ts`; all image slots are
pitch-ready `<Placeholder />`s and all copy is the final brand-voice text.

## New files

**components/**
- Eyebrow.tsx, Stars.tsx, Reveal.tsx, BioIcon.tsx
- ProductCard.tsx, ConcernCard.tsx, TestimonialCard.tsx, JournalCard.tsx

**components/home/**
- Hero.tsx, BiostimulationStrip.tsx, ShopByConcern.tsx, FounderSection.tsx
- TheRitual.tsx, Testimonials.tsx, ClinicalAuthority.tsx, JournalTeaser.tsx
- NewsletterSection.tsx

## Modified files

- app/page.tsx — replaced placeholder with the nine-section composition
- components/Button.tsx — added `sage-outline` variant (Build the Ritual CTA)
- components/NewsletterForm.tsx — added `cta` prop (label "Subscribe" vs "Join")

## Changed / simplified from brief

- **Scroll animation added.** Built `Reveal` — a ~15-line IntersectionObserver
  fade-in-up, no framer-motion. Honours `prefers-reduced-motion`.
- **CTA casing.** Labels written in proper case in JSX; the Button's CSS
  `uppercase` renders them as the small-caps look from the Prompt 1 tokens —
  matches the existing header convention rather than hardcoding caps.
- **Ritual total computed** ($510) from product data, not hardcoded — stays
  correct if prices change.
- **Clinical-authority logo blocks** are custom bordered divs, not the cream
  `<Placeholder />`. On the sage background the cream block would clash; ivory
  outlined blocks read correctly. Same label text ("Clinic Partner Logo").
- **Testimonial avatars** are circular placeholders with initials (e.g. "SK")
  for a touch more polish than a blank disc.
- **Card components extracted** rather than inlined, since each pattern repeats
  4×/3×. Keeps every file well under the size limit.

## Please verify manually

- **Product card CTA alignment.** Longer names (Biostem Daily Moisture Complex)
  wrap to two lines, so "Add to Ritual" buttons don't bottom-align across the
  row. Intentional for now — say the word and I'll pin them with `mt-auto`.
- **Founder section on tablet.** 5-col grid is a 3/2 (~60/40) split with
  `items-center`. If the portrait reads too tall next to the text at the `md`
  breakpoint, alignment may want a tweak.
- **Hero at narrow desktop (~1024px).** Headline is 76px; confirm it breathes
  next to the 4/5 image and doesn't feel cramped.
- **No-JS fallback.** `Reveal` starts at `opacity-0`; with JS disabled content
  stays hidden. Fine for a JS pitch site, but noting it.

## Status

`tsc --noEmit` clean. All nine sections verified rendering on the running dev
server (hot-reloaded, not restarted).

## Patches

- ProductCard root is now `flex h-full flex-col`; grid cells stretch, so all
  four ritual cards share equal height regardless of name wrap.
- Price + "Add to Ritual" moved into one `mt-auto` bottom block, so the CTA
  baseline-aligns across the row even when a name wraps to two lines.
- Scope: ProductCard.tsx only. `tsc --noEmit` clean; verified on running dev.

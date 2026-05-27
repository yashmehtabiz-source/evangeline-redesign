# Prompt 4 — About Page Report

## What was built

The full About page at `/app/about/page.tsx` — a long-form editorial founder
profile in nine ordered sections: a text-only hero, the founder origin profile,
"The Gap" manifesto, a deeper biostimulation science block, manufacturing &
standards, the three expanded values, the shared clinical-authority strip, a
signed founder closing letter, and a sage CTA footer. The page leans
Fraunces-heavy with generous (≈128px) vertical rhythm on the long-form sections.
The clinical-authority strip was extracted to a shared location and is now used
by both the homepage and About; `/about#science` deep-links to the science
section, clear of the sticky header.

## New files

**app/**
- about/page.tsx — route + metadata, composes the nine sections (was empty)

**components/shared/**
- ClinicalAuthority.tsx — moved here from `components/home/`, shared by both pages

**components/about/**
- AboutHero.tsx, FounderProfile.tsx, TheGap.tsx, ScienceOfBiostim.tsx
- ManufacturingStandards.tsx, OurValues.tsx, FounderLetter.tsx, AboutCta.tsx

## Modified files

- components/home/ClinicalAuthority.tsx — **deleted** (moved to shared/)
- app/page.tsx — import path updated to `@/components/shared/ClinicalAuthority`
- components/Button.tsx — added `ivory` and `ivory-outline` variants for the
  sage CTA footer (ivory bg/ink text; ivory border/ivory text)
- components/BioIcon.tsx — added optional `size` prop (science icons render 64px)

## Changed / simplified from brief

- **ClinicalAuthority extracted to `components/shared/`** (brief permitted). It
  had no home-specific coupling, so the move was clean; home import updated.
- **Reused BioIcon for the three science icons** — its `delivery` / `peptide` /
  `botanical` types map exactly to the brief's three columns. Added a `size`
  prop rather than writing three new SVGs.
- **OurValues heading.** The brief gave this section no heading line, only the
  section name and three numbered values. Rather than invent marketing copy, I
  promoted the section name "Our Values" to the Fraunces heading. No body copy
  reworded anywhere.
- **Long-form padding** uses `md:py-32` (128px) on the editorial sections to hit
  the "slow the reader down" intent; shorter sections keep the standard rhythm.

## Please verify manually

- **`/about#science` on first load.** Hash navigation + `scroll-mt-24` should
  land the science heading below the sticky header — confirm in-browser (smooth
  scroll is CSS, curl can't see it).
- **`md:py-32` override.** Section's base is `md:py-24`; the larger value should
  win in Tailwind's output. Eyeball that long-form sections read ~128px desktop.
- **FounderProfile 55/45 grid** at the `md` breakpoint — tall portrait beside
  vertically-centered copy; check alignment doesn't drift.
- **Signature placeholder** is a small 3/1 block (max-width 200px) — confirm it
  reads as a signature slot, not a broken bar, at 375px.

## Status

`tsc --noEmit` clean. All nine sections, the `#science` anchor, the CTA links,
and the unaffected homepage strip verified on the running dev server
(hot-reloaded, not restarted).

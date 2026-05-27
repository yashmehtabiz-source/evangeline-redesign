# Prompt 3 — Biostem Serum PDP Report

## What was built

The Biostem Serum product detail page at `/shop/biostem-serum`, composed of nine
ordered sections: a two-column buy block (gallery + price/size/qty/CTA), a
self-assessment promise bar, "What It Does", an accordion-driven Science block,
ritual context, a three-step how-to, a deep reviews block (summary, star
distribution, six cards), an FAQ accordion, and a three-product cross-sell. A
reusable `Accordion` component powers both the Science and FAQ sections. All
imagery is `<Placeholder />`; all numbers carry the n=120 self-assessment
disclaimer; the homepage hero and Firmness CTAs now route into the PDP.

## New files

**app/**
- shop/biostem-serum/page.tsx — route + metadata, composes the nine sections

**components/**
- Accordion.tsx — one-open-at-a-time, grid-rows height transition, plus/minus

**components/pdp/**
- PdpHero.tsx (client), PromiseBar.tsx, WhatItDoes.tsx, ScienceBlock.tsx
- RitualContext.tsx, HowToUse.tsx, Reviews.tsx, Faq.tsx, CompleteRitual.tsx

## Modified files

- components/Section.tsx — added optional `id` prop (+ `scroll-mt-24`) so deep
  links like `/#ritual` land below the sticky header
- components/home/Hero.tsx — "Shop the Ritual" CTA now → `/shop/biostem-serum`
- components/home/TheRitual.tsx — added `id="ritual"` anchor target
- components/home/ShopByConcern.tsx — no change needed; the Firmness & Tone card
  already pointed to `/shop/biostem-serum` from Prompt 2 (confirmed)

## Changed / simplified from brief

- **Science "tabs" rendered as the accordion**, exactly as the brief permitted —
  simpler, mobile-native, printable. First item open by default.
- **PdpHero is interactive** (client): thumbnail active-border, size toggle, and
  a working qty stepper. Size selection is visual only — price stays $168 as the
  brief copy specifies; the 50 ml price is shown on its own button.
- **Gallery thumbnails are custom bordered divs**, not `<Placeholder />`, because
  the active state needs a sage vs taupe border (Placeholder forces dashed sage).
- **`$510` ritual total computed** from `lib/products.ts` in CompleteRitual; the
  three cross-sell cards keep their original product index so step numbers read
  01 / 03 / 04 correctly with Serum (02) removed.
- **CTA casing** follows the existing convention — proper case in JSX, uppercased
  by the Button's CSS, matching header/homepage.
- Wrote the four blank review bodies and five blank FAQ answers in the
  restrained, slightly-imperfect brand voice; kept the 4★ "Patience required"
  anchor verbatim.

## Please verify manually

- **PromiseBar dividers.** Responsive border logic (2×2 mobile → 4-col desktop)
  is class-driven; eyeball the divider lines at 375px and ≥768px.
- **Accordion height transition** uses the `grid-rows-[1fr]/[0fr]` technique —
  confirm expand/collapse is smooth in-browser (curl can't see it).
- **`/#ritual` scroll target.** Click the in-page "build the full ritual" links;
  confirm the homepage scrolls to The Ritual section, clear of the sticky header.
- **Hero buy block at 375px.** Gallery should stack above the buy details; check
  the size buttons wrap cleanly.

## Status

`tsc --noEmit` clean. All nine sections, both homepage CTAs, and the `#ritual`
anchor verified on the running dev server (hot-reloaded, not restarted).

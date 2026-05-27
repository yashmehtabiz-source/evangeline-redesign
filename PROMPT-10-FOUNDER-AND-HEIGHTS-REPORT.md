# Prompt 10 — Founder Portrait + Equal-Height Concern Cards

## Fix 1 — Homepage founder portrait

`components/home/FounderSection.tsx` — replaced the `<Placeholder>` with
`<BrandImage>` (`next/image`):
- src `/brand/products/founder-portrait.jpg`
- alt `"Dr. Riam Shammaa, MD — founder of Evangeline"`
- aspect ratio **4/5** (unchanged from the placeholder; section layout untouched)

## Fix 2 — Equal-height concern cards

`components/ConcernCard.tsx` (the card rendered by `ShopByConcern`):
- Card root `<Link>`: added **`h-full`** → now `group flex h-full flex-col …`
- "Explore →" CTA already had **`mt-auto`** (`mt-auto pt-5`) — left as-is, now
  effective once the card stretches.
- Body `<p>` keeps natural line-height, no fixed height.

Grid in `ShopByConcern.tsx` uses CSS Grid's default `stretch`, so each card fills
its row height — same pattern proven on `ProductCard` in The Ritual. No column or
grid changes. All four CTAs now baseline-align at the bottom.

## Live URL

https://evangeline-redesign.vercel.app — pushed to `main`, Vercel auto-deploying.
Commit `fix: homepage founder portrait + equal-height concern cards with baseline CTAs`.

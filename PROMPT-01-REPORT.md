# Prompt 1 — Foundation Report

## What was built

Scaffolded a Next.js 15 (App Router, TypeScript) prototype for the Evangeline
pitch mock, styled with Tailwind CSS v4. Encoded the full design-token system
(palette, Fraunces + Inter Tight via `next/font`, type scale, radii) in the
`@theme` block of `globals.css`, plus a shared root layout with a sticky
scroll-aware header and a three-column footer. Built reusable components
(Section, Button, Placeholder, NewsletterForm) and a typed 4-SKU product data
file. The home page renders a "Home — coming in Prompt 2" placeholder so the
dev server runs cleanly.

## Files created

**root**
- package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
  tailwind.config.ts, .gitignore

**app/**
- globals.css, layout.tsx, page.tsx

**components/**
- Header.tsx, Footer.tsx, NewsletterForm.tsx, Placeholder.tsx, Button.tsx,
  Section.tsx

**lib/**
- products.ts

**public/**
- .gitkeep

## Skipped / changed from brief

- **Next.js version bumped** `15.1.6` → `15.5.18` (patched line). The pinned
  version carried critical CVE-2025-66478.
- **Tailwind bumped** `4.0.0` → `4.3.0` — the 4.0.0 oxide scanner threw
  `Missing field 'negated'` at build; 4.3.0 builds clean.
- **2 moderate transitive postcss advisories remain.** `npm audit fix --force`
  downgrades Next to 9.3.3 (major breaking change), so left untouched.
- **Tokens live in `globals.css` `@theme`**, not `tailwind.config.ts` (v4
  convention). The config file keeps only content globs.
- **Temporary token swatch row** omitted — verified tokens via clean build +
  HTTP render instead.
- **NewsletterForm** split into its own client island so Footer stays a server
  component.

## Run the dev server

```bash
npm install   # if not already done
npm run dev
```

Open http://localhost:3000 (Next auto-picks the next free port if 3000 is busy).

# Prompt 5 — Deploy Report

## Live URLs

- **Production:** https://evangeline-redesign.vercel.app
  - Aliased to the exact requested subdomain (no hash suffix needed).
  - `/`, `/shop/biostem-serum`, `/about` all verified returning **200**.
  - Deployment-specific URL:
    `https://evangeline-redesign-nb4ptif1k-yashmehtabiz-sources-projects.vercel.app`
- **GitHub repo:** https://github.com/yashmehtabiz-source/evangeline-redesign
- **Vercel project:** `yashmehtabiz-sources-projects/evangeline-redesign`

## What ran

1. `git init` — was not a repo.
2. `.gitignore` already existed (from Prompt 1); broadened `.env*.local` → `.env*`
   so all env files are excluded per brief. node_modules/.next/.vercel/.DS_Store
   already covered.
3. Commit: `chore: initial pitch mock — homepage, PDP, about` (59 files, on `main`).
4. `gh repo create evangeline-redesign --public --source=. --remote=origin --push`
   — succeeded; name was free.
5. `npm install -g vercel` → Vercel CLI 54.5.0.
6. `vercel login` — headless device flow; you approved via GitHub in browser.
7. `vercel link` + `vercel --prod --yes` — deployed; build passed remotely.

## Deviations from the brief

- **PATH:** `gh` and `vercel` were not on the non-interactive shell PATH. Used
  `/opt/homebrew/bin/gh`; `vercel` resolved via the nvm global bin. No functional
  change. GitHub account in use: `yashmehtabiz-source`.
- **Login was the device-code flow**, not an interactive provider menu — Vercel
  CLI falls back to it in a non-TTY shell. Same "Continue with GitHub" result.
- **`vercel --prod --yes` alone would have used the wrong project name** (it
  defaults to the directory name, `evangeline-mock`). Instead linked explicitly
  first: `vercel link --yes --project evangeline-redesign --scope <team>`, then
  `vercel --prod --yes`. The first link attempt failed with `missing_scope`
  (non-interactive needs an explicit team) — re-ran with
  `--scope yashmehtabiz-sources-projects`.
- **Bonus:** linking auto-connected the GitHub repo to the Vercel project, so
  push-to-deploy is already wired.
- **Ran `npm run build` locally before deploying** (not a brief step) to de-risk
  the remote build. Passed: 4 static routes.

## How to redeploy

- **Automatic:** `git push` to `main` — Vercel rebuilds and ships to production
  (the repo is connected to the project).
- **Manual:** `vercel --prod --scope yashmehtabiz-sources-projects` from the
  project root.

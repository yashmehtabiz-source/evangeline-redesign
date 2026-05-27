import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4.
 *
 * In v4 the design tokens (colors, fonts, type scale, spacing) live in
 * `app/globals.css` under the `@theme` block — that is the source of truth.
 * This file is kept for explicit content globbing and editor tooling; v4
 * auto-detects content, but declaring it keeps intent obvious for the team.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
};

export default config;

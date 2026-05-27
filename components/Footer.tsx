import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const LINK_COLS = [
  {
    heading: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Biostem Serum", href: "/shop/biostem-serum" },
      { label: "The Ritual Set", href: "/shop" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Built by a Doctor", href: "/about" },
      { label: "The Science", href: "/science" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping & Returns", href: "/help" },
      { label: "Contact", href: "/help" },
      { label: "FAQ", href: "/help" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-taupe/50 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3 md:px-10 md:py-20">
        {/* Col 1 — brand */}
        <div>
          <p className="font-display text-base tracking-[0.24em] text-ink">
            EVANGELINE
          </p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-soft">
            Biostimulating skincare from Toronto — clinical credibility, made
            accessible.
          </p>
        </div>

        {/* Col 2 — link columns */}
        <div className="grid grid-cols-3 gap-6">
          {LINK_COLS.map((col) => (
            <nav key={col.heading}>
              <h4 className="font-body text-[11px] uppercase tracking-[0.16em] text-ink">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-ink-soft transition-colors hover:text-sage"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Col 3 — signup + social */}
        <div>
          <h4 className="font-display text-lg leading-snug text-ink">
            Join the ritual
          </h4>
          <p className="mt-2 font-body text-sm text-ink-soft">
            10% off your first order.
          </p>
          <div className="mt-4 max-w-xs">
            <NewsletterForm />
          </div>
          <div className="mt-6 flex items-center gap-4 text-ink">
            <a href="#" aria-label="Instagram" className="hover:text-sage">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-sage">
              <TikTokIcon />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-sage">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-taupe/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-[11px] uppercase tracking-[0.12em] text-ink-soft md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Evangeline. All rights reserved.</p>
          <div className="flex items-center gap-3 tracking-[0.1em]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
          <p>Made in Vancouver, BC</p>
        </div>
      </div>
    </footer>
  );
}

/* ---- inline social glyphs ---- */

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.4 2.2 1.9 3.9 4 4.2v2.7c-1.4 0-2.8-.4-4-1.1v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V3h2.7z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

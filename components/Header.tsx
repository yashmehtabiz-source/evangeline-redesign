"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "The Science", href: "/science" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Promo bar */}
      <div className="bg-sage text-surface">
        <p className="px-5 py-2 text-center text-[11px] uppercase tracking-[0.14em]">
          Complimentary shipping on orders of two or more. Built by Dr. Riam
          Shammaa, MD.
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-surface shadow-[0_1px_0_rgba(26,26,26,0.06),0_8px_24px_-16px_rgba(26,26,26,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
          {/* Mobile: hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>

          {/* Brand lockup */}
          <Link href="/" aria-label="Evangeline — home">
            <Image
              src="/brand/logo/evangeline-lockup.png"
              alt="Evangeline"
              width={400}
              height={208}
              priority
              className="h-11 w-auto md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-xs uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-sage"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Search" className="text-ink hover:text-sage">
              <SearchIcon />
            </button>
            <Link href="/account" aria-label="Account" className="text-ink hover:text-sage">
              <AccountIcon />
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative text-ink hover:text-sage"
            >
              <CartIcon />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-sage px-1 text-[9px] text-surface">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen ? (
          <nav className="border-t border-taupe/40 bg-surface md:hidden">
            <ul className="flex flex-col px-5 py-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-body text-sm uppercase tracking-[0.12em] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}

/* ---- inline icons (16–20px, 1.5 stroke) ---- */

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l-1 13H7L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

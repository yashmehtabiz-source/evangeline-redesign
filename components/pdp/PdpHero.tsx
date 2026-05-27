"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import BrandImage from "@/components/BrandImage";
import Eyebrow from "@/components/Eyebrow";
import Stars from "@/components/Stars";

const THUMBS = [
  { alt: "Biostem Serum, front view", src: "/brand/products/biostem-serum-front.jpg" },
  { alt: "Biostem Serum, angled view", src: "/brand/products/biostem-serum-angled.jpg" },
  { alt: "Biostem Serum, detail view", src: "/brand/products/biostem-serum-detail.jpg" },
  { alt: "Evangeline serum textures", src: "/brand/products/textures-dollops.jpg" },
];

export default function PdpHero() {
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<"30" | "50">("30");
  const [qty, setQty] = useState(1);

  return (
    <section className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
        {/* Gallery */}
        <div>
          <BrandImage
            src={THUMBS[active].src}
            alt={THUMBS[active].alt}
            aspectRatio="1/1"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {THUMBS.map((t, i) => (
              <button
                key={t.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={t.alt}
                style={{ aspectRatio: "1/1" }}
                className={`relative overflow-hidden rounded-[var(--radius-card)] bg-placeholder transition-colors ${
                  active === i ? "border border-sage" : "border border-taupe/60"
                }`}
              >
                <Image
                  src={t.src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Buy block */}
        <div>
          <Eyebrow>Treatment Serum · Step 02</Eyebrow>
          <h1 className="mt-3 font-display text-[36px] leading-tight md:text-[52px]">
            Biostem Serum
          </h1>
          <p className="mt-3 font-body text-base text-ink-soft md:text-lg">
            The biostimulating treatment serum — botanical stem cells and
            Vitamin C for visible firmness.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars />
            <span className="font-body text-sm text-ink">4.9</span>
            <span className="font-body text-sm text-ink-soft">
              Based on 247 verified reviews
            </span>
          </div>

          <p className="mt-6 font-display text-[28px] text-ink">$168 CAD</p>
          <p className="mt-2 text-[13px] tracking-wide text-taupe">
            Or 4 interest-free payments of $42 CAD. Complimentary shipping on
            orders of two or more.
          </p>

          {/* Size — visual selection only */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSize("30")}
              className={`rounded-[var(--radius-control)] border px-5 py-2.5 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
                size === "30"
                  ? "border-sage text-sage"
                  : "border-ink/40 text-ink"
              }`}
            >
              30 ml
            </button>
            <button
              type="button"
              onClick={() => setSize("50")}
              className={`rounded-[var(--radius-control)] border px-5 py-2.5 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
                size === "50"
                  ? "border-sage text-sage"
                  : "border-ink/40 text-ink"
              }`}
            >
              50 ml — $248 CAD
            </button>
          </div>

          {/* Quantity */}
          <div className="mt-4 inline-flex items-center rounded-[var(--radius-control)] border border-ink/40">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-4 py-2.5 text-ink hover:text-sage"
            >
              −
            </button>
            <span className="min-w-8 text-center font-body text-sm text-ink">
              {qty}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => q + 1)}
              className="px-4 py-2.5 text-ink hover:text-sage"
            >
              +
            </button>
          </div>

          <div className="mt-6">
            <Button className="w-full">Add to Ritual — $168 CAD</Button>
          </div>
          <p className="mt-3 text-center">
            <Link
              href="/#ritual"
              className="font-body text-sm text-sage hover:text-ink"
            >
              Or build the full 4-step ritual — $510 →
            </Link>
          </p>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-taupe/40 pt-6">
            <TrustItem icon={<VialIcon />} label="Doctor-formulated" />
            <TrustItem icon={<LeafIcon />} label="Cruelty-free" />
            <TrustItem icon={<TruckIcon />} label="Ships in 2 days" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-sage">{icon}</span>
      <span className="font-body text-[11px] uppercase tracking-[0.1em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}

/* ---- hand-drawn single-stroke glyphs ---- */

function VialIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6" />
      <path d="M10 3v11a3 3 0 0 0 6 0V3" transform="translate(-1 0)" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <line x1="5" y1="19" x2="14" y2="10" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 6h11v9H2z" />
      <path d="M13 9h4l3 3v3h-7z" />
      <circle cx="6" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

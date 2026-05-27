import Section from "@/components/Section";
import BrandImage from "@/components/BrandImage";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const POINTS = [
  {
    label: "Firmness & Tone",
    value: "Botanical stem cells signal structural protein renewal.",
  },
  {
    label: "Antioxidant Defense",
    value: "Stabilized Vitamin C neutralizes oxidative stress.",
  },
  {
    label: "Visible Brightening",
    value: "Even tone develops with consistent use over 6–8 weeks.",
  },
];

export default function WhatItDoes() {
  return (
    <Section>
      <div className="grid items-start gap-10 md:grid-cols-5 md:gap-14">
        {/* Text — ~40% */}
        <Reveal className="md:col-span-2">
          <Eyebrow>What It Does</Eyebrow>
          <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
            A treatment, not a topical.
          </h2>
          <p className="mt-4 max-w-[44ch] font-body text-base leading-relaxed text-ink-soft">
            Biostem Serum is built around three biostimulating signals —
            botanical stem cells, a stabilized form of Vitamin C, and a
            multi-peptide complex. Together they support the skin&apos;s own
            production of collagen and elastin, defend against oxidative damage,
            and even tone over the kind of timeframe a real treatment plan would
            expect.
          </p>

          <dl className="mt-8 border-t border-sage/40">
            {POINTS.map((p) => (
              <div key={p.label} className="border-b border-sage/40 py-4">
                <dt className="font-display text-[17px] leading-snug text-ink">
                  {p.label}
                </dt>
                <dd className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
                  {p.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Image — ~60% */}
        <Reveal delay={120} className="md:col-span-3">
          <BrandImage
            src="/brand/products/textures-dollops.jpg"
            alt="Evangeline product textures — four dollops in a row"
            aspectRatio="4/5"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}

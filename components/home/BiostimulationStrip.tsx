import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import BioIcon, { type BioIconType } from "@/components/BioIcon";

const COLUMNS: { icon: BioIconType; heading: string; body: string }[] = [
  {
    icon: "delivery",
    heading: "Stem Cell Liposomal Delivery",
    body: "Microscopic carriers deliver active ingredients deeper than conventional serums can reach.",
  },
  {
    icon: "peptide",
    heading: "Multi-Peptide Complexes",
    body: "Targeted signals that prompt the skin to produce more of its own structural proteins.",
  },
  {
    icon: "botanical",
    heading: "Botanical Stem Cells",
    body: "Plant-derived actives that defend against oxidative stress and cellular fatigue.",
  },
];

export default function BiostimulationStrip() {
  return (
    <section className="border-y border-taupe/50 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <Eyebrow>What Makes This Different</Eyebrow>
          <h2 className="mt-4 max-w-[22ch] font-display text-[32px] leading-[1.1] md:text-[40px]">
            Most skincare sits on the skin. Ours speaks to it.
          </h2>
          <p className="mt-4 max-w-[62ch] font-body text-base leading-relaxed text-ink-soft">
            Biostimulation is the act of triggering the skin&apos;s own renewal
            — collagen, hydration, cellular turnover. It&apos;s the science
            behind aesthetic clinics, now formulated for daily use at home.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {COLUMNS.map((col, i) => (
            <Reveal key={col.heading} delay={i * 100}>
              <BioIcon type={col.icon} />
              <h3 className="mt-4 font-display text-xl leading-snug">
                {col.heading}
              </h3>
              <p className="mt-2 max-w-[34ch] font-body text-sm leading-relaxed text-ink-soft">
                {col.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Link
          href="/about#science"
          className="mt-10 inline-block font-body text-sm text-sage transition-colors hover:text-ink"
        >
          Read the full science →
        </Link>
      </div>
    </section>
  );
}

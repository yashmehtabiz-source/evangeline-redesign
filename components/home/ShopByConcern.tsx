import Link from "next/link";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ConcernCard, { type Concern } from "@/components/ConcernCard";

const CONCERNS: Concern[] = [
  {
    name: "Firmness & Tone",
    title: "Biostem Serum",
    body: "Botanical stem cells and Vitamin C to visibly lift and tone.",
    href: "/shop/biostem-serum",
  },
  {
    name: "Hydration & Barrier",
    title: "Biostem Daily Moisture Complex",
    body: "Liposomal hydration with azelaic acid for calm, even skin.",
    href: "/shop/biostem-daily-moisture-complex",
  },
  {
    name: "Under-Eye Concerns",
    title: "Biopeptide Eye Restore",
    body: "Tripeptides and diamond extract for puffiness, fine lines, and dark circles.",
    href: "/shop/biopeptide-eye-restore",
  },
  {
    name: "Daily Cleanse",
    title: "Nourishing BioPro Cleanser",
    body: "Kombucha and niacinamide. Removes everything, strips nothing.",
    href: "/shop/nourishing-biopro-cleanser",
  },
];

export default function ShopByConcern() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Where to Begin</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
          Start with what your skin is telling you.
        </h2>
        <p className="mt-4 max-w-[62ch] font-body text-base leading-relaxed text-ink-soft">
          Four concerns, four targeted formulas. Choose where you&apos;d like to
          begin — or build the full ritual.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CONCERNS.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <ConcernCard {...c} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center">
        <Link
          href="/shop"
          className="font-body text-ink underline decoration-sage decoration-1 underline-offset-4 transition-colors hover:text-sage"
        >
          Or see all four products in The Ritual →
        </Link>
      </p>
    </Section>
  );
}

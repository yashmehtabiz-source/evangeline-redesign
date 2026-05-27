import Link from "next/link";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import BioIcon, { type BioIconType } from "@/components/BioIcon";

const COLUMNS: { icon: BioIconType; heading: string; body: string }[] = [
  {
    icon: "delivery",
    heading: "Stem Cell Liposomal Delivery",
    body: "Microscopic carriers — liposomes — encapsulate active ingredients and deliver them past the skin's outer barrier, where conventional serums lose most of their payload. The same delivery technology used in injectable aesthetics, reformulated for topical use.",
  },
  {
    icon: "peptide",
    heading: "Multi-Peptide Signaling",
    body: "Peptides are short chains of amino acids that act as biological messages. The right peptides tell the skin to produce more collagen, more elastin, more of the proteins that thinning skin no longer makes on its own.",
  },
  {
    icon: "botanical",
    heading: "Botanical Stem Cell Actives",
    body: "Plant-derived stem cells carry the same self-renewal signaling molecules found in your own skin's basal layer. Used at concentration, they support fibroblast activity and help defend against oxidative damage — the everyday cellular fatigue that accelerates visible aging.",
  },
];

export default function ScienceOfBiostim() {
  return (
    <Section id="science" className="md:py-32">
      <Reveal className="max-w-3xl">
        <Eyebrow>The Science</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[44px]">
          What biostimulation actually does.
        </h2>
        <p className="mt-4 max-w-[60ch] font-body text-base leading-relaxed text-ink-soft">
          Biostimulation isn&apos;t a marketing word — it&apos;s a biology one.
          It&apos;s the act of giving the skin the specific signals it needs to
          do what it already knows how to do: renew, build, defend.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {COLUMNS.map((col, i) => (
          <Reveal key={col.heading} delay={i * 100}>
            <BioIcon type={col.icon} size={64} />
            <h3 className="mt-5 font-display text-[22px] leading-snug">
              {col.heading}
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-ink-soft">
              {col.body}
            </p>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 text-center">
        <Link
          href="/shop"
          className="font-body text-sm text-sage underline decoration-sage decoration-1 underline-offset-4 transition-colors hover:text-ink"
        >
          Read about the formulations in detail →
        </Link>
      </p>
    </Section>
  );
}

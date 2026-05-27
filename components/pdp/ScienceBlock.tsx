import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Accordion, { type AccordionItem } from "@/components/Accordion";

/** Paragraph + thin sage line + small caption — shared shape for science items. */
function ScienceContent({ body, caption }: { body: string; caption: string }) {
  return (
    <>
      <p>{body}</p>
      <hr className="my-4 border-t border-sage/40" />
      <p className="text-xs text-ink-soft">{caption}</p>
    </>
  );
}

const ITEMS: AccordionItem[] = [
  {
    title: "Botanical Stem Cells",
    defaultOpen: true,
    content: (
      <ScienceContent
        body="Plant-derived stem cells contain the same self-renewal signaling proteins that exist in your skin's basal layer. Delivered via liposomal encapsulation, they support fibroblast activity and the natural production of collagen and elastin."
        caption="Concentration: clinically-relevant level. Sourced in Switzerland."
      />
    ),
  },
  {
    title: "Stabilized Vitamin C (3-O-Ethyl Ascorbic Acid)",
    content: (
      <ScienceContent
        body="A stable, non-irritating derivative of ascorbic acid that delivers the brightening and antioxidant benefits of Vitamin C without the pH instability or sensitivity of traditional L-ascorbic acid serums. Suitable for daily morning use, even on reactive skin."
        caption="Concentration: 5%."
      />
    ),
  },
  {
    title: "Multi-Peptide Complex",
    content: (
      <ScienceContent
        body="A targeted blend of signal peptides and carrier peptides that prompt the skin to build more of its own structural proteins. Peptides work slowly and quietly — expect cumulative change, not overnight transformation."
        caption="Includes acetyl tetrapeptide-9, palmitoyl tripeptide-1."
      />
    ),
  },
  {
    title: "Hyaluronic Acid + Liposomal Delivery System",
    content: (
      <ScienceContent
        body="Multi-weight hyaluronic acid hydrates at three depths of the skin. Encased in liposomal carriers, the full active payload is delivered deeper than a conventional serum can reach."
        caption="Cosmetic-grade liposomes, average particle size <100nm."
      />
    ),
  },
];

export default function ScienceBlock() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow>The Science</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
          What&apos;s actually in the bottle.
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
          Every active in Biostem Serum is here because it does something
          specific. No filler claims, no buzzword chemistry.
        </p>
      </Reveal>

      <div className="mt-10 max-w-3xl">
        <Accordion items={ITEMS} />
        <a
          href="#"
          className="mt-6 inline-block font-body text-sm text-ink underline decoration-sage decoration-1 underline-offset-4 transition-colors hover:text-sage"
        >
          View the full ingredient list →
        </a>
      </div>
    </Section>
  );
}

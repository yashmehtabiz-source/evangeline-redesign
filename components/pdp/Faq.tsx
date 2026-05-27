import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Accordion, { type AccordionItem } from "@/components/Accordion";

const ITEMS: AccordionItem[] = [
  {
    title: "When will I see results?",
    defaultOpen: true,
    content:
      "Most visible firmness and brightness develop between weeks 6 and 10 of daily use. Biostimulation is cumulative — the skin's own renewal is what you're working with, not a quick cosmetic effect.",
  },
  {
    title: "Can I use this with retinol or AHAs?",
    content:
      "Yes, with sensible spacing. Use Biostem Serum in the morning and your retinol or AHA at night. If you prefer the evening, apply the serum first and introduce the others slowly to let your skin adjust.",
  },
  {
    title: "Is this safe during pregnancy or breastfeeding?",
    content:
      "The formula avoids retinoids and high-dose acids, but every pregnancy is different. We recommend confirming with your physician before adding any active to your routine.",
  },
  {
    title: "What does it smell like?",
    content:
      "Close to nothing. There are no synthetic fragrances or essential oils added — any faint scent comes from the actives themselves and fades within seconds of application.",
  },
  {
    title: "Will this work for sensitive skin?",
    content:
      "The stabilized Vitamin C and peptide complex were chosen specifically to avoid the irritation associated with traditional L-ascorbic acid. Most reactive skin tolerates it well, but patch-test first if you're prone to reactions.",
  },
  {
    title: "How long does one bottle last?",
    content:
      "Used as directed — two to three drops, morning and night — a 30 ml bottle lasts roughly eight to ten weeks. The 50 ml size extends that to about four months.",
  },
];

export default function Faq() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
          What we get asked most.
        </h2>
      </Reveal>

      <div className="mt-10 max-w-3xl">
        <Accordion items={ITEMS} />
      </div>
    </Section>
  );
}

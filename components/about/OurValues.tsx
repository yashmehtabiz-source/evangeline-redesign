import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    n: "01",
    heading: "Science-Backed Skincare",
    body: "Every formulation is built on biotechnology that earns its place. No filler ingredients, no buzzword chemistry, no inherited industry assumptions. If an active is in the bottle, it does something specific.",
  },
  {
    n: "02",
    heading: "Accessible Luxury",
    body: "Clinical results shouldn't require legacy-brand pricing. We've priced Evangeline where a real daily ritual is possible — premium feel, professional-grade actives, without the markup that built old luxury houses.",
  },
  {
    n: "03",
    heading: "Elevated Self-Care",
    body: "Skincare as ritual, not maintenance. The four-step routine is designed to feel like the calmest part of your day — confident, deliberate, the kind of self-care that asks the science to do the heavy lifting.",
  },
];

export default function OurValues() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <h2 className="font-display text-[32px] leading-[1.1] md:text-[40px]">
          Our Values
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-10">
        {VALUES.map((v, i) => (
          <Reveal key={v.n} delay={i * 100}>
            <p className="font-display text-[64px] leading-none text-sage/70">
              {v.n}
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug">
              {v.heading}
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.7] text-ink-soft">
              {v.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

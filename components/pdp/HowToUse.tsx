import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    heading: "Cleanse first",
    body: "Use Biopro Cleanser morning and night. Pat skin dry, leaving slightly damp.",
  },
  {
    n: "02",
    heading: "Two to three drops",
    body: "Apply with the dropper directly to fingertips. Press gently into the face and neck.",
  },
  {
    n: "03",
    heading: "Layer with moisturizer",
    body: "Follow with Biostem Daily Moisture Complex to seal. Use SPF in the morning.",
  },
];

export default function HowToUse() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <Eyebrow>The Ritual</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
          How to use Biostem Serum.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 100}>
            <p className="font-display text-[48px] leading-none text-sage/70">
              {step.n}
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug">
              {step.heading}
            </h3>
            <p className="mt-2 max-w-[34ch] font-body text-sm leading-relaxed text-ink-soft">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 font-body text-xs text-ink-soft">
        Patch-test if your skin is reactive. Discontinue if irritation persists.
      </p>
    </Section>
  );
}

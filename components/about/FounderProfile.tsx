import Section from "@/components/Section";
import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function FounderProfile() {
  return (
    <Section className="md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-[55fr_45fr] md:gap-14">
        {/* Portrait — 55% */}
        <Reveal>
          <Placeholder
            label="Founder Editorial Portrait"
            aspectRatio="4/5"
            note="Dr. Shammaa — editorial, soft natural light, lab or studio backdrop, ideally direct gaze, contemplative not smiling"
          />
        </Reveal>

        {/* Copy — 45% */}
        <Reveal delay={120}>
          <div className="max-w-[46ch]">
            <Eyebrow>The Founder</Eyebrow>
            <h2 className="mt-4 font-display text-[40px] leading-tight md:text-[52px]">
              Dr. Riam Shammaa, MD.
            </h2>
            <p className="mt-3 font-body text-lg italic text-ink-soft">
              Regenerative-medicine physician. Founder, Pallianera Pharma.
              Pioneer in cell therapy and translational medicine.
            </p>
            <div className="mt-6 space-y-5 font-body text-[17px] leading-[1.7] text-ink-soft">
              <p>
                Dr. Shammaa&apos;s career began in cell therapy and regenerative
                medicine — fields built on a simple idea: that the body&apos;s
                own biology, when given the right signals, can repair what it
                loses. He&apos;s published internationally, holds multiple
                patents in cell therapy, and in 2014 performed Canada&apos;s
                first successful stem-cell spinal disc repair.
              </p>
              <p>
                His company, Pallianera Pharma, has supplied dermal fillers and
                aesthetic biotechnology to professional clinics across Canada for
                over a decade. Most of what&apos;s in a clinical aesthetics chair
                starts in companies like his.
              </p>
              <p>
                Evangeline is the consumer expression of that same
                biotechnology — engineered to a clinical standard, formulated
                for daily use at home.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

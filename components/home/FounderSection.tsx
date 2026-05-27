import Section from "@/components/Section";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function FounderSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-5 md:gap-14">
        {/* Portrait — ~60% */}
        <Reveal className="md:col-span-3">
          <Placeholder
            label="Founder Portrait"
            aspectRatio="4/5"
            note="Dr. Shammaa — editorial, soft natural light, lab or studio backdrop, ideally direct gaze to camera"
          />
        </Reveal>

        {/* Copy — ~40% */}
        <Reveal delay={120} className="md:col-span-2">
          <Eyebrow>Built by a Doctor</Eyebrow>
          <h2 className="mt-4 font-display text-[36px] leading-tight md:text-[44px]">
            Dr. Riam Shammaa, MD.
          </h2>
          <p className="mt-3 font-display text-lg italic text-ink-soft md:text-xl">
            Founder, Pallianera Pharma. Pioneer in regenerative medicine.
          </p>
          <p className="mt-5 max-w-[46ch] font-body text-base leading-relaxed text-ink-soft">
            Before Evangeline, Dr. Shammaa&apos;s company supplied dermal
            fillers to professional aesthetics clinics. He performed
            Canada&apos;s first successful stem-cell spinal disc repair and holds
            multiple patents in cell therapy. Evangeline is the consumer
            expression of that same biotechnology — the kind of science usually
            reserved for a clinic chair, formulated for a bathroom shelf.
          </p>
          <blockquote className="mt-8 border-l-2 border-sage pl-5 font-display text-[22px] italic leading-snug text-ink">
            Skincare shouldn&apos;t be a guess. It should be a system the skin
            actually recognizes.
          </blockquote>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Read the Full Story
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

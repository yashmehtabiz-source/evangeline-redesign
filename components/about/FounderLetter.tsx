import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function FounderLetter() {
  return (
    <section className="bg-bg px-5 py-24 md:px-10 md:py-36">
      <Reveal className="mx-auto max-w-[680px]">
        <Eyebrow className="text-center">A Letter From the Founder</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
          On building Evangeline.
        </h2>

        <div className="mt-8 space-y-6 font-body text-[17px] leading-[1.8] text-ink-soft">
          <p>
            I spent the first half of my career in regenerative medicine —
            looking for the smallest signals the body responds to, and figuring
            out how to give them deliberately. Stem-cell therapy for the spine.
            Cell biology for tissue repair. Biotechnology built on the idea that
            you don&apos;t need to add foreign material to the body if you can
            convince the body&apos;s own systems to do the work.
          </p>
          <p>
            Pallianera grew out of that work. We supplied clinics across Canada
            with dermal fillers and aesthetic biotechnology — the kind of
            formulations professionals use because they actually move the
            biology, not because the marketing is compelling.
          </p>
          <p>
            Over the years, I&apos;d watch people walk out of clinics with
            results, then walk into department stores and pay $400 for creams
            that did far less. The biotechnology was already there. It just
            wasn&apos;t being formulated for daily life. That&apos;s the gap
            Evangeline closes.
          </p>
          <p>
            Every formula is something I&apos;d be comfortable having on my own
            bathroom shelf. That&apos;s the bar. Thank you for trusting us with
            your routine.
          </p>
        </div>

        <div className="mt-10 max-w-[200px]">
          <Placeholder
            label="Signature"
            aspectRatio="3/1"
            note="Dr. Shammaa's handwritten signature, scanned, transparent background"
          />
        </div>
        <p className="mt-4 font-body text-[15px] font-medium text-ink">
          Dr. Riam Shammaa, MD
        </p>
        <p className="mt-1 font-body text-[13px] text-ink-soft">
          Founder &amp; CEO, Evangeline · Pallianera Pharma
        </p>
      </Reveal>
    </section>
  );
}

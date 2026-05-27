import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function TheGap() {
  return (
    <section className="bg-bg px-5 py-20 md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <Eyebrow className="text-center">Why Evangeline Exists</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[44px]">
          Most luxury skincare is luxury packaging.
        </h2>
        <div className="mt-6 space-y-5 font-body text-[17px] leading-[1.7] text-ink-soft">
          <p>
            After more than a decade of supplying clinics, Dr. Shammaa watched
            the same pattern repeat: customers paying $400+ for legacy luxury
            creams whose active formulations were less advanced than what was
            already being used in clinic. Brand stories did the work that
            biology should have done.
          </p>
          <p>
            Evangeline closes that gap. Clinical-grade biostimulation.
            Editorial-grade design. Priced where a daily ritual can actually
            live.
          </p>
        </div>

        <blockquote className="mx-auto mt-10 max-w-[60ch] border-l-2 border-sage pl-6 text-left font-display text-[22px] italic leading-snug text-ink md:text-[24px]">
          “We didn&apos;t set out to make skincare. We set out to make the
          clinical-grade biology that&apos;s behind it accessible — every
          morning, every night.”
          <footer className="mt-3 font-body text-sm not-italic text-ink-soft">
            — Dr. Riam Shammaa, MD
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}

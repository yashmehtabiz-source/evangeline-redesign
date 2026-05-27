import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const PARTNERS = 5;

/** Sage credibility strip — shared by the homepage and the About page. */
export default function ClinicalAuthority() {
  return (
    <section className="bg-sage text-surface">
      <div className="mx-auto max-w-[720px] px-5 py-16 text-center md:px-10">
        <Reveal>
          <Eyebrow tone="ivory">Also Trusted in Clinic</Eyebrow>
          <h2 className="mt-4 font-display text-[26px] leading-snug text-surface md:text-[28px]">
            Available in select aesthetic clinics and wellness spas across
            Canada.
          </h2>
          <p className="mt-3 font-body text-[15px] text-surface/80">
            The same biotechnology used by professionals — now formulated for
            daily care.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: PARTNERS }).map((_, i) => (
            <div
              key={i}
              style={{ aspectRatio: "3/1" }}
              className="flex items-center justify-center rounded-[var(--radius-card)] border border-surface/30 px-2 text-center text-[9px] uppercase leading-tight tracking-[0.12em] text-surface/60"
            >
              Clinic Partner Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

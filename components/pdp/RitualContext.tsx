import { Fragment } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const STEPS = [
  { n: "01", label: "Cleanse" },
  { n: "02", label: "Treat" },
  { n: "03", label: "Eye" },
  { n: "04", label: "Moisturize" },
];

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sage" aria-hidden="true">
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="13 7 19 12 13 17" />
    </svg>
  );
}

export default function RitualContext() {
  return (
    <Section>
      <Reveal>
        <div className="grid items-center gap-10 rounded-[var(--radius-card)] border border-taupe/60 bg-surface p-6 md:grid-cols-2 md:gap-12 md:p-12">
          {/* Flat-lay */}
          <Placeholder
            label="Ritual Flat-Lay — Biostem in context"
            aspectRatio="1/1"
            note="All four products arranged on warm cream surface with hand reaching toward Biostem"
          />

          {/* Copy */}
          <div>
            <Eyebrow>Where It Fits</Eyebrow>
            <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[32px]">
              Step 02 of the four-step ritual.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              Biostem Serum is the treatment step. Use after cleansing, before
              moisturizer. Most visible firmness and brightness arrive after
              eight weeks of daily use — paired with the moisturizer and eye
              cream for full ritual benefit.
            </p>

            {/* Step flow */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              {STEPS.map((step, i) => (
                <Fragment key={step.n}>
                  <span
                    className={`font-body text-xs uppercase tracking-[0.1em] ${
                      step.label === "Treat"
                        ? "font-medium text-sage"
                        : "text-ink-soft"
                    }`}
                  >
                    {step.n} {step.label}
                  </span>
                  {i < STEPS.length - 1 && <ArrowRight />}
                </Fragment>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/#ritual" variant="secondary">
                Build the Full Ritual — $510 CAD
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

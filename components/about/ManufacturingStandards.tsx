import Section from "@/components/Section";
import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const STANDARDS = [
  {
    label: "Cruelty-free",
    detail: "No animal testing at any stage of formulation or finished-goods.",
  },
  {
    label: "No synthetic fragrance",
    detail: "All four formulas are formulated without added perfume.",
  },
  {
    label: "Cosmetic-pharmaceutical grade",
    detail: "Manufactured in a facility licensed for medical-grade production.",
  },
  {
    label: "90% recyclable packaging",
    detail:
      "Glass primary containers, recyclable secondary packaging. Sustainability is ongoing, not finished.",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-sage" aria-hidden="true">
      <polyline points="4 12 10 18 20 6" />
    </svg>
  );
}

export default function ManufacturingStandards() {
  return (
    <Section>
      <Reveal>
        <div className="grid items-center gap-10 rounded-[var(--radius-card)] border border-taupe/60 bg-surface p-6 md:grid-cols-2 md:gap-12 md:p-12">
          {/* Facility */}
          <Placeholder
            label="Manufacturing — Vancouver Facility"
            aspectRatio="4/3"
            note="Clean lab interior, gloved hands, or product flat-lay on neutral surface — restrained editorial"
          />

          {/* Copy */}
          <div>
            <Eyebrow>Made in Vancouver</Eyebrow>
            <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
              Clinical-grade standards. Domestic supply chain.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              Every Evangeline formula is manufactured in Vancouver, British
              Columbia, in a facility built for cosmetic-pharmaceutical-grade
              production. Active ingredients are sourced traceably — botanical
              stem cells from Switzerland, peptide complexes from licensed
              European labs. We don&apos;t outsource to white-label factories or
              distant contract manufacturers.
            </p>

            <ul className="mt-6 space-y-4">
              {STANDARDS.map((s) => (
                <li key={s.label} className="flex gap-3">
                  <CheckIcon />
                  <span className="font-body text-sm leading-relaxed text-ink-soft">
                    <span className="font-medium text-ink">{s.label}</span> —{" "}
                    {s.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

import Reveal from "@/components/Reveal";

const STATS = [
  { value: "97%", outcome: "saw firmer skin in 8 weeks" },
  { value: "92%", outcome: "saw more even tone" },
  { value: "89%", outcome: "reported a brighter complexion" },
  { value: "0", outcome: "synthetic fragrances or parabens" },
];

export default function PromiseBar() {
  return (
    <section className="border-y border-taupe/50 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.value + s.outcome}
                className={[
                  "px-4 py-4 text-center md:py-2",
                  // 2-col mobile: vertical divider on right column
                  i % 2 === 1 ? "border-l border-taupe/50" : "",
                  // 2-col mobile: horizontal divider above bottom row
                  i >= 2 ? "border-t border-taupe/50" : "",
                  // 4-col desktop: vertical dividers only, no top borders
                  "md:border-t-0",
                  i % 4 === 0 ? "md:border-l-0" : "md:border-l md:border-taupe/50",
                ].join(" ")}
              >
                <p className="font-display text-[32px] leading-none text-sage">
                  {s.value}
                </p>
                <p className="mt-2 font-body text-sm font-medium leading-snug text-ink">
                  {s.outcome}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-body text-[11px] text-ink-soft">
            Self-assessment study, n=120, 8 weeks of daily use.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

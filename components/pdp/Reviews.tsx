import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";

interface Review {
  stars: number;
  title: string;
  body: string;
  name: string;
  age: number;
  skinType: string;
  duration: string;
  initials: string;
}

const DISTRIBUTION = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 10 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

const REVIEWS: Review[] = [
  {
    stars: 5,
    title: "The slow-build effect is real.",
    body: "I'm three months in. The change isn't dramatic week to week, but I caught my reflection last week and genuinely paused. Skin looks tighter and more even. The texture is lightweight, no stickiness, no fragrance.",
    name: "Sana K.",
    age: 47,
    skinType: "Combination",
    duration: "3 months in",
    initials: "SK",
  },
  {
    stars: 5,
    title: "Replaced two products I used to use.",
    body: "I was layering a separate vitamin C and a firming serum. This does the work of both, and my skin looks more even than it did with the two of them combined. Absorbs fast and sits well under sunscreen.",
    name: "Janelle R.",
    age: 52,
    skinType: "Normal",
    duration: "4 months in",
    initials: "JR",
  },
  {
    stars: 5,
    title: "Brighter, calmer, that's it. That's the review.",
    body: "Six weeks. Less redness around my nose and my skin looks brighter first thing in the morning. No breakouts, no irritation. I don't have much more to add — it just works for me.",
    name: "Nico M.",
    age: 44,
    skinType: "Combination",
    duration: "6 weeks in",
    initials: "NM",
  },
  {
    stars: 4,
    title: "Patience required.",
    body: "Want to be honest — at five weeks I'm not seeing dramatic change yet. Texture and feel are excellent and my skin isn't reacting, which has been a problem for me with other actives. Hoping for more visible results around the 8-week mark.",
    name: "Pat M.",
    age: 53,
    skinType: "Dry",
    duration: "5 weeks in",
    initials: "PM",
  },
  {
    stars: 5,
    title: "Finally, science I can read.",
    body: "I actually understood what every ingredient was for before I bought it, which almost never happens. Two months in and my skin feels firmer along the jaw and the tone is more even. The transparency is what keeps me reordering.",
    name: "Marisol G.",
    age: 49,
    skinType: "Combination",
    duration: "2 months in",
    initials: "MG",
  },
  {
    stars: 5,
    title: "My dermatologist asked what I was using.",
    body: "Went in for a routine check and she commented that my skin looked well-hydrated and even. I've only changed one thing in my routine. It's gentle enough for my dry skin and nothing has flared.",
    name: "Jessie P.",
    age: 49,
    skinType: "Dry",
    duration: "4 months in",
    initials: "JP",
  },
];

export default function Reviews() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Real Reviews</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
          What the ritual looks like in real life.
        </h2>
        <p className="mt-4 font-body text-base text-ink-soft">
          <span className="text-sage">4.9</span> out of 5 ·{" "}
          <span className="font-medium text-ink">247 verified reviews</span> ·{" "}
          <span className="text-sage">96%</span> would recommend
        </p>

        {/* Distribution */}
        <div className="mt-6 max-w-md space-y-2">
          {DISTRIBUTION.map((d) => (
            <div key={d.stars} className="flex items-center gap-3">
              <span className="w-8 shrink-0 font-body text-xs text-ink-soft">
                {d.stars}★
              </span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-taupe/40">
                <span
                  className="block h-full rounded-full bg-sage"
                  style={{ width: `${d.pct}%` }}
                />
              </span>
              <span className="w-10 shrink-0 text-right font-body text-xs text-ink-soft">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Review cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name + r.title} delay={(i % 2) * 100}>
            <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-taupe/60 bg-surface p-8">
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <span className="text-[10px] uppercase tracking-[0.14em] text-sage">
                  Verified Buyer
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                {r.title}
              </h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-ink-soft">
                {r.body}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-placeholder font-body text-[11px] uppercase tracking-wide text-sage"
                >
                  {r.initials}
                </span>
                <span className="font-body text-xs text-ink-soft">
                  {r.name} · {r.age} · {r.skinType} · {r.duration}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center">
        <a
          href="#"
          className="font-body text-sm text-sage transition-colors hover:text-ink"
        >
          See all 247 reviews →
        </a>
      </p>
    </Section>
  );
}

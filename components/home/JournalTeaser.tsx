import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import JournalCard, { type JournalEntry } from "@/components/JournalCard";

const ENTRIES: JournalEntry[] = [
  {
    category: "Science",
    title: "What 'Biostimulation' Actually Means",
    excerpt:
      "The difference between skincare that sits on the surface and skincare that prompts the skin to renew itself.",
    href: "/journal",
  },
  {
    category: "Ritual",
    title: "Building a Four-Step Evening Routine",
    excerpt:
      "Cleanse, treat, restore, seal — how the four formulas layer for the way skin repairs overnight.",
    href: "/journal",
  },
  {
    category: "Founder",
    title: "Why Dr. Shammaa Left the Clinic for the Bathroom Shelf",
    excerpt:
      "A regenerative-medicine career, distilled into four products you can use at home.",
    href: "/journal",
  },
];

export default function JournalTeaser() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>From the Journal</Eyebrow>
        <h2 className="mt-4 max-w-[40ch] font-display text-[28px] leading-[1.15] md:text-[32px]">
          Notes on biostimulation, skin biology, and the science of looking like
          yourself.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {ENTRIES.map((e, i) => (
          <Reveal key={e.title} delay={i * 80}>
            <JournalCard {...e} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

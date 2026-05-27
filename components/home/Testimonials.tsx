import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import TestimonialCard, {
  type Testimonial,
} from "@/components/TestimonialCard";

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I used to think you had to spend a fortune to get real results. Two months in and my skin looks like I've been on a treatment plan.",
    name: "Sana K.",
    age: 47,
    skinType: "Combination",
    initials: "SK",
  },
  {
    quote:
      "Lightweight, absorbs in seconds, no sticky residue. My skin just looks brighter — that's the only way I can describe it.",
    name: "Janelle R.",
    age: 52,
    skinType: "Normal",
    initials: "JR",
  },
  {
    quote:
      "Most cleansers either strip my face or don't clean it. This one finally got the balance right.",
    name: "Nico M.",
    age: 44,
    skinType: "Combination",
    initials: "NM",
  },
  {
    quote:
      "Real difference under my eyes. Less puffy in the morning, and concealer doesn't crease the way it used to.",
    name: "Jessie P.",
    age: 49,
    skinType: "Dry",
    initials: "JP",
  },
];

export default function Testimonials() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>From Our Community</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
          Real ritual. Real results.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 100}>
            <TestimonialCard {...t} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

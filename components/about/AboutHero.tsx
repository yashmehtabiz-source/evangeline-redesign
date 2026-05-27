import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function AboutHero() {
  return (
    <section className="flex min-h-[70vh] items-center px-5 py-20 md:px-10">
      <Reveal className="mx-auto max-w-[960px] text-center">
        <Eyebrow className="text-center">About Evangeline</Eyebrow>
        <h1 className="mt-5 font-display text-[44px] leading-[1.05] md:text-[72px] md:leading-[1.02]">
          Biotechnology, for the way skin actually ages.
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] font-body text-lg leading-relaxed text-ink-soft md:text-xl">
          Evangeline began in a clinic. It now lives in your bathroom. Same
          biotechnology, same standards — formulated by Dr. Riam Shammaa, MD,
          for daily care.
        </p>
        <hr className="mx-auto mt-10 w-20 border-t border-sage" />
      </Reveal>
    </section>
  );
}

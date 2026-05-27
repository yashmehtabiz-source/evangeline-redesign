import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function AboutCta() {
  return (
    <section className="bg-sage px-5 py-20 text-surface md:px-10 md:py-32">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <Eyebrow tone="ivory" className="text-center">
          Begin
        </Eyebrow>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] text-surface md:text-[52px]">
          The ritual is four products. The science is the difference.
        </h2>
        <p className="mx-auto mt-5 max-w-[50ch] font-body text-base text-surface/85">
          Start with the full ritual, or begin with a single product. Either
          way, the biology is the same.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/shop" variant="ivory">
            Shop the Ritual
          </Button>
          <Button href="/about#science" variant="ivory-outline">
            Read the Science
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

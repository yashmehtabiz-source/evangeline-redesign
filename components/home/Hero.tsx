import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 py-12 md:min-h-[85vh] md:grid-cols-2 md:py-0">
        {/* Text block */}
        <Reveal>
          <Eyebrow>Biostimulating Skincare — Toronto</Eyebrow>
          <h1 className="mt-5 font-display text-[40px] leading-[1.05] sm:text-[44px] md:text-[76px] md:leading-[0.98]">
            From Cellular Science to Everyday Radiance.
          </h1>
          <p className="mt-6 max-w-[52ch] font-body text-base text-ink-soft md:text-lg">
            A four-piece ritual built by Dr. Riam Shammaa, MD —
            biotechnology for the way skin actually ages.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/shop/biostem-serum">Shop the Ritual</Button>
            <Button href="/about" variant="secondary">
              Meet the Doctor
            </Button>
          </div>
          <p className="mt-6 text-[13px] tracking-wide text-taupe">
            Cruelty-free · Made in Vancouver · Shipping to Canada &amp; U.S.
          </p>
        </Reveal>

        {/* Editorial image */}
        <Reveal delay={120} className="md:pl-6">
          <Placeholder
            label="Editorial Hero"
            aspectRatio="4/5"
            note="Founder portrait OR product-in-hand close-up, soft natural light, warm cream backdrop"
          />
        </Reveal>
      </div>
    </section>
  );
}

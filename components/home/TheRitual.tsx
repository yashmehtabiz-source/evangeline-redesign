import Section from "@/components/Section";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function TheRitual() {
  const total = products.reduce((sum, p) => sum + p.priceCAD, 0);

  return (
    <Section id="ritual" className="bg-surface">
      <Reveal>
        <Eyebrow>The Full Ritual</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
          A complete routine, in four steps.
        </h2>
        <p className="mt-4 max-w-[62ch] font-body text-base leading-relaxed text-ink-soft">
          Each product is formulated to work alone — but designed to work
          together. The full ritual is the most direct path to visible change.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80}>
            <ProductCard product={product} index={i} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="sage-outline" className="px-10 py-4">
          Build the Full Ritual — ${total} CAD
        </Button>
        <p className="mt-3 font-body text-xs text-ink-soft">
          Complimentary shipping included.
        </p>
      </div>
    </Section>
  );
}

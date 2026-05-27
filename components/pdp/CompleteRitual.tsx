import Section from "@/components/Section";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const RITUAL_TOTAL = products.reduce((sum, p) => sum + p.priceCAD, 0);

// Keep original index so each card shows its real ritual step number.
const OTHERS = products
  .map((product, index) => ({ product, index }))
  .filter(({ product }) => product.slug !== "biostem-serum");

export default function CompleteRitual() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <Eyebrow>Complete the Ritual</Eyebrow>
        <h2 className="mt-4 font-display text-[28px] leading-[1.1] md:text-[36px]">
          Designed to work together.
        </h2>
        <p className="mt-4 max-w-[62ch] font-body text-base leading-relaxed text-ink-soft">
          Each product is formulated to work alone — but you&apos;ll see the
          full effect of biostimulation when the routine is complete.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {OTHERS.map(({ product, index }, i) => (
          <Reveal key={product.slug} delay={i * 80}>
            <ProductCard product={product} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="sage-outline" className="px-10 py-4" href="/#ritual">
          Build the Full Ritual — ${RITUAL_TOTAL} CAD
        </Button>
      </div>
    </Section>
  );
}

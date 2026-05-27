import Placeholder from "./Placeholder";
import Button from "./Button";
import type { Product, ProductCategory } from "@/lib/products";

const STEP_WORD: Record<ProductCategory, string> = {
  Cleanse: "CLEANSE",
  Treat: "TREAT",
  Eye: "EYE",
  Moisturize: "MOISTURIZE",
};

interface ProductCardProps {
  product: Product;
  /** Zero-based position — drives the "STEP 0X" label. */
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const step = String(index + 1).padStart(2, "0");

  return (
    <div className="flex h-full flex-col">
      <Placeholder
        label={`PRODUCT — ${product.name}`}
        aspectRatio="1/1"
      />
      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-sage">
        {`Step ${step} — ${STEP_WORD[product.category]}`}
      </p>
      <h3 className="mt-1 font-display text-[22px] leading-tight">
        {product.name}
      </h3>
      <p className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
        {product.shortDesc}
      </p>
      {/* Stable bottom block — price + CTA baseline-align across the row */}
      <div className="mt-auto pt-4">
        <p className="font-body text-sm text-ink">${product.priceCAD} CAD</p>
        <Button variant="secondary" className="mt-4 w-full">
          Add to Ritual
        </Button>
      </div>
    </div>
  );
}

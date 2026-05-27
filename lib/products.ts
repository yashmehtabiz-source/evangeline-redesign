export type ProductCategory = "Cleanse" | "Treat" | "Eye" | "Moisturize";

export interface Product {
  slug: string;
  name: string;
  priceCAD: number;
  category: ProductCategory;
  concern: string[];
  shortDesc: string;
  keyIngredients: string[];
  heroPromise: string;
}

export const products: Product[] = [
  {
    slug: "nourishing-biopro-cleanser",
    name: "Nourishing BioPro Cleanser",
    priceCAD: 60,
    category: "Cleanse",
    concern: ["Dryness", "Sensitivity"],
    shortDesc:
      "A cushioning gel-to-milk cleanser that lifts the day without stripping the barrier.",
    keyIngredients: [
      "Biostimulating peptide complex",
      "Glycerin",
      "Oat-derived beta-glucan",
    ],
    heroPromise:
      "Begin every ritual on clean, conditioned skin — never tight, never stripped.",
  },
  {
    slug: "biostem-serum",
    name: "Biostem Serum",
    priceCAD: 168,
    category: "Treat",
    concern: ["Firmness", "Dullness", "Fine lines"],
    shortDesc:
      "The hero treatment — a biostimulating serum that supports skin's own renewal.",
    keyIngredients: [
      "Proprietary biostimulation matrix",
      "Niacinamide",
      "Hyaluronic acid",
    ],
    heroPromise:
      "Biostimulation at the center of your routine — visibly firmer, more resilient skin over time.",
  },
  {
    slug: "biopeptide-eye-restore",
    name: "Biopeptide Eye Restore",
    priceCAD: 140,
    category: "Eye",
    concern: ["Puffiness", "Fine lines", "Fatigue"],
    shortDesc:
      "A concentrated peptide cream for the delicate eye area, morning and night.",
    keyIngredients: [
      "Signal peptides",
      "Caffeine",
      "Encapsulated vitamin C",
    ],
    heroPromise:
      "Restore the look of rested, lifted eyes — engineered for the most delicate skin you have.",
  },
  {
    slug: "biostem-daily-moisture-complex",
    name: "Biostem Daily Moisture Complex",
    priceCAD: 142,
    category: "Moisturize",
    concern: ["Dryness", "Firmness", "Barrier health"],
    shortDesc:
      "A biostimulating daily moisturizer that seals in treatment and rebuilds the barrier.",
    keyIngredients: [
      "Biostimulating peptide complex",
      "Ceramide blend",
      "Squalane",
    ],
    heroPromise:
      "The finishing step — lasting moisture and barrier support to carry results through the day.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

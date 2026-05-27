export type BioIconType = "delivery" | "peptide" | "botanical";

interface BioIconProps {
  type: BioIconType;
  /** Square px size. Default 48. */
  size?: number;
}

/**
 * Hand-written single-stroke sage icons for the biostimulation strip.
 * No icon library.
 */
export default function BioIcon({ type, size = 48 }: BioIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "delivery") {
    // Liposomal carrier: nested spheres with a core active.
    return (
      <svg {...common} className="text-sage">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="9" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "peptide") {
    // Multi-peptide chain: linked nodes signalling the skin.
    return (
      <svg {...common} className="text-sage">
        <line x1="13" y1="30" x2="21" y2="20" />
        <line x1="27" y1="20" x2="35" y2="30" />
        <line x1="21" y1="20" x2="27" y2="20" />
        <circle cx="11" cy="32" r="3.5" />
        <circle cx="24" cy="17" r="3.5" />
        <circle cx="37" cy="32" r="3.5" />
      </svg>
    );
  }

  // Botanical stem cell: leaf with central vein.
  return (
    <svg {...common} className="text-sage">
      <path d="M14 34c0-12 8-20 20-20 0 12-8 20-20 20z" />
      <line x1="14" y1="34" x2="30" y2="18" />
    </svg>
  );
}

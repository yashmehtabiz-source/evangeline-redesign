import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** "sage" (default) for cream sections, "ivory" for dark sage sections. */
  tone?: "sage" | "ivory";
  className?: string;
}

/** Small uppercase tracked label sitting above section headings. */
export default function Eyebrow({
  children,
  tone = "sage",
  className = "",
}: EyebrowProps) {
  const color = tone === "ivory" ? "text-surface/90" : "text-sage";
  return (
    <p
      className={`font-body text-xs uppercase tracking-[0.18em] ${color} ${className}`}
    >
      {children}
    </p>
  );
}

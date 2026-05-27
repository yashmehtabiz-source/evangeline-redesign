import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant =
  | "primary"
  | "secondary"
  | "sage-outline"
  | "ivory"
  | "ivory-outline";

const base =
  "inline-flex items-center justify-center rounded-[var(--radius-control)] px-7 py-3 text-xs uppercase tracking-[0.12em] font-body transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Primary: sage bg, ivory text
  primary: "bg-sage text-surface hover:bg-ink",
  // Secondary: ink border, ink text, transparent bg
  secondary:
    "border border-ink text-ink bg-transparent hover:bg-ink hover:text-surface",
  // Sage outline: sage border + text, fills sage on hover
  "sage-outline":
    "border border-sage text-sage bg-transparent hover:bg-sage hover:text-surface",
  // Ivory: ivory bg, ink text — for use on the sage CTA footer
  ivory: "bg-surface text-ink hover:bg-bg",
  // Ivory outline: ivory border + text, fills ivory on hover — on sage bg
  "ivory-outline":
    "border border-surface text-surface bg-transparent hover:bg-surface hover:text-ink",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** When set, render as a Next link instead of a <button>. */
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

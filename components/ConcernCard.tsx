import Link from "next/link";
import Placeholder from "./Placeholder";

export interface Concern {
  /** Concern name — used in eyebrow and placeholder label. */
  name: string;
  title: string;
  body: string;
  href: string;
}

export default function ConcernCard({ name, title, body, href }: Concern) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[var(--radius-card)] border border-taupe/60 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage"
    >
      <Placeholder
        label={`CONCERN VISUAL — ${name}`}
        aspectRatio="1/1"
      />
      <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-sage">
        {name}
      </p>
      <h3 className="mt-1 font-display text-xl leading-tight">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
        {body}
      </p>
      <span className="mt-auto pt-5 text-sm text-sage transition-colors group-hover:text-ink">
        Explore →
      </span>
    </Link>
  );
}

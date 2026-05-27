import Link from "next/link";
import Placeholder from "./Placeholder";

export interface JournalEntry {
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export default function JournalCard({
  category,
  title,
  excerpt,
  href,
}: JournalEntry) {
  return (
    <Link href={href} className="group flex flex-col">
      <Placeholder label={`JOURNAL — ${title}`} aspectRatio="16/9" />
      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-sage">
        {category}
      </p>
      <h3 className="mt-1 font-display text-xl leading-snug">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
        {excerpt}
      </p>
      <span className="mt-3 text-sm text-sage transition-colors group-hover:text-ink">
        Read →
      </span>
    </Link>
  );
}

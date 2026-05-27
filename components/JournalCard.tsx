import Link from "next/link";
import Placeholder from "./Placeholder";
import BrandImage from "./BrandImage";

export interface JournalEntry {
  category: string;
  title: string;
  excerpt: string;
  href: string;
  /** Teaser image path; absent falls back to a placeholder. */
  image?: string;
  /** Specific alt for the image. */
  imageAlt?: string;
}

export default function JournalCard({
  category,
  title,
  excerpt,
  href,
  image,
  imageAlt,
}: JournalEntry) {
  return (
    <Link href={href} className="group flex flex-col">
      {image ? (
        <BrandImage
          src={image}
          alt={imageAlt ?? title}
          aspectRatio="16/9"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <Placeholder label={`JOURNAL — ${title}`} aspectRatio="16/9" />
      )}
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

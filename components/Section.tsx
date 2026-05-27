import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  /** Render element — defaults to <section>. */
  as?: ElementType;
  /** Constrain inner content to the standard max-width. Default true. */
  contained?: boolean;
  /** Anchor id on the section element (e.g. for #ritual deep links). */
  id?: string;
  className?: string;
}

/**
 * Standard section wrapper: consistent vertical rhythm
 * (64px mobile / 96px desktop) and a centered max-width column.
 */
export default function Section({
  children,
  as: Tag = "section",
  contained = true,
  id,
  className = "",
}: SectionProps) {
  return (
    <Tag id={id} className={`scroll-mt-24 px-5 py-16 md:px-10 md:py-24 ${className}`}>
      {contained ? (
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}

interface PlaceholderProps {
  /** Main label describing the asset that will live here. */
  label: string;
  /** CSS aspect-ratio, e.g. "4/5", "16/9", "1/1". Default "1/1". */
  aspectRatio?: string;
  /** Optional smaller subtext — art direction / intent. */
  note?: string;
  className?: string;
}

/**
 * Annotated stand-in for real brand assets. Looks intentional and
 * pitch-ready: cream block, dashed sage border, corner tag.
 */
export default function Placeholder({
  label,
  aspectRatio = "1/1",
  note,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      style={{ aspectRatio }}
      className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[var(--radius-card)] border border-dashed border-sage bg-placeholder px-6 text-center ${className}`}
    >
      <span className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.18em] text-sage/70">
        Placeholder
      </span>

      <span className="font-body text-sm uppercase tracking-[0.18em] text-sage">
        {label}
      </span>

      {note ? (
        <span className="max-w-[28ch] font-body text-xs leading-relaxed text-ink-soft/70">
          {note}
        </span>
      ) : null}
    </div>
  );
}

import Stars from "./Stars";

export interface Testimonial {
  quote: string;
  name: string;
  age: number;
  skinType: string;
  /** Initials shown in the avatar placeholder. */
  initials: string;
}

export default function TestimonialCard({
  quote,
  name,
  age,
  skinType,
  initials,
}: Testimonial) {
  return (
    <div className="flex flex-col rounded-[var(--radius-card)] border border-taupe/60 bg-surface p-8">
      <Stars />
      <blockquote className="mt-4 font-display text-xl leading-snug text-ink">
        “{quote}”
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-placeholder font-body text-xs uppercase tracking-wide text-sage"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="font-body text-sm font-medium text-ink">{name}</p>
          <p className="font-body text-xs text-ink-soft">
            {age} · {skinType}
          </p>
        </div>
        <span className="ml-auto shrink-0 text-[10px] uppercase tracking-[0.14em] text-sage">
          Verified Buyer
        </span>
      </div>
    </div>
  );
}

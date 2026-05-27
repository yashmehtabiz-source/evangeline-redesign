import Image from "next/image";

interface BrandImageProps {
  src: string;
  /** Specific, descriptive alt text. */
  alt: string;
  /** CSS aspect-ratio, e.g. "4/5", "1/1". Default "1/1". */
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Real brand photography in an aspect-ratio wrapper — the drop-in replacement
 * for <Placeholder /> once we have the asset. Uses next/image (WebP, srcset,
 * lazy by default). object-cover; product shots are centered so crop is safe.
 */
export default function BrandImage({
  src,
  alt,
  aspectRatio = "1/1",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: BrandImageProps) {
  return (
    <div
      style={{ aspectRatio }}
      className={`relative overflow-hidden rounded-[var(--radius-card)] bg-placeholder ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

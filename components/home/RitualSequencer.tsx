"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BOTTLES = [
  { src: "/brand/products/cleanser-transparent.png", alt: "Nourishing BioPro Cleanser bottle", name: "Nourishing BioPro Cleanser", delay: 400 },
  { src: "/brand/products/serum-transparent.png", alt: "Biostem Serum bottle", name: "Biostem Serum", delay: 1100 },
  { src: "/brand/products/eye-transparent.png", alt: "Biopeptide Eye Restore bottle", name: "Biopeptide Eye Restore", delay: 1800 },
  { src: "/brand/products/moisturizer-transparent.png", alt: "Biostem Daily Moisture Complex bottle", name: "Biostem Daily Moisture Complex", delay: 2500 },
];

// Step label schedule (ms from load) → final settle at 3500ms.
const LABELS: { at: number; text: string }[] = [
  { at: 400, text: "Step 01 — Cleanse" },
  { at: 1100, text: "Step 02 — Treat" },
  { at: 1800, text: "Step 03 — Eye" },
  { at: 2500, text: "Step 04 — Moisturize" },
  { at: 3500, text: "A Four-Step Ritual" },
];
const FINAL = LABELS[LABELS.length - 1].text;
const DONE_AT = 3500;

export default function RitualSequencer() {
  const [label, setLabel] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      setLabel(FINAL);
      setLabelVisible(true);
      setDone(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    // Crossfade each label: fade out, swap text, fade back in.
    LABELS.forEach(({ at, text }, i) => {
      if (i === 0) {
        timers.push(setTimeout(() => {
          setLabel(text);
          setLabelVisible(true);
        }, at));
        return;
      }
      timers.push(setTimeout(() => setLabelVisible(false), at - 250));
      timers.push(setTimeout(() => {
        setLabel(text);
        setLabelVisible(true);
      }, at));
    });
    timers.push(setTimeout(() => setDone(true), DONE_AT));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center md:min-h-[560px]">
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        {BOTTLES.map((b) => (
          <div
            key={b.src}
            style={done ? undefined : { animationDelay: `${b.delay}ms` }}
            className={`group/bottle ${
              done ? "cursor-pointer opacity-100" : "seq-bottle"
            }`}
          >
            {/* items-end → all bottles sit on a shared floor regardless of canvas */}
            <div className="flex h-56 items-end justify-center md:h-72 lg:h-80 xl:h-96">
              <Image
                src={b.src}
                alt={b.alt}
                width={1600}
                height={1600}
                priority
                sizes="(max-width: 768px) 45vw, 24vw"
                className={`h-full w-auto object-contain object-bottom drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)] ${
                  done
                    ? "transition-transform duration-300 ease-out md:group-hover/bottle:-translate-y-1"
                    : ""
                }`}
              />
            </div>
            <p
              className={`mt-4 text-center text-xs uppercase tracking-widest text-sage opacity-100 transition-opacity duration-[250ms] md:opacity-0 ${
                done ? "md:group-hover/bottle:opacity-100" : ""
              }`}
            >
              {b.name}
            </p>
          </div>
        ))}
      </div>

      <p
        className={`mt-8 min-h-[1.25rem] font-body text-xs uppercase tracking-[0.18em] text-sage transition-opacity duration-[250ms] ${
          labelVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        {label}
      </p>
    </div>
  );
}

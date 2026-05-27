"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export interface AccordionItem {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

/** One-open-at-a-time accordion. Smooth grid-rows height transition, no lib. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const initial = items.findIndex((i) => i.defaultOpen);
  const [open, setOpen] = useState<number | null>(initial === -1 ? null : initial);

  return (
    <div className="border-t border-taupe/50">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-taupe/50">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg leading-snug text-ink">
                {item.title}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="shrink-0 text-sage"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                {!isOpen && <line x1="12" y1="5" x2="12" y2="19" />}
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-[60ch] pb-6 font-body text-sm leading-relaxed text-ink-soft">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

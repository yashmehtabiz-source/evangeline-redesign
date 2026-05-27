"use client";

import { useState } from "react";

interface NewsletterFormProps {
  /** Submit button label. Default "Join". */
  cta?: string;
}

/** Mock signup — captures intent, no backend. Pitch-only. */
export default function NewsletterForm({ cta = "Join" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="font-body text-sm text-ink-soft">
        Welcome to the ritual. Your code is on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="flex items-center border-b border-ink/40 focus-within:border-sage"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="w-full bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none"
      />
      <button
        type="submit"
        aria-label={cta}
        className="shrink-0 py-2 pl-3 text-xs uppercase tracking-[0.12em] text-sage hover:text-ink"
      >
        {cta}
      </button>
    </form>
  );
}

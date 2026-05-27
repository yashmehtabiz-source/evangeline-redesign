import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-bg px-5 py-20 md:px-10">
      <Reveal className="mx-auto max-w-[640px] text-center">
        <Eyebrow>Join the List</Eyebrow>
        <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">
          First access. Honest notes.
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
          Founder essays, new formula previews, and 10% off your first order.
        </p>
        <div className="mx-auto mt-8 max-w-md text-left">
          <NewsletterForm cta="Subscribe" />
        </div>
      </Reveal>
    </section>
  );
}

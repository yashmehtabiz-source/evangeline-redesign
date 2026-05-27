import Hero from "@/components/home/Hero";
import BiostimulationStrip from "@/components/home/BiostimulationStrip";
import ShopByConcern from "@/components/home/ShopByConcern";
import FounderSection from "@/components/home/FounderSection";
import TheRitual from "@/components/home/TheRitual";
import Testimonials from "@/components/home/Testimonials";
import ClinicalAuthority from "@/components/shared/ClinicalAuthority";
import JournalTeaser from "@/components/home/JournalTeaser";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BiostimulationStrip />
      <ShopByConcern />
      <FounderSection />
      <TheRitual />
      <Testimonials />
      <ClinicalAuthority />
      <JournalTeaser />
      <NewsletterSection />
    </>
  );
}

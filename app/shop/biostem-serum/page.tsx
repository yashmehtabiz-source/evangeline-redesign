import type { Metadata } from "next";
import PdpHero from "@/components/pdp/PdpHero";
import PromiseBar from "@/components/pdp/PromiseBar";
import WhatItDoes from "@/components/pdp/WhatItDoes";
import ScienceBlock from "@/components/pdp/ScienceBlock";
import RitualContext from "@/components/pdp/RitualContext";
import HowToUse from "@/components/pdp/HowToUse";
import Reviews from "@/components/pdp/Reviews";
import Faq from "@/components/pdp/Faq";
import CompleteRitual from "@/components/pdp/CompleteRitual";

export const metadata: Metadata = {
  title: "Biostem Serum — Evangeline",
  description:
    "The biostimulating treatment serum — botanical stem cells and Vitamin C for visible firmness. Built by Dr. Riam Shammaa, MD.",
};

export default function BiostemSerumPage() {
  return (
    <>
      <PdpHero />
      <PromiseBar />
      <WhatItDoes />
      <ScienceBlock />
      <RitualContext />
      <HowToUse />
      <Reviews />
      <Faq />
      <CompleteRitual />
    </>
  );
}

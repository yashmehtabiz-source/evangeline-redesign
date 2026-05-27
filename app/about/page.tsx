import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import FounderProfile from "@/components/about/FounderProfile";
import TheGap from "@/components/about/TheGap";
import ScienceOfBiostim from "@/components/about/ScienceOfBiostim";
import ManufacturingStandards from "@/components/about/ManufacturingStandards";
import OurValues from "@/components/about/OurValues";
import ClinicalAuthority from "@/components/shared/ClinicalAuthority";
import FounderLetter from "@/components/about/FounderLetter";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About — Evangeline",
  description:
    "Built by Dr. Riam Shammaa, MD — regenerative-medicine physician and founder of Pallianera Pharma. Clinical-grade biostimulation, formulated for daily care.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderProfile />
      <TheGap />
      <ScienceOfBiostim />
      <ManufacturingStandards />
      <OurValues />
      <ClinicalAuthority />
      <FounderLetter />
      <AboutCta />
    </>
  );
}

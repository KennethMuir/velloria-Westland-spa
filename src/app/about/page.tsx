import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPillars } from "@/components/about/AboutPillars";
import { ApproachSection } from "@/components/about/ApproachSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";

export const metadata: Metadata = {
  title: "About Velloria Westland Spa in Westlands, Nairobi",
  description:
    "Discover the philosophy, treatments and considered wellness approach behind Velloria Westland Spa in Westlands, Nairobi.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <PhilosophySection />
        <ApproachSection />
        <AboutPillars />
        <AboutClosing />
      </main>

      <Footer />
    </>
  );
}


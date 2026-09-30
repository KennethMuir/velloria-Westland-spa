import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TreatmentsPreview } from "@/components/sections/TreatmentsPreview";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TreatmentsPreview />
        <ExperienceSection />
        <PackagesPreview />
        <TestimonialsSection />
        <GalleryPreview />
        <VisitSection />
      </main>

      <Footer />
    </>
  );
}

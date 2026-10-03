import type { Metadata } from "next";
import Image from "next/image";
import { pagePhotography } from "@/data/photography";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  TreatmentsCatalogue,
  TreatmentsCta,
} from "@/components/treatments/TreatmentsCatalogue";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore massage, facial, body and wellness treatments at Velloria Westland Spa.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#201914] pt-32 text-white sm:min-h-[82vh] sm:pt-36">
          <Image
            src={pagePhotography.treatmentsHero.src}
            alt={pagePhotography.treatmentsHero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#201914]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/70 via-[#201914]/10 to-transparent" />

          <div className="relative z-10 w-full">
            <div className="velloria-container">
              <div className="max-w-4xl">
                <p className="velloria-eyebrow mb-5 text-[#d9c9b5]">
                  Velloria Treatments
                </p>

                <h1 className="velloria-display text-5xl leading-[0.94] text-[#fffdf9] sm:text-6xl lg:text-8xl">
                  Time set aside
                  <br />
                  entirely for you.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#e8ded2] sm:text-lg">
                  Discover a collection of restorative treatments and rituals
                  designed to help you slow down, reconnect and leave feeling
                  renewed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TreatmentsCatalogue />
        <TreatmentsCta />
      </main>

      <Footer />
    </>
  );
}




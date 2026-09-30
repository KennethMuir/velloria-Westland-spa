import type { Metadata } from "next";
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
        <section className="relative overflow-hidden bg-[#201914] pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#9a8068] blur-3xl" />
            <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#d9c9b5] blur-3xl" />
          </div>

          <div className="relative">
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

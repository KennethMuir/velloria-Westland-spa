import type { Metadata } from "next";
import Image from "next/image";
import { pagePhotography } from "@/data/photography";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  PackagesCatalogue,
  PackagesCta,
} from "@/components/packages/PackagesCatalogue";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore restorative spa packages and signature wellness experiences at Velloria Westland Spa.",
};

export default function PackagesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#201914] pt-32 text-white sm:min-h-[82vh] sm:pt-36">
          <Image
            src={pagePhotography.packagesHero.src}
            alt={pagePhotography.packagesHero.alt}
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
                  Velloria Packages
                </p>

                <h1 className="velloria-display text-5xl leading-[0.94] text-[#fffdf9] sm:text-6xl lg:text-8xl">
                  An entire day,
                  <br />
                  beautifully considered.
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#e8ded2] sm:text-lg">
                  Explore composed spa journeys that bring together treatments,
                  rituals and quiet moments of restoration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PackagesCatalogue />
        <PackagesCta />
      </main>

      <Footer />
    </>
  );
}




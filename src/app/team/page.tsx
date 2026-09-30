import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TeamCatalogue } from "@/components/team/TeamCatalogue";
import { homeImages } from "@/data/home";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the therapists behind the Velloria Westland Spa experience in Westlands, Nairobi.",
};

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#201914] pt-32 text-white sm:pt-36">
          <div className="absolute inset-0">
            <Image
              src={homeImages.interior}
              alt="Velloria spa interior"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[#201914]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201914] via-[#201914]/35 to-transparent" />
          </div>

          <div className="velloria-container relative">
            <div className="flex min-h-[62vh] flex-col justify-end pb-16 sm:pb-20 lg:min-h-[68vh] lg:pb-24">
              <div className="max-w-5xl">
                <p className="velloria-eyebrow text-[#d9c9b5]">
                  The people behind the experience
                </p>

                <h1 className="velloria-display mt-5 max-w-4xl text-6xl leading-[0.88] sm:text-7xl lg:text-[7rem]">
                  Meet the hands behind Velloria.
                </h1>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  Discover the therapists who bring different areas of focus,
                  technique and rhythm to the Velloria experience.
                </p>
              </div>

              <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/45">
                <ArrowDown size={15} strokeWidth={1.5} />
                <span>Meet the team</span>
              </div>
            </div>
          </div>
        </section>

        <TeamCatalogue />
      </main>

      <Footer />
    </>
  );
}

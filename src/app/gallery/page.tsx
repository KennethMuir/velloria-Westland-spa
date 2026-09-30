import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryCatalogue } from "@/components/gallery/GalleryCatalogue";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { homeImages } from "@/data/home";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the atmosphere, rituals and visual mood of Velloria Westland Spa in Westlands, Nairobi.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#201914] pt-32 text-white sm:pt-36">
          <div className="absolute inset-0">
            <Image
              src={homeImages.hero}
              alt="Velloria spa atmosphere"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[#201914]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201914] via-[#201914]/30 to-transparent" />
          </div>

          <div className="velloria-container relative">
            <div className="flex min-h-[62vh] flex-col justify-end pb-16 sm:pb-20 lg:min-h-[68vh] lg:pb-24">
              <div className="max-w-5xl">
                <p className="velloria-eyebrow text-[#d9c9b5]">
                  The Velloria gallery
                </p>

                <h1 className="velloria-display mt-5 max-w-4xl text-6xl leading-[0.88] sm:text-7xl lg:text-[7rem]">
                  A feeling, captured.
                </h1>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  Step inside the visual world of Velloria — warm textures,
                  restorative rituals and moments designed to invite you to
                  slow down.
                </p>
              </div>

              <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/45">
                <ArrowDown size={15} strokeWidth={1.5} />
                <span>Explore the gallery</span>
              </div>
            </div>
          </div>
        </section>

        <GalleryCatalogue />

        <section className="velloria-section bg-[#33271f] text-white">
          <div className="velloria-container">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="velloria-eyebrow text-[#d9c9b5]">
                  Your time at Velloria
                </p>

                <h2 className="velloria-display mt-5 max-w-3xl text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
                  Come experience the feeling for yourself.
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  Ready to step away from the pace of the city? Plan your
                  visit to Velloria Westland Spa on Stima Lane, Westlands.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button href="/book">
                  Book Your Visit
                  <ArrowUpRight size={16} strokeWidth={1.7} />
                </Button>

                <WhatsAppButton label="Enquire on WhatsApp" />
              </div>
            </div>

            <div className="mt-14 border-t border-white/10 pt-7">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span>{siteConfig.address}</span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

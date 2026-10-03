import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { aboutPage } from "@/data/about";
import { pagePhotography } from "@/data/photography";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#201914] pt-32 text-white sm:pt-36">
      <div className="absolute inset-0">
        <Image
          src={pagePhotography.about.hero.src}
          alt={pagePhotography.about.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#201914]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/85 via-[#201914]/20 to-transparent" />
      </div>

      <div className="velloria-container relative">
        <div className="flex min-h-[68vh] flex-col justify-end pb-16 sm:pb-20 lg:min-h-[76vh] lg:pb-24">
          <div className="max-w-5xl">
            <p className="velloria-eyebrow text-[#d9c9b5]">
              {aboutPage.eyebrow}
            </p>

            <h1 className="velloria-display mt-5 max-w-4xl text-6xl leading-[0.88] sm:text-7xl lg:text-[7rem]">
              {aboutPage.title}
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {aboutPage.introduction}
            </p>
          </div>

          <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/45">
            <ArrowDown size={15} strokeWidth={1.5} />
            <span>Discover Velloria</span>
          </div>
        </div>
      </div>
    </section>
  );
}


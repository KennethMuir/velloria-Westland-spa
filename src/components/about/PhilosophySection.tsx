import Image from "next/image";
import { aboutPage } from "@/data/about";
import { homeImages } from "@/data/home";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="velloria-section overflow-hidden bg-[#f8f5ef]">
      <div className="velloria-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={homeImages.massage}
              alt="Restorative spa treatment"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="velloria-eyebrow text-[#9a8068]">
              {aboutPage.philosophy.eyebrow}
            </p>

            <h2 className="velloria-display mt-5 max-w-3xl text-5xl leading-[0.92] text-[#33271f] sm:text-6xl lg:text-7xl">
              {aboutPage.philosophy.title}
            </h2>

            <div className="mt-8 max-w-2xl space-y-5">
              {aboutPage.philosophy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 h-px w-20 bg-[#9a8068]" />
          </div>
        </div>
      </div>
    </section>
  );
}


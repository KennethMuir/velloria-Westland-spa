import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { aboutPage } from "@/data/about";
import { homeImages } from "@/data/home";

export function ApproachSection() {
  return (
    <section className="velloria-section bg-[#efe8dc]">
      <div className="velloria-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p className="velloria-eyebrow text-[#9a8068]">
              {aboutPage.approach.eyebrow}
            </p>

            <h2 className="velloria-display mt-5 max-w-4xl text-5xl leading-[0.92] text-[#33271f] sm:text-6xl lg:text-7xl">
              {aboutPage.approach.title}
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
              {aboutPage.approach.description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#9a8068]">
              <span>Carefully considered</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] sm:min-h-[34rem]">
            <Image
              src="https://images.pexels.com/photos/37719647/pexels-photo-37719647.jpeg"
              alt="Black woman receiving a restorative spa massage"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-[#33271f] p-8 text-white sm:min-h-[34rem] sm:p-10">
            <div className="flex h-full flex-col justify-between">
              <p className="text-xs uppercase tracking-[0.16em] text-[#d9c9b5]">
                The Velloria way
              </p>

              <div>
                <p className="velloria-display text-4xl leading-[0.95] sm:text-5xl">
                  A ritual,
                  <br />
                  not a rush.
                </p>

                <div className="mt-8 h-px w-16 bg-[#9a8068]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { aboutPage } from "@/data/about";

export function AboutPillars() {
  return (
    <section className="velloria-section bg-[#f8f5ef]">
      <div className="velloria-container">
        <div className="max-w-3xl">
          <p className="velloria-eyebrow text-[#9a8068]">
            What guides the experience
          </p>

          <h2 className="velloria-display mt-5 text-5xl leading-[0.92] text-[#33271f] sm:text-6xl lg:text-7xl">
            Three simple intentions.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-[#33271f]/10 border-y border-[#33271f]/10">
          {aboutPage.pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group grid gap-6 py-9 transition-all duration-500 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:gap-8 lg:py-11"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-[#9a8068]">
                {pillar.number}
              </p>

              <div>
                <h3 className="velloria-display text-4xl leading-none text-[#33271f] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">
                  {pillar.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
                  {pillar.description}
                </p>
              </div>

              <Link
                href={
                  pillar.title === "Restore"
                    ? "/treatments"
                    : pillar.title === "Reconnect"
                      ? "/gallery"
                      : "/packages"
                }
                aria-label={`Explore ${pillar.title}`}
                className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#33271f]/10 text-[#9a8068] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#33271f] group-hover:text-white sm:flex"
              >
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}









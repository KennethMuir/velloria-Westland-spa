import { ArrowUpRight } from "lucide-react";
import { aboutPage } from "@/data/about";
import { Button } from "@/components/ui/Button";

export function AboutClosing() {
  return (
    <section className="velloria-section bg-[#201914] text-white">
      <div className="velloria-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="velloria-eyebrow text-[#d9c9b5]">
            {aboutPage.closing.eyebrow}
          </p>

          <h2 className="velloria-display mt-5 text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
            {aboutPage.closing.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            {aboutPage.closing.description}
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="/book">
              Begin your visit
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

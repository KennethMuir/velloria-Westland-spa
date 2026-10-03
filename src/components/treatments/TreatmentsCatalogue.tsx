"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  treatmentCategories,
  treatments,
} from "@/data/treatments";
import { useMemo, useState } from "react";

export function TreatmentsCatalogue() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof treatmentCategories)[number]>("All");

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "All") {
      return treatments;
    }

    return treatments.filter(
      (treatment) => treatment.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="velloria-section bg-[#f8f5ef]">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="velloria-eyebrow mb-4">The Treatment Menu</p>
            <h2 className="velloria-display text-4xl leading-[0.98] text-[#33271f] sm:text-5xl lg:text-6xl">
              Treatments designed around how you want to feel.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6d5d50] lg:pb-1">
            Explore considered massage, facial, body and wellness rituals
            created to give you a quieter moment away from the pace of the day.
          </p>
        </div>

        <div
          className="mb-10 overflow-x-auto pb-2"
          aria-label="Treatment categories"
        >
          <div className="flex min-w-max gap-2">
            {treatmentCategories.map((category) => {
              const active = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-[#33271f] bg-[#33271f] text-white"
                      : "border-[#33271f]/15 bg-white/60 text-[#5f5044] hover:border-[#33271f]/35 hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredTreatments.map((treatment, index) => (
            <motion.article
              key={treatment.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.05, 0.2),
              }}
              className="group"
            >
              <Link
                href={`/treatments/${treatment.slug}`}
                className="block"
                aria-label={`View ${treatment.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#e7ded2]">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/40 via-transparent to-transparent opacity-60" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#fffdf9]/90 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#33271f] backdrop-blur-sm">
                    <span>{treatment.number}</span>
                    <span className="h-1 w-1 rounded-full bg-[#9a8068]" />
                    <span>{treatment.category}</span>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fffdf9] text-[#33271f] transition-transform duration-300 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="pt-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="velloria-display text-2xl text-[#33271f] transition-colors duration-300 group-hover:text-[#9a8068]">
                      {treatment.title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-1.5 text-xs text-[#77675a]">
                      <Clock size={14} strokeWidth={1.6} />
                      <span>{treatment.durations[0]?.label}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-[#6d5d50]">
                    {treatment.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function TreatmentsCta() {
  return (
    <section className="bg-[#efe8dc] py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="velloria-eyebrow mb-4">Your visit, your pace</p>
            <h2 className="velloria-display text-4xl leading-[1] text-[#33271f] sm:text-5xl">
              Not sure which treatment is right for you?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6d5d50]">
              We can help you choose an experience based on how you would like
              to feel when you leave.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/book">Book Your Visit</Button>
            <WhatsAppButton label="Ask Us on WhatsApp" />
          </div>
        </div>
      </Container>
    </section>
  );
}


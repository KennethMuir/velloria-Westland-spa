"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import {
  packageCategories,
  packages,
} from "@/data/packages";

export function PackagesCatalogue() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof packageCategories)[number]>("All");

  const filteredPackages = useMemo(() => {
    if (activeCategory === "All") {
      return packages;
    }

    return packages.filter(
      (spaPackage) => spaPackage.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="velloria-section bg-[#f8f5ef]">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="velloria-eyebrow mb-4">The Velloria Collection</p>

            <h2 className="velloria-display text-4xl leading-[0.98] text-[#33271f] sm:text-5xl lg:text-6xl">
              More than a treatment. An entire experience.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6d5d50] lg:pb-1">
            Discover carefully composed spa journeys that bring treatments,
            rituals and restorative pauses together at an unhurried pace.
          </p>
        </div>

        <div
          className="mb-10 overflow-x-auto pb-2"
          aria-label="Package categories"
        >
          <div className="flex min-w-max gap-2">
            {packageCategories.map((category) => {
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
          className="grid gap-x-6 gap-y-12 md:grid-cols-2"
        >
          {filteredPackages.map((spaPackage, index) => (
            <motion.article
              key={spaPackage.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.06, 0.2),
              }}
              className="group"
            >
              <Link
                href={`/packages/${spaPackage.slug}`}
                className="block"
                aria-label={`View ${spaPackage.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e7ded2]">
                  <Image
                    src={spaPackage.image}
                    alt={spaPackage.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/40 via-transparent to-transparent opacity-60" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#fffdf9]/90 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#33271f] backdrop-blur-sm">
                    <span>{spaPackage.number}</span>
                    <span className="h-1 w-1 rounded-full bg-[#9a8068]" />
                    <span>{spaPackage.category}</span>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fffdf9] text-[#33271f] transition-transform duration-300 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="pt-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="velloria-display text-3xl leading-none text-[#33271f] transition-colors duration-300 group-hover:text-[#9a8068]">
                      {spaPackage.title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-1.5 pt-1 text-xs text-[#77675a]">
                      <Clock size={14} strokeWidth={1.6} />
                      <span>{spaPackage.duration}</span>
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-[#6d5d50]">
                    {spaPackage.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {spaPackage.treatmentSlugs.map((treatmentSlug) => (
                      <span
                        key={treatmentSlug}
                        className="rounded-full bg-[#efe8dc] px-3 py-1.5 text-xs font-medium text-[#6d5d50]"
                      >
                        {treatmentSlug
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export function PackagesCta() {
  return (
    <section className="bg-[#efe8dc] py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="velloria-eyebrow mb-4">Create your own escape</p>

            <h2 className="velloria-display text-4xl leading-[1] text-[#33271f] sm:text-5xl">
              Prefer to build your experience around you?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6d5d50]">
              Speak with us about the treatments you are considering and we
              can help you shape a visit that fits your time and preferences.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/book">Book Your Visit</Button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="velloria-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-[#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
            >
              <Sparkles size={16} strokeWidth={1.7} />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

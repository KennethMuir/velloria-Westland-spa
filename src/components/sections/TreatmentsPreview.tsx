"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { treatmentPreview } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TreatmentsPreview() {
  return (
    <section className="velloria-section bg-[var(--velloria-ivory)]">
      <Container>
        <SectionHeading
          eyebrow="Treatments"
          title={
            <>
              Care for the body.
              <br />
              Calm for the mind.
            </>
          }
          description="Explore rituals created to restore, renew and leave you feeling beautifully looked after."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {treatmentPreview.map((treatment, index) => (
            <motion.article
              key={treatment.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--velloria-border)] bg-white/50 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                <span className="absolute left-6 top-6 text-xs font-semibold tracking-[0.16em] text-white/80">
                  {treatment.number}
                </span>

                <span className="absolute bottom-6 right-6 text-xs text-white/80">
                  {treatment.duration}
                </span>
              </div>

              <div className="p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--velloria-mocha)]">
                  {treatment.category}
                </p>

                <h3 className="velloria-display mt-2 text-3xl text-[var(--velloria-deep)]">
                  {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--velloria-espresso)]/60">
                  {treatment.description}
                </p>

                <Link
                  href="/treatments"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--velloria-deep)]"
                >
                  Explore treatment
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-end">
          <Button href="/treatments">
            <span>View all treatments</span>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="text-[#ffffff]"
            />
          </Button>
        </div>
      </Container>
    </section>
  );
}

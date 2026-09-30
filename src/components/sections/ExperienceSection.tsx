"use client";

import { motion } from "motion/react";
import { experienceCards } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="velloria-section bg-[var(--velloria-cream)]">
      <Container>
        <SectionHeading
          eyebrow="The Velloria Experience"
          title={
            <>
              Space to breathe.
              <br />
              Time to restore.
            </>
          }
          description="We are creating a modern wellness destination where thoughtful treatments, beautiful surroundings and unhurried service come together."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--velloria-border)] bg-[var(--velloria-border)] md:grid-cols-3">
          {experienceCards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="min-h-72 bg-[var(--velloria-ivory)] p-7 sm:p-9"
            >
              <span className="text-xs font-semibold tracking-[0.16em] text-[var(--velloria-mocha)]">
                {card.number}
              </span>

              <h3 className="velloria-display mt-20 text-4xl text-[var(--velloria-deep)]">
                {card.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--velloria-espresso)]/60">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

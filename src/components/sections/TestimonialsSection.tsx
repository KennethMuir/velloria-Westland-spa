"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="velloria-section bg-[var(--velloria-ivory)]">
      <Container>
        <SectionHeading
          eyebrow="Guest Notes"
          title={
            <>
              Leave the noise
              <br />
              at the door.
            </>
          }
          description="A few words from guests who have made Velloria part of their wellness ritual."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex min-h-72 flex-col rounded-[2rem] border border-[var(--velloria-border)] bg-white p-7 sm:p-9"
            >
              <Quote
                size={28}
                strokeWidth={1}
                className="text-[var(--velloria-mocha)]"
              />

              <blockquote className="velloria-display mt-8 flex-1 text-2xl leading-tight text-[var(--velloria-deep)]">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-8 border-t border-[var(--velloria-border)] pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-[var(--velloria-espresso)]/50">
                  {testimonial.detail}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

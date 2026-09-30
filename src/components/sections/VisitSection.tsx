"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function VisitSection() {
  return (
    <section className="bg-[var(--velloria-ivory)] pb-20 md:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--velloria-mocha)] px-7 py-14 text-white sm:px-12 md:px-16 md:py-20"
        >
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-44 right-16 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              <MapPin size={14} />
              Westlands · Nairobi
            </div>

            <h2 className="velloria-display mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              Your time is worth
              <br />
              slowing down for.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Ready to make space for yourself? Reach out and let us help you
              find the treatment or ritual that feels right.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Plan your visit
                <ArrowUpRight size={16} className="text-[#ffffff]" />
              </Button>

              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

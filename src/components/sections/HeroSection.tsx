"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { homeImages } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[var(--velloria-deep)] text-white sm:min-h-screen">
      <Image
        src={homeImages.hero}
        alt="Luxury spa interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--velloria-deep)] via-[var(--velloria-deep)]/35 to-black/10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-[-8rem] top-[18%] h-[26rem] w-[26rem] rounded-full border border-white/15 sm:right-[8%] sm:h-[34rem] sm:w-[34rem]"
      />

      <Container className="relative z-10 pb-14 pt-36 sm:pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl"
        >
          <p className="velloria-eyebrow text-white/70">
            Westlands · Nairobi
          </p>

          <h1 className="velloria-display mt-5 max-w-4xl text-[4.2rem] font-medium leading-[0.84] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Come back
            <br />
            <span className="italic text-[var(--velloria-sand)]">
              to yourself.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            A considered space for restorative treatments, quiet indulgence
            and the simple luxury of slowing down.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Book an Appointment
              <ArrowUpRight size={16} className="text-[#ffffff]" />
            </Button>

            <WhatsAppButton label="WhatsApp Velloria" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/50"
        >
          <ArrowDown size={15} />
          Discover Velloria
        </motion.div>
      </Container>
    </section>
  );
}

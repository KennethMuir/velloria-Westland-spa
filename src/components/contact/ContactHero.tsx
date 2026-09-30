"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { contactPage } from "@/data/contact";
import { homeImages } from "@/data/home";
import { siteConfig } from "@/data/site";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[var(--velloria-deep)] text-white sm:min-h-[82vh]">
      <Image
        src={homeImages.interior}
        alt="Velloria spa atmosphere"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--velloria-deep)] via-[var(--velloria-deep)]/45 to-black/20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute -right-32 top-[20%] h-[24rem] w-[24rem] rounded-full border border-white/10 sm:right-[7%] sm:h-[32rem] sm:w-[32rem]"
      />

      <Container className="relative z-10 pb-14 pt-36 sm:pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
            <MapPin size={14} strokeWidth={1.5} />
            <span>{siteConfig.address}</span>
          </div>

          <p className="velloria-eyebrow mt-7 text-[var(--velloria-sand)]">
            {contactPage.hero.eyebrow}
          </p>

          <h1 className="velloria-display mt-5 max-w-4xl text-[4.3rem] font-medium leading-[0.86] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]">
            {contactPage.hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            {contactPage.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/book">
              Book Your Visit
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Button>

            <WhatsAppButton label="WhatsApp Velloria" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45"
        >
          <ArrowDown size={15} strokeWidth={1.5} />
          <span>Plan your visit</span>
        </motion.div>
      </Container>
    </section>
  );
}

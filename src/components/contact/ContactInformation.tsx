"use client";

import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactPage } from "@/data/contact";
import { siteConfig } from "@/data/site";

export function ContactInformation() {
  return (
    <section className="velloria-section bg-[var(--velloria-ivory)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="velloria-eyebrow text-[var(--velloria-mocha)]">
              {contactPage.introduction.eyebrow}
            </p>

            <h2 className="velloria-display mt-5 max-w-xl text-5xl leading-[0.92] text-[var(--velloria-espresso)] sm:text-6xl lg:text-7xl">
              {contactPage.introduction.title}
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
              {contactPage.introduction.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/book">
                Book Your Visit
                <CalendarDays size={16} strokeWidth={1.7} />
              </Button>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="velloria-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
              >
                <MessageCircle size={17} strokeWidth={1.8} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[2rem] bg-[var(--velloria-deep)] p-7 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:p-9"
            >
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={19} strokeWidth={1.5} />
                </span>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Find Velloria
                </p>

                <div className="mt-2 flex items-end justify-between gap-5">
                  <div>
                    <h3 className="velloria-display text-3xl sm:text-4xl">
                      Stima Lane
                    </h3>

                    <p className="mt-2 text-sm text-white/60">
                      Westlands, Nairobi
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-[var(--velloria-espresso)]">
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </span>
                </div>
              </div>
            </a>

            <div className="rounded-[2rem] border border-[var(--velloria-border)] bg-[var(--velloria-white)] p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--velloria-cream)] text-[var(--velloria-espresso)]">
                <MessageCircle size={19} strokeWidth={1.5} />
              </span>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--velloria-mocha)]">
                WhatsApp
              </p>

              <h3 className="velloria-display mt-2 text-3xl text-[var(--velloria-espresso)]">
                Start a conversation.
              </h3>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--velloria-espresso)] transition-colors hover:text-[var(--velloria-mocha)]"
              >
                {siteConfig.whatsapp}
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </a>
            </div>

            <div className="rounded-[2rem] bg-[var(--velloria-cream)] p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[var(--velloria-espresso)]">
                <Sparkles size={19} strokeWidth={1.5} />
              </span>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--velloria-mocha)]">
                Explore
              </p>

              <h3 className="velloria-display mt-2 text-3xl text-[var(--velloria-espresso)]">
                Find your ritual.
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[var(--velloria-espresso)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Treatments
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </Link>

                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[var(--velloria-espresso)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Packages
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

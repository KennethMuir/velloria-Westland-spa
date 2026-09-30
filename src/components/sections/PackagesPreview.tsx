"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { packagePreview } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PackagesPreview() {
  return (
    <section className="bg-[var(--velloria-deep)] text-white">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[30rem] lg:min-h-[42rem]"
        >
          <Image
            src={packagePreview.image}
            alt="Spa relaxation experience"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        <div className="flex items-center py-16 sm:py-20 lg:py-24">
          <Container className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="velloria-eyebrow text-white/60">
                {packagePreview.eyebrow}
              </p>

              <h2 className="velloria-display mt-5 text-5xl leading-[0.95] sm:text-6xl">
                {packagePreview.title}
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base">
                {packagePreview.description}
              </p>

              <div className="mt-8">
                <Button href="/packages">
                  Explore packages
                  <ArrowUpRight size={16} className="text-[#ffffff]" />
                </Button>
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Includes
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {packagePreview.inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/75"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15">
                        <Check size={14} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}

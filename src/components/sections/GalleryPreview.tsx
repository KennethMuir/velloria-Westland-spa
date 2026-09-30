"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { galleryItems } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryPreview() {
  return (
    <section className="velloria-section bg-[var(--velloria-cream)]">
      <Container>
        <SectionHeading
          eyebrow="Inside Velloria"
          title={
            <>
              A softer kind
              <br />
              of beautiful.
            </>
          }
          description="A glimpse into the atmosphere we are creating in the heart of Westlands."
        />

        <div className="mt-12 grid auto-rows-[10rem] gap-3 md:grid-cols-3 md:auto-rows-[12rem]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className={`group relative overflow-hidden rounded-[1.5rem] ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-end">
          <Button href="/gallery">
            <span>View gallery</span>
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

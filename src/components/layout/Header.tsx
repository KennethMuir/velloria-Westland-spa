"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-[var(--velloria-deep)] px-4 py-2 text-center text-[11px] tracking-[0.16em] text-white/80 sm:block">
        <span>YOUR MOMENT OF RESTORATION BEGINS HERE</span>
      </div>

      <nav className="border-b border-white/10 bg-[var(--velloria-deep)]/90 text-white backdrop-blur-xl">
        <div className="velloria-container flex h-[76px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Velloria Westland Spa home"
          >
            <span className="velloria-display text-[2rem] font-medium leading-none tracking-wide">
              Velloria
            </span>
            <span className="ml-2 hidden border-l border-white/25 pl-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:block">
              Westland
              <br />
              Spa
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:flex"
            >
              <MessageCircle size={15} strokeWidth={1.8} />
              WhatsApp
            </a>

            <Link
              href="/book"
              className="hidden h-11 items-center rounded-full bg-[var(--velloria-white)] px-5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--velloria-espresso)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--velloria-cream)] hover:shadow-lg sm:flex"
            >
              Book Now
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-white/10 bg-[var(--velloria-deep)] text-white lg:hidden"
          >
            <div className="velloria-container py-5">
              <div className="flex flex-col">
                {siteConfig.navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/10 py-4 text-sm uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center justify-center rounded-full bg-white px-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--velloria-espresso)]"
                >
                  Book Now
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-xs font-bold uppercase tracking-[0.1em]"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

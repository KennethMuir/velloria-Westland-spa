"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  galleryCategories,
  galleryItems,
} from "@/data/gallery";

export function GalleryCatalogue() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const activeItem =
    activeIndex === null ? null : filteredItems[activeIndex] ?? null;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return (current + 1) % filteredItems.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return (
            (current - 1 + filteredItems.length) %
            filteredItems.length
          );
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, filteredItems.length]);

  useEffect(() => {
    document.body.style.overflow =
      activeIndex !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (
        (current - 1 + filteredItems.length) %
        filteredItems.length
      );
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + 1) % filteredItems.length;
    });
  }

  return (
    <>
      <section className="velloria-section bg-[#f8f5ef]">
        <div className="velloria-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="velloria-eyebrow text-[#9a8068]">
                A visual journey
              </p>

              <h2 className="velloria-display mt-5 text-5xl leading-[0.92] text-[#33271f] sm:text-6xl lg:text-7xl">
                Inside the Velloria mood.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#77675a] sm:text-base sm:leading-8">
                Explore the textures, rituals and atmosphere that shape a
                slower kind of spa experience.
              </p>
            </div>

            <div
              className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:max-w-[50%] lg:justify-end"
              aria-label="Gallery categories"
            >
              {galleryCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "border-[#33271f] bg-[#33271f] text-white"
                        : "border-[#33271f]/15 bg-transparent text-[#77675a] hover:border-[#33271f]/35 hover:text-[#33271f]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const featured = item.featured || index === 0;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative overflow-hidden rounded-[1.75rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-4 ${
                      featured
                        ? "sm:col-span-2 lg:col-span-7"
                        : "lg:col-span-5"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        featured
                          ? "aspect-[16/11]"
                          : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes={
                          featured
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                        }
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="flex items-end justify-between gap-4 text-white">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                              {item.category}
                            </p>

                            <h3 className="velloria-display mt-2 text-3xl leading-none sm:text-4xl">
                              {item.title}
                            </h3>
                          </div>

                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-[#33271f]">
                            <Maximize2 size={16} strokeWidth={1.5} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#201914]/95 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeItem.title} gallery image`}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute right-0 top-0 z-10">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close gallery"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#33271f]"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="relative h-[65vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] sm:h-[72vh]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 95vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-5 flex w-full max-w-5xl items-end justify-between gap-5 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    {activeItem.category}
                  </p>

                  <h3 className="velloria-display mt-2 text-3xl sm:text-4xl">
                    {activeItem.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                    {activeItem.description}
                  </p>
                </div>

                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-[#33271f]"
                  >
                    <ArrowLeft size={18} strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-[#33271f]"
                  >
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

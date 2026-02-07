"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: "groceries",
    title: "Fresh Groceries",
    subtitle: "Pure veg options available • No onion/garlic options",
    description: "Daily essentials, snacks, spices, and frozen favourites—delivered with care.",
    cta: "Shop groceries",
    href: "#store",
    image: "/keshav-mart-logo-square.png",
  },
  {
    id: "packaging",
    title: "Packaging & Parcels",
    subtitle: "Drop, print, wrap—all in one spot",
    description: "Parcel drop-off, label printing, and packaging supplies. Cold chain? We add gel packs.",
    cta: "Packaging services",
    href: "#packaging",
    image: "/keshav-mart-logo-square.png",
  },
];

const AUTO_SWITCH_MS = 5000;

export function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SWITCH_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
      <div className="relative aspect-[21/9] min-h-[200px] sm:aspect-[3/1] md:min-h-[280px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center gap-6 px-6 py-8 transition-opacity duration-500 md:gap-10 md:px-12 md:py-12 ${
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-soft)] via-white to-[var(--surface-hover)]" />
            <div className="relative flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
                  {slide.subtitle}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-sm text-[var(--muted)] sm:text-base">
                  {slide.description}
                </p>
                <Link
                  href={slide.href}
                  className="inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[var(--primary-strong)]"
                >
                  {slide.cta}
                </Link>
              </div>
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-md md:h-32 md:w-32">
                  <Image
                    src={slide.image}
                    alt=""
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex
                ? "w-6 bg-[var(--primary)]"
                : "w-2 bg-[var(--border)] hover:bg-[var(--border-hover)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

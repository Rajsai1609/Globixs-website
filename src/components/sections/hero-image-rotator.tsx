"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { staffingHeroSlides } from "@/lib/home-visuals";

const ROTATE_MS = 4200;

export function HeroImageRotator() {
  const slides = staffingHeroSlides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, ROTATE_MS);

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[active]!;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3]">
        {slides.map((slide, idx) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className={`object-cover transition-all duration-1000 ${
              idx === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-4 pt-16 sm:p-5 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-100/90">
          {current.headline}
        </p>
        <p className="mt-1 text-sm font-medium leading-snug text-white/95">
          {current.subline}
        </p>
        <div className="mt-3 flex gap-2">
          {slides.map((_, idx) => (
            <span
              key={`dot-${idx}`}
              className={`h-1.5 w-6 rounded-full transition-all ${
                idx === active ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

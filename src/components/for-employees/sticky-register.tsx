"use client";

import { useEffect, useState } from "react";

/**
 * Floating "Register" button. Hidden until the reader has scrolled past the
 * six-step pipeline (#pipeline), then smooth-scrolls to the final CTA
 * (#register-cta). Watches the sentinel with an IntersectionObserver so there
 * is no scroll listener running on every frame.
 */
export function StickyRegister() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pipeline = document.getElementById("pipeline");
    if (!pipeline) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show once the pipeline has scrolled off the top of the viewport.
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(pipeline);
    return () => observer.disconnect();
  }, []);

  function scrollToCta() {
    document.getElementById("register-cta")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToCta}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(200,38,44,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandDark ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      Register
    </button>
  );
}

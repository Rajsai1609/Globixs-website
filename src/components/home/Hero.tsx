import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { Eyebrow } from "@/components/brochure";
import { BOOKING_URL } from "@/lib/booking";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white lg:py-28">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-5">

          {/* Left column — 3/5 width on desktop */}
          <Reveal className="lg:col-span-3">
            <Eyebrow onDark>AI AUTOMATION. DIGITAL MARKETING. TECHNOLOGY CONSULTING.</Eyebrow>
            <h1
              className="mt-4 font-extrabold leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              AI automation, digital marketing and technology consulting for growing businesses.
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-[1.6] text-white/90">
              We build and run the systems that answer your calls, automate the busywork, connect
              your tools, and bring in customers — then we stay to keep them working. Senior
              engineers do the work; you see the results in your numbers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a consultation →
              </a>
              <Link href="/services" className="btn-on-dark">
                See our services →
              </Link>
            </div>
          </Reveal>

          {/* Right column — 2/5 width, hidden on mobile */}
          <Reveal delay={120} className="hidden lg:col-span-2 lg:block">
            <Image
              src="/services/it-consulting.jpg"
              alt="Globixs engineers planning an AI automation rollout with a client"
              width={700}
              height={525}
              priority
              className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.20)]"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}

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
            <Eyebrow onDark>SEATTLE-BASED · WORKING NATIONWIDE</Eyebrow>
            <h1
              className="mt-4 font-extrabold leading-[1.1] text-white"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              AI Automation · Digital Marketing · Technology Consulting
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-[1.6] text-white/90">
              Voice AI, workflow automation, BI dashboards and growth marketing for businesses
              that want to run leaner.
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
              <Link href="/ai-services" className="btn-on-dark">
                Explore AI Services →
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

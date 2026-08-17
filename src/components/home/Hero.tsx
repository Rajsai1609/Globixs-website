import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { Eyebrow } from "@/components/brochure";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white lg:py-28">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-5">

          {/* Left column — 3/5 width on desktop */}
          <Reveal className="lg:col-span-3">
            <Eyebrow onDark>STAFFING. JOB MARKETING. AI SERVICES.</Eyebrow>
            <h1
              className="mt-4 font-extrabold leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Staffing, job marketing, and AI services — one technology partner.
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-[1.6] text-white/90">
              We place pre-vetted engineers in contract and full-time roles, market job seekers into their next position, and build AI-powered growth systems for businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Hire Engineers →
              </Link>
              <Link href="/ai-products" className="btn-on-dark">
                Explore AI Services →
              </Link>
            </div>
          </Reveal>

          {/* Right column — 2/5 width, hidden on mobile */}
          <Reveal delay={120} className="hidden lg:col-span-2 lg:block">
            <Image
              src="/services/staff-augmentation.jpg"
              alt="Enterprise team collaborating on AI technology projects"
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

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white lg:py-28">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-5">

          {/* Left column — 3/5 width on desktop */}
          <Reveal className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              TRAIN. PLACE. BUILD.
            </p>
            <h1
              className="mt-4 font-extrabold leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              AI talent and AI systems for companies that can&apos;t afford to wait.
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-[1.6] text-white/90">
              Globixs trains US graduates in AI engineering, places them with enterprise and mid-market teams who need AI systems but can&apos;t justify a full in-house bench, and channels their production experience into the AI products we sell. One flywheel. Three ways we deliver.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-900 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Hire AI Talent →
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-900"
              >
                Train With Us →
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

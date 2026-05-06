import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="hero-mesh py-20 text-white lg:py-28">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left column */}
          <Reveal>
            <h1
              className="font-extrabold leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              We place IT engineers and ship AI products for businesses
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-[1.6] text-white/90">
              Globixs offers four services: IT staffing, AI consulting, AI products, and custom AI
              builds. Senior engineers handle the work. AI agents handle the scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-900 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/ai-products"
                className="rounded-lg border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-900"
              >
                See How It Works
              </Link>
            </div>
          </Reveal>

          {/* Right column — hidden on mobile */}
          <Reveal delay={120} className="hidden lg:block">
            <Image
              src="/services/staff-augmentation.jpg"
              alt="Small business team collaborating on technology projects"
              width={700}
              height={525}
              priority
              className="w-full rounded-2xl object-cover shadow-2xl"
              style={{ maxHeight: "600px" }}
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}

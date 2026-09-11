import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { VoiceCallCard } from "@/components/hero-illustrations/VoiceCallCard";
import { ServiceSection } from "@/components/sections/service-section";
import { BOOKING_URL } from "@/lib/site-config";
import { AI_PILLAR_LABEL } from "@/lib/site-config";
import { AI_SERVICES } from "@/lib/services-catalog";

const TITLE = AI_PILLAR_LABEL;
const DESCRIPTION =
  "AI automation for businesses that want to run leaner: AI and business process automation, voice AI and customer engagement, POS integration, business intelligence, workflow and systems integration, and custom AI solutions. Seattle-based, working nationwide.";

export const metadata: Metadata = {
  // Root layout applies the `%s | Globixs Technology Solutions` template.
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI automation services",
    "business process automation",
    "AI receptionist",
    "missed call text back",
    "POS integration",
    "business intelligence dashboards",
    "systems integration",
    "custom AI solutions",
  ],
  alternates: { canonical: "/ai-services" },
  openGraph: {
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    type: "website",
    url: "/ai-services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs AI Services — AI automation for businesses that want to run leaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function AIServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="AI Services"
        lines={["Answer every call.", "Automate the admin.", "See the numbers."]}
        subhead="Six AI systems built on the tools you already run, delivered and operated by our team."
        primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
        secondaryCta={{ label: "See the six services", href: "#services" }}
        aside={<VoiceCallCard />}
      />

      <div id="services" className="scroll-mt-28">
        {AI_SERVICES.map((service, idx) => (
          <ServiceSection
            key={service.id}
            id={service.id}
            eyebrow={`(${String(idx + 1).padStart(2, "0")}) AI Services`}
            title={service.title}
            Icon={service.Icon}
            description={service.description}
            outcomes={service.outcomes}
            alt={idx % 2 === 1}
          />
        ))}
      </div>

      <section className="hero-mesh py-16 text-white md:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Not sure which one you need? Start with a call.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Bring us the bottleneck. A 30-minute call is enough to tell you whether we can fix
              it and what it would take.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={BOOKING_URL} className="btn-primary">
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

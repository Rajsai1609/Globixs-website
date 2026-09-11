import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceSection } from "@/components/sections/service-section";
import { BOOKING_URL } from "@/lib/booking";
import { MARKETING_SERVICES } from "@/lib/services-catalog";

const TITLE = "Digital Marketing";
const DESCRIPTION =
  "Growth marketing for businesses that want measurable leads: search and local SEO, Google and Meta ads, social content and LinkedIn management, email and WhatsApp campaigns, and landing pages built to convert. Seattle-based, working nationwide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "digital marketing Seattle",
    "local SEO",
    "Google Ads management",
    "Meta Ads management",
    "LinkedIn management",
    "email marketing",
    "WhatsApp marketing",
    "landing page design",
  ],
  alternates: { canonical: "/digital-marketing" },
  openGraph: {
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    type: "website",
    url: "/digital-marketing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Digital Marketing — search, ads, social, email and landing pages",
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

export default function DigitalMarketingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Digital Marketing"
        title="Marketing measured in leads, not impressions."
        description="Five services that get you found, bring in qualified enquiries and follow up on every one of them. Tracking is set up before any budget is spent, so every report ties back to calls, forms and bookings."
        secondary={{ href: "#search-local-seo", label: "See the services" }}
        jumpLinks={MARKETING_SERVICES.map((s) => ({ href: `#${s.id}`, label: s.title }))}
      />

      {MARKETING_SERVICES.map((service, idx) => (
        <ServiceSection
          key={service.id}
          id={service.id}
          eyebrow={`(${String(idx + 1).padStart(2, "0")}) Digital Marketing`}
          title={service.title}
          Icon={service.Icon}
          description={service.description}
          outcomes={service.outcomes}
          alt={idx % 2 === 1}
        />
      ))}

      <section className="hero-mesh py-16 text-white md:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Tell us what a good month looks like.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Calls, bookings, quotes or sign-ups. A 30-minute call and we&apos;ll tell you which
              channels are worth your budget and which are not.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a consultation
              </a>
              <Link href="/contact" className="btn-on-dark">
                Send us a message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

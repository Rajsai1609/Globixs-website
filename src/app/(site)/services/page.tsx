import type { Metadata } from "next";
import { Hero }            from "@/components/services/Hero";
import { ServiceSections } from "@/components/services/ServiceSections";
import { HowItWorks }      from "@/components/services/HowItWorks";
import { ProofProducts }   from "@/components/services/ProofProducts";
import { ClosingCta }      from "@/components/services/ClosingCta";

const TITLE = "AI Automation, Digital Marketing & Technology Consulting";
const DESCRIPTION =
  "Eight services for growing businesses: AI and business process automation, voice AI and customer engagement, POS integration, business intelligence, workflow and systems integration, custom AI solutions, digital marketing, and technology consulting. Built on your tools and run by our Seattle team.";

export const metadata: Metadata = {
  // Root layout applies the `%s | Globixs Technology Solutions` template — no suffix here.
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
    "digital marketing Seattle",
    "technology consulting Seattle",
    "fractional CTO",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    type: "website",
    url: "/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs services: AI automation, digital marketing and technology consulting",
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

export default function ServicesPage() {
  return (
    <div>
      <Hero />
      <ServiceSections />
      <HowItWorks />
      <ProofProducts />
      <ClosingCta />
    </div>
  );
}

import type { Metadata } from "next";
import { Hero }                  from "@/components/home/Hero";
import { ServiceCards }           from "@/components/home/ServiceCards";
import { IndustryGrid }           from "@/components/home/IndustryGrid";
import { WelcomeSection }         from "@/components/home/WelcomeSection";
import { Flywheel }               from "@/components/home/Flywheel";
import { ValuesSection }          from "@/components/home/ValuesSection";
import { CTABanner }              from "@/components/home/CTABanner";

const TITLE =
  "Globixs Technology Solutions | AI Automation, Digital Marketing & Technology Consulting";
const DESCRIPTION =
  "AI automation, digital marketing and technology consulting for growing businesses. We build and run the systems that answer your calls, automate the busywork, connect your tools, and bring in customers. Seattle-based.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Technology Solutions — AI Automation, Digital Marketing & Technology Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceCards />
      <IndustryGrid />
      {/* Keep existing trust / values / CTA sections */}
      <WelcomeSection />
      <Flywheel />
      <ValuesSection />
      <CTABanner />
    </div>
  );
}

import type { Metadata } from "next";
import { Hero }         from "@/components/home/Hero";
import { PillarCards }  from "@/components/home/PillarCards";
import { ServiceCards } from "@/components/home/ServiceCards";
import { CTABanner }    from "@/components/home/CTABanner";

const TITLE =
  "Globixs Technology Solutions | AI Automation · Digital Marketing · Technology Consulting";
const DESCRIPTION =
  "Globixs Technology Solutions — AI automation, digital marketing and technology consulting. Seattle-based, working nationwide.";

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
        alt: "Globixs Technology Solutions — AI Automation, Digital Marketing, Technology Consulting",
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

// Fully static: nothing on the homepage reads the database. The live results
// counter lives on /technology-consulting#job-marketing.
export default function Home() {
  return (
    <div>
      <Hero />
      <PillarCards />
      <ServiceCards />
      <CTABanner />
    </div>
  );
}

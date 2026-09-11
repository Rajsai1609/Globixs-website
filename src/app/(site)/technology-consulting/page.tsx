import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ConsultantCards } from "@/components/hero-illustrations/ConsultantCards";
import { SystemsCloud } from "@/components/technology-consulting/SystemsCloud";
import { TalentSolutions } from "@/components/technology-consulting/TalentSolutions";
import { JobMarketing } from "@/components/technology-consulting/JobMarketing";

const TITLE = "Technology Consulting";
const DESCRIPTION =
  "Systems and cloud consulting, talent solutions for engineering teams, and full-time job marketing for technology professionals — a dedicated recruiter, 25–35 tailored applications every business day, $349 a month. Seattle-based, working nationwide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "technology consulting Seattle",
    "cloud architecture review",
    "systems integration consulting",
    "IT staffing Seattle",
    "contract to hire engineers",
    "job marketing service",
    "H1B OPT job placement",
  ],
  alternates: { canonical: "/technology-consulting" },
  openGraph: {
    title: `${TITLE} | Globixs Technology Solutions`,
    description: DESCRIPTION,
    type: "website",
    url: "/technology-consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs Technology Consulting — systems & cloud, talent solutions, job marketing",
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

// The job-marketing section renders <ResultsCounter />, <ResultsFeed /> and
// <Testimonials />, which read the database. Without this the page would be
// prerendered once at build time and never pick up a newly published result.
// 300s matches /results.
export const revalidate = 300;

export default function TechnologyConsultingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Technology Consulting"
        lines={["Vetted engineers.", "On your team.", "In days, not months."]}
        subhead="Contract, contract-to-hire and direct-hire consultants across cloud, data/AI and enterprise applications, plus job marketing for professionals."
        primaryCta={{ label: "Request consultants", href: "/contact" }}
        secondaryCta={{ label: "Job marketing for professionals", href: "#job-marketing" }}
        aside={<ConsultantCards />}
      />
      <SystemsCloud />
      <TalentSolutions />
      <JobMarketing />
    </div>
  );
}

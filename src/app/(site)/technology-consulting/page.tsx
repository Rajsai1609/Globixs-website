import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
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

const JUMP_LINKS = [
  { href: "#systems-cloud", label: "Systems & Cloud Consulting" },
  { href: "#talent", label: "Talent Solutions" },
  { href: "#job-marketing", label: "Job Marketing for Professionals" },
] as const;

export default function TechnologyConsultingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Technology Consulting"
        title="Senior technical judgment, on your side of the table."
        description="Three practices under one roof: systems and cloud consulting for businesses making technology decisions, talent solutions for teams that need engineers, and job marketing for technology professionals ready for their next role."
        secondary={{ href: "#job-marketing", label: "Looking for a job?" }}
        jumpLinks={JUMP_LINKS}
      />
      <SystemsCloud />
      <TalentSolutions />
      <JobMarketing />
    </div>
  );
}

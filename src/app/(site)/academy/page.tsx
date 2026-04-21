import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { academyStepVisuals, academyWhoForImage } from "@/lib/academy-visuals";

export const metadata: Metadata = {
  title: "MCT PathAI",
  description: "MCT PathAI: student career automation powered by AI job intelligence.",
};

const jobSeekerPoints = [
  "Scrapes 1,000+ jobs daily from leading AI and tech companies",
  "Scores jobs against your profile using semantic AI matching",
  "Grades opportunities A+ to F across 10 dimensions",
  "Generates tailored resumes for top-fit roles",
  "Filters H1B and OPT-friendly opportunities",
];

const staffingPoints = [
  "Auto-screen candidates against open roles",
  "AI match scoring and profile analysis",
  "Personalized outreach generation for every match",
  "Real-time placement pipeline dashboard",
  "Reduce time-to-placement by up to 60%",
];

const steps = [
  {
    title: "Student Career Automation",
    description: "Daily AI-driven job discovery, fit scoring, and tailored resume generation.",
  },
  {
    title: "Staffing Intelligence",
    description: "A shared intelligence layer recruiters can use for better matching and outreach.",
  },
  {
    title: "Live Product Demo",
    description: "See MCT PathAI analyze and grade opportunities in real time.",
  },
];

export default function AcademyPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="MCT PathAI by Globixs"
            title="AI-Powered Student Career Automation"
            description="MCT PathAI is the student-focused product inside the Globixs ecosystem, designed to automate job search, fit scoring, and application readiness."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const visual = academyStepVisuals[index]!;
            return (
              <Reveal key={step.title} delay={index * 80}>
                <article className="premium-card overflow-hidden p-0">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-heading">{step.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="enterprise-panel p-7">
          <h3 className="text-2xl font-semibold text-heading">For Students and IT Job Seekers</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {jobSeekerPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </Reveal>

        <Reveal className="enterprise-panel overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-heading">For Globixs Staffing Teams</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {staffingPoints.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="https://www.mctpathai.com/" target="_blank" className="btn-primary">
                  Open Live Demo
                </Link>
                <Link href="/services" className="btn-secondary">See IT Staffing Services</Link>
              </div>
            </div>
            <div className="flex flex-col border-t border-border lg:border-l lg:border-t-0">
              <div className="relative aspect-[4/3] min-h-[200px] w-full lg:aspect-auto lg:min-h-[220px] lg:flex-1">
                <Image
                  src={academyWhoForImage.src}
                  alt={academyWhoForImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { academyStepVisuals, academyWhoForImage } from "@/lib/academy-visuals";

export const metadata: Metadata = {
  title: "Academy",
  description: "Career acceleration through AI job marketing, interview support, and real product practice.",
};

const steps = [
  {
    title: "AI Job Marketing",
    description:
      "High-volume, targeted application workflows designed to increase qualified interview opportunities.",
  },
  {
    title: "Interview Acceleration",
    description:
      "Resume and profile optimization with focused preparation for technical and behavioral rounds.",
  },
  {
    title: "Upskill on Real Products",
    description:
      "Hands-on contribution to live product tracks to build verifiable portfolio outcomes and practical confidence.",
  },
];

export default function AcademyPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="Globixs Academy"
            title="From student to hired with practical execution support"
            description="Academy helps learners and job-seekers become market-ready through guided application workflows, interview preparation, and portfolio-backed experience."
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
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Step {index + 1}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="enterprise-panel overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">Who this is for</h3>
              <p className="mt-3 text-slate-600">
                CS/IT students, recent graduates, career switchers, and professionals re-entering the market who need a structured path to interviews and employment.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Typical outcomes include stronger resumes, better interview conversion, and live project experience that improves hiring confidence.
              </p>
              <Link href="/contact" className="btn-primary mt-6">Apply to Academy</Link>
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
              <ul className="space-y-3 border-t border-border bg-slate-50 p-8 text-sm text-slate-700">
                <li>Personalized resume and profile guidance</li>
                <li>Structured interview preparation plans</li>
                <li>Live portfolio project contribution support</li>
                <li>Job-market rhythm and accountability coaching</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "Staffing & Talent Solutions",
  description: "AI-augmented staffing models for contract, permanent, and OPT/H1B talent.",
};

const models = [
  { title: "Contract Staffing", desc: "Short-term and long-term IT placements across cloud, data, AI, and software delivery." },
  { title: "Permanent Placement", desc: "Direct-hire support with AI-assisted technical and culture fit assessment." },
  { title: "Contract-to-Hire", desc: "Reduce hiring risk with a structured path from contract engagement to full-time offer." },
  { title: "OPT / H1B Staffing", desc: "Specialized placement support for international talent with compliance-first workflows." },
];

export default function StaffingPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="Talent Solutions"
            title="AI-Augmented IT Staffing That Places Faster"
            description="We combine human recruiting expertise with AI automation to identify, screen, and place qualified talent faster."
          />
        </Reveal>

        <section className="grid gap-6 md:grid-cols-2">
          {models.map((model, index) => (
            <Reveal key={model.title} delay={index * 80}>
              <article className="premium-card p-6">
                <h3 className="text-xl font-semibold">{model.title}</h3>
                <p className="mt-3 text-slate-600">{model.desc}</p>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal className="premium-card p-8">
          <h3 className="text-2xl font-semibold text-heading">Need to hire quickly?</h3>
          <p className="mt-3 text-sm text-slate-600">
            Share your role requirements and we will align candidates using 10-dimension AI scoring before recruiter review.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Talk to Our Team</Link>
        </Reveal>
      </div>
    </div>
  );
}

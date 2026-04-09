import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "Staffing & Talent Solutions",
  description: "IT staffing, consulting, managed services, and technology talent solutions.",
};

const models = [
  { title: "Staff Augmentation", desc: "Embed pre-vetted engineers and analysts directly into your delivery teams." },
  { title: "IT Consulting", desc: "Advisory support for cloud modernization, platform strategy, and transformation programs." },
  { title: "Managed Services", desc: "Operations support for IAM, security, network administration, and helpdesk functions." },
  { title: "Data & Analytics", desc: "Data engineering, BI, and analytics solutions for scalable decision support." },
];

const techStack = [
  "Java",
  "Python",
  ".NET / C#",
  "React",
  "Node.js",
  "AWS",
  "Azure",
  "GCP",
  "Salesforce",
  "SAP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Power BI",
  "Tableau",
];

export default function StaffingPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="Talent Solutions"
            title="The technology talent you need, when you need it"
            description="Globixs connects enterprise clients with skilled professionals across cloud, development, DevOps, data, and platform operations."
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
          <h3 className="text-2xl font-semibold text-slate-900">Technologies we staff</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-semibold text-slate-900">Looking to hire?</h4>
              <p className="mt-2 text-sm text-slate-600">Share your requirements and we can begin shortlisting aligned profiles quickly.</p>
              <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brandDark">Contact Talent Team →</Link>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h4 className="font-semibold text-slate-900">Looking for work?</h4>
              <p className="mt-2 text-sm text-slate-600">Explore active opportunities or submit your profile for future matching roles.</p>
              <Link href="/careers" className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brandDark">Explore Careers →</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


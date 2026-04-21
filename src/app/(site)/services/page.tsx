import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "AI-Powered IT Staffing & Consultancy",
  description: "Globixs AI-augmented IT staffing and consultancy services for faster placements and stronger matching.",
};

const staffingServices = [
  {
    title: "Contract Staffing",
    points: [
      "Short-term and long-term IT placements",
      "Cloud Engineers, Data Scientists, AI Engineers",
      "Full Stack Developers, DevOps, and ML Engineers",
      "Candidates pre-vetted with AI skills assessment",
    ],
  },
  {
    title: "Permanent Placement",
    points: [
      "Direct hire for full-time IT positions",
      "Deep technical screening with AI-assisted evaluation",
      "Culture fit assessment",
      "90-day placement guarantee",
    ],
  },
  {
    title: "Contract-to-Hire",
    points: [
      "Try before you hire with reduced risk",
      "Smooth transition process to full-time",
      "Flexible engagement models",
    ],
  },
  {
    title: "OPT / H1B Staffing",
    points: [
      "Specialized in international IT talent placement",
      "Visa sponsorship support and compliance",
      "Documentation and immigration coordination",
      "Active network of 500+ OPT/H1B candidates",
    ],
  },
];

const compareRows = [
  ["Resume review", "Manual", "AI pre-screening in minutes"],
  ["Placement timeline", "3-4 weeks", "7-10 days"],
  ["Matching", "Generic job matching", "10-dimension AI scoring"],
  ["Tracking", "Paper-based tracking", "Real-time live dashboard"],
  ["Team model", "One recruiter per client", "AI + human team combined"],
  ["Pricing", "High placement cost", "Performance-based pricing"],
];

const industries = [
  "Cloud & Infrastructure",
  "Data Engineering & Analytics",
  "Artificial Intelligence & Machine Learning",
  "Software Development",
  "Cybersecurity",
  "Healthcare IT",
  "FinTech",
  "E-commerce Technology",
];

export default function ServicesPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="Globixs Core Offering"
            title="AI-Powered IT Staffing & Consultancy"
            description="Globixs combines human recruiting expertise with AI automation to source, screen, and place the right IT talent faster."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
            <Link href="/academy" className="btn-secondary">Explore MCT PathAI</Link>
          </div>
        </Reveal>

        <section className="grid gap-6 md:grid-cols-2">
          {staffingServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="premium-card p-6">
                <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </section>

        <Reveal className="enterprise-panel overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Traditional Staffing</th>
                  <th className="px-4 py-3 font-semibold">Globixs AI Model</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([category, legacy, modern]) => (
                  <tr key={category} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{category}</td>
                    <td className="px-4 py-3 text-muted">{legacy}</td>
                    <td className="px-4 py-3 text-foreground">{modern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="enterprise-panel p-7">
          <h2 className="text-xl font-semibold text-heading">Business Verticals We Support</h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {industries.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

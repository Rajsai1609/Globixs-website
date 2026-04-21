import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "About",
  description: "About MCTechnology LLC, our framework, and product leadership background.",
};

const productLeadHighlights = [
  "Master's in Cloud Computing — Campbellsville University",
  "Bachelor's in Electrical & Electronics Engineering",
  "Former Data Analyst at TCS and Metro One Loss Prevention",
  "Built production AI systems across restaurant, real estate, career, and healthcare verticals",
  "Active in Seattle AI Developers community",
];

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="About MCTechnology LLC"
            title="Built by Engineers. Powered by AI."
            description="MCTechnology LLC is an AI automation agency based in Seattle, WA. We build multi-agent AI systems that automate high-friction operations across staffing, restaurant, real estate, healthcare, and sales workflows."
          />
        </Reveal>

        <section className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-semibold text-heading">Our Philosophy</h3>
            <p className="mt-3 text-slate-600">
              SENSE → REASON → ORCHESTRATE → OPTIMIZE.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Sense the data. Reason with AI. Orchestrate multi-agent execution. Continuously optimize outcomes.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-semibold text-heading">What We Build</h3>
            <p className="mt-3 text-sm text-slate-600">
              AI systems for recruiting workflows, sales prospecting, restaurant operations, healthcare coordination,
              and real estate lead automation.
            </p>
          </Reveal>
        </section>

        <Reveal className="rounded-xl border border-slate-200 bg-white p-8">
          <h3 className="text-2xl font-semibold text-heading">AI Product Lead</h3>
          <p className="mt-2 text-lg text-slate-700">Rajsai Naredla — AI Architect | Cloud Engineer | Builder</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {productLeadHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

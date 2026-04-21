import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { HeroImageRotator } from "@/components/sections/hero-image-rotator";

export const dynamic = "force-dynamic";

const verticals = [
  { title: "MCTResto", desc: "Restaurant operations automation: orders, catering, and CRM workflows." },
  { title: "MCT Realty", desc: "Real estate lead automation and valuation intelligence." },
  { title: "MCT PathAI", desc: "Student career automation for job discovery, scoring, and resume tailoring." },
  { title: "MCT Health", desc: "Healthcare appointment and clinic workflow automation." },
  { title: "MCT SalesIQ", desc: "Sales prospecting and outreach automation on autopilot." },
];

const steps = [
  {
    title: "1 - SENSE",
    desc: "We analyze staffing and operations workflows to identify the highest-impact AI opportunities.",
  },
  {
    title: "2 - REASON",
    desc: "Our AI agents learn your hiring criteria, business rules, and delivery goals.",
  },
  {
    title: "3 - ORCHESTRATE",
    desc: "AI + human teams execute sourcing, scoring, outreach, and reporting together.",
  },
  {
    title: "4 - OPTIMIZE",
    desc: "We monitor outcomes and continuously improve your staffing and automation performance.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero-mesh py-24 text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-100/90">
              Seattle, WA · Globixs Technology Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              AI-Powered IT Staffing & Consultancy for Faster Hiring
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Globixs helps teams hire and deliver faster through AI-augmented staffing, consulting, and automation systems. We also power MCT PathAI for student career automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">Explore AI Staffing</Link>
              <Link href="/academy" className="btn-secondary">Explore MCT PathAI</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">5+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">AI Systems Deployed</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">1,000+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">Jobs Processed Daily</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">60%</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">Faster Placement Pipeline</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">$0</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">First Project Setup Fee</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid gap-4">
            <HeroImageRotator />
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold">What we solve</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Slow IT hiring cycles and manual resume screening</li>
                <li>Low recruiter throughput and weak candidate-role matching</li>
                <li>Student job search fatigue without intelligent prioritization</li>
                <li>Vertical workflows in healthcare, real estate, sales, and restaurants that need automation</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Business Verticals"
              title="AI products that support staffing and consulting outcomes"
              description="Beyond staffing, Globixs showcases automation products across core business verticals, including MCT PathAI for students."
            />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verticals.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 70}>
                <article className="premium-card p-6">
                  <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle eyebrow="Delivery Model" title="Sense → Reason → Orchestrate → Optimize" />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 60}>
                <article className="enterprise-panel p-5">
                  <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

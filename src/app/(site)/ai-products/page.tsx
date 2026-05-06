import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "AI Products | Globixs Technology Solutions",
  description:
    "Vertical AI products built by Globixs and deployed for real customers. Restaurant ops, real estate, career intelligence, and more — each one ships with monitoring, KPIs, and human-in-the-loop oversight.",
  openGraph: {
    title: "AI Products | Globixs Technology Solutions",
    description:
      "Vertical AI products built by Globixs and deployed for real customers. Restaurant ops, real estate, career intelligence, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs AI Products",
      },
    ],
  },
};

const deliverySteps = [
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

export default function AIProductsPage() {
  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              AI PRODUCTS FOR GROWING BUSINESSES
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Software your team will actually use
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              AI tools built for the day-to-day of small and medium businesses. Setup in days.
              Pricing that fits your budget. Real customers using them right now.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Request a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ SHIPPED & LIVE ══════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="SHIPPED & LIVE"
              title="Products running in production today"
              description="Built by Globixs, deployed for real customers."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {/* PathAI */}
            <Reveal delay={0}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR JOB SEEKERS
                </p>
                <h3 className="mt-2 text-3xl font-bold text-blue-900">PathAI</h3>
                <p className="mt-2 text-lg text-gray-600">
                  AI job matching for international students
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Helps F-1, OPT, and STEM-OPT students find jobs that sponsor visas. Personalized
                  matches, daily updates, real placements.
                </p>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-900">49+</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Active Users</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">10</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Match Dimensions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">Daily</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Pipeline Updates</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href="https://mctpathai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    Visit PathAI →
                  </a>
                </div>
              </article>
            </Reveal>

            {/* Resto */}
            <Reveal delay={80}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR RESTAURANTS
                </p>
                <h3 className="mt-2 text-3xl font-bold text-blue-900">Resto</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Run your restaurant on autopilot
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Catering inquiries, customer messages, online orders — handled. Your team focuses
                  on the food and the guests. Live at 4 independent restaurants.
                </p>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-900">4</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Live Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">3</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">AI Agents</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">100%</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Operational Uptime</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    View case studies →
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Realty */}
            <Reveal delay={160}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR REAL ESTATE AGENTS
                </p>
                <h3 className="mt-2 text-3xl font-bold text-blue-900">Realty</h3>
                <p className="mt-2 text-lg text-gray-600">
                  Six AI agents working your pipeline
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  Lead capture, qualification, follow-up, booking, CRM, reporting — all running
                  24/7. Includes a property valuation model with 95% accuracy.
                </p>
                <div className="mt-6 flex gap-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-900">6</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Integrated Modules</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">0.95</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">AVM R² Score</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">$750</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-gray-500">Setup + $1,200/mo</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                  >
                    See how it works →
                  </Link>
                </div>
              </article>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════ IN DEVELOPMENT ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="IN DEVELOPMENT"
              title="Coming soon"
              description="Products we're actively building. Beta partners welcome."
            />
          </Reveal>

          {/* ─── SignalFeed card ─── */}
          <Reveal delay={80}>
            <article className="relative mt-10 flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="absolute right-6 top-6 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                IN DEVELOPMENT
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                SALES INTELLIGENCE
              </p>
              <h3 className="mt-2 text-3xl font-bold text-blue-900">SignalFeed</h3>
              <p className="mt-2 text-lg text-gray-600">
                AI sales intelligence agent for staffing firms
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
                SignalFeed scrapes job postings across the web, scores companies on six proprietary
                hiring distress signals, enriches them with verified decision-maker contacts, and
                drafts personalized outreach. Currently being battle-tested inside Globixs&apos;s
                own BD pipeline before external launch.
              </p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Who it&apos;s for
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                    IT Staffing Agencies
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                    Recruiting Teams &amp; RPOs
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                    BD Leaders at Consulting Firms
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href="/contact?product=signalfeed"
                  className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                >
                  Join the early access list →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ══════════ HOW WE BUILD ══════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Delivery Model"
              title="Sense → Reason → Orchestrate → Optimize"
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 60}>
                <article className="enterprise-panel p-5">
                  <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="hero-mesh py-16 text-white md:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have a workflow that&apos;s bleeding time?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Half our products start as one-off builds for clients. If you have a hiring, sales,
              or operations workflow that&apos;s leaking hours, talk to us — we&apos;ll tell you
              whether it fits our agent stack or needs a custom build.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/consulting" className="btn-secondary">
                See How We Build
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

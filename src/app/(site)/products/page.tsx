import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "AI Products | Globixs Technology Solutions",
  description:
    "Globixs AI products are built from the staffing trenches. Our first product, SignalFeed, is a sales intelligence agent for staffing firms — now in beta.",
  openGraph: {
    title: "AI Products | Globixs Technology Solutions",
    description:
      "Globixs AI products are built from the staffing trenches. Our first product, SignalFeed, is a sales intelligence agent for staffing firms — now in beta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs AI Products — SignalFeed and more",
      },
    ],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const signalFeedBeneficiaries = [
  {
    title: "IT Staffing Agencies",
    body: "Surface mid-market companies in active hiring pain in your geography. Stop wasting BD hours on companies that aren't actually hiring.",
  },
  {
    title: "Recruiting Teams & RPOs",
    body: "Cut prospecting time so senior recruiters spend hours on conversations, not lead lists. Every Monday, a ranked list lands in your inbox.",
  },
  {
    title: "BD Leaders at Consulting Firms",
    body: "Replace random outbound with signal-driven outreach. The model improves every week as you log outcomes — pipeline that compounds.",
  },
];

const signalFeedHowSteps = [
  {
    num: "01",
    title: "Scrape",
    desc: "Daily ingestion of job postings across multiple ATS platforms and public job boards.",
  },
  {
    num: "02",
    title: "Score",
    desc: "Each company gets a hiring distress score (0–100) based on six signals: posting velocity, repeat reposts, multi-platform spread, role mix shifts, geographic expansion, and wage anomalies.",
  },
  {
    num: "03",
    title: "Enrich",
    desc: "Top-scoring companies are enriched with verified decision-maker contacts (VPs of HR, Operations, Recruiting).",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Every Monday morning, BD reps receive a ranked list of 20 high-intent leads with AI-drafted outreach ready to send.",
  },
];

const signalFeedWhyProps = [
  "Built by an operator. Globixs uses SignalFeed to source its own client pipeline. You get a tool calibrated against real revenue outcomes, not a beta experiment.",
  "Six signals, not just job count. Anyone can scrape postings. SignalFeed identifies which companies are in genuine hiring distress — the ones most likely to take a meeting.",
  "Improves with use. Every BD outcome you log refines the scoring model. Signal weights adjust monthly based on what actually closes.",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              Globixs AI Products
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI products built from the staffing trenches
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We don&apos;t sell theory. Globixs AI products are built to solve problems we hit
              running our own staffing work — then sharpened by real client deployments. Each one
              ships with monitoring, KPIs, and human-in-the-loop oversight.
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

      {/* ══════════ AVAILABLE NOW ══════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              title="Available Now"
              description="Products currently deployed and serving clients."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface px-8 py-10 text-center">
              <p className="text-sm leading-7 text-slate-600">
                We&apos;re shipping our first publicly available AI product later this quarter.
                Until then, every Globixs AI product runs internally — sharpened against real
                staffing operations before we offer it externally. Want early access when our first
                product goes live?
              </p>
              <Link href="/contact" className="btn-secondary mt-6 inline-flex">
                Join the Early Access List
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ IN DEVELOPMENT ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              title="In Development"
              description="Products we're actively building. Beta partners welcome."
            />
          </Reveal>

          {/* ─── SignalFeed card ─── */}
          <Reveal delay={80}>
            <article className="enterprise-panel mt-10 overflow-hidden">
              <div className="p-8 lg:p-12">

                {/* Status badge + product name */}
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent ring-1 ring-accent/20">
                  Coming Soon · Beta
                </span>
                <h2 className="mt-5 text-4xl font-bold text-heading sm:text-5xl">SignalFeed</h2>
                <p className="mt-2 text-lg font-medium text-muted">
                  Sales intelligence agent for staffing firms
                </p>

                {/* Lead paragraph */}
                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
                  SignalFeed scrapes job postings across the web, identifies which companies are
                  actively struggling to hire, and hands your BD team a ranked list of high-intent
                  sales leads every Monday morning. It scores companies on six proprietary hiring
                  distress signals, enriches them with verified decision-maker contacts, and drafts
                  personalized outreach — turning hiring noise into pipeline. Built and
                  battle-tested inside Globixs before being offered to other staffing firms.
                </p>

                {/* Who benefits */}
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Who benefits from SignalFeed
                  </p>
                  <div className="mt-5 grid gap-5 sm:grid-cols-3">
                    {signalFeedBeneficiaries.map((item) => (
                      <div key={item.title} className="premium-card p-5">
                        <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How it's useful */}
                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    How it&apos;s useful
                  </p>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {signalFeedHowSteps.map((step) => (
                      <div key={step.num} className="enterprise-panel p-5">
                        <p className="text-3xl font-bold text-accent/20">{step.num}</p>
                        <h3 className="mt-2 text-sm font-semibold text-heading">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why SignalFeed */}
                <div className="mt-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Why SignalFeed
                  </p>
                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    {signalFeedWhyProps.map((text, idx) => (
                      <div key={idx} className="premium-card p-5">
                        <p className="text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SignalFeed Beta CTA */}
                <div className="mt-12 rounded-2xl bg-black/[0.03] px-8 py-8 lg:py-10">
                  <h3 className="text-xl font-bold text-heading sm:text-2xl">
                    Want SignalFeed pointed at your market?
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    We&apos;re onboarding a small group of beta partners. Tell us your ICP and your
                    geography, and we&apos;ll show you what your weekly lead list could look like.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary">
                      Request Beta Access
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Book a 15-min Walkthrough
                    </Link>
                  </div>
                </div>

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

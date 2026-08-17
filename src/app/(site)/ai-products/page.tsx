import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Target,
  Workflow,
  Star,
  Globe,
  BarChart3,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  // Root layout applies the `%s | Globixs Technology Solutions` template — no suffix here.
  title: "AI Services for Businesses",
  description:
    "Done-for-you AI services for businesses: AI receptionists and missed call text back, AI chatbots, lead generation, workflow automation, review management, business website design with local SEO, data dashboards, and design services. Seattle-based, built and run for you.",
  keywords: [
    "AI receptionist",
    "missed call text back",
    "lead generation service",
    "workflow automation",
    "review management",
    "business website design Seattle",
    "AI chatbot for business",
    "local SEO Seattle",
  ],
  openGraph: {
    title: "AI Services for Businesses | Globixs Technology Solutions",
    description:
      "AI receptionists, chatbots, lead generation, workflow automation, review management, websites with local SEO, dashboards, and design — built and run for your business.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Globixs AI Services for Businesses",
      },
    ],
  },
};

type Service = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    Icon: PhoneCall,
    title: "AI Receptionists & Missed-Call Recovery",
    desc: "Never lose a customer to a missed call again. An AI agent that answers 24/7, books appointments, texts back missed callers, and follows up — for restaurants, clinics, salons, and home services.",
  },
  {
    Icon: MessageSquare,
    title: "AI Chatbots for Support & Sales",
    desc: "24/7 assistants trained on your business — answering customers, qualifying leads, and taking bookings on your website and WhatsApp.",
  },
  {
    Icon: Target,
    title: "Lead Generation Systems",
    desc: "AI-driven prospect discovery, personalized outreach, and automated follow-up that delivers qualified leads to your pipeline every month.",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation",
    desc: "Quote follow-ups, invoice chasing, appointment reminders, review requests, CRM updates — the busywork runs itself while your team does the real work.",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    desc: "Automated review requests after every job, AI-drafted responses, and monitoring across Google and Yelp — so your rating sells for you.",
  },
  {
    Icon: Globe,
    title: "Website Design & Development + Local SEO",
    desc: "Modern, fast business websites built to convert — plus Google Business Profile optimization so local customers actually find you.",
  },
  {
    Icon: BarChart3,
    title: "Data Analysis & Dashboards",
    desc: "Turn your business data into decisions — reporting, dashboards, and insights on autopilot.",
  },
  {
    Icon: Palette,
    title: "Design Services",
    desc: "Branding, marketing assets, flyers, and landing pages that look like you hired an agency.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Free consult — we find your biggest leak",
    desc: "A 30-minute call to work out where you're losing customers, time, or leads today. No pitch deck, no commitment.",
  },
  {
    step: "02",
    title: "We build and launch in 1–2 weeks",
    desc: "We configure, train, and deploy the system on your stack — then test it against real customer traffic before it goes live.",
  },
  {
    step: "03",
    title: "Flat monthly rate, cancel anytime",
    desc: "We run it, monitor it, and keep improving it. No long-term lock-in — stay because it works, not because of a contract.",
  },
];

export default function AIServicesPage() {
  return (
    <div>
      {/* ══════════ HERO ══════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              AI SERVICES FOR BUSINESSES
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              AI services that grow your business.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              We build and run the systems that answer your calls, fill your pipeline, and win you
              customers — so you can focus on the work.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Free Consult
              </Link>
              <Link href="/services" className="btn-secondary">
                Looking to Hire Engineers?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="WHAT WE BUILD & RUN"
              title="Eight services, one partner."
              description="Start with the one costing you the most today, or let us run the whole stack. Every service is built for your business, deployed on your tools, and managed by our team."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 60}>
                <article className="premium-card flex h-full flex-col gap-4 p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <service.Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading">{service.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{service.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="HOW IT WORKS"
              title="From first call to live system in two weeks."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 80}>
                <article className="enterprise-panel flex h-full flex-col p-8">
                  <p className="font-mono text-sm tracking-[0.1em] text-red-600">({item.step})</p>
                  <h3 className="mt-3 text-lg font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROOF — PRODUCTS WE'VE BUILT ══════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="PRODUCTS WE'VE BUILT"
              title="We run these systems on our own business first."
              description="Before we sell you an AI system, we ship one ourselves. These are products our engineers built and run for real customers — the same stack behind the services above."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Resto */}
            <Reveal delay={0}>
              <article className="premium-card flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR RESTAURANTS
                </p>
                <h3 className="mt-2 text-xl font-bold text-heading">Resto</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  Catering inquiries, customer messages, and online orders handled by AI agents.
                  Live at 4 independent restaurants — the system behind our AI receptionist service.
                </p>
              </article>
            </Reveal>

            {/* PathAI */}
            <Reveal delay={60}>
              <article className="premium-card flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR JOB SEEKERS
                </p>
                <h3 className="mt-2 text-xl font-bold text-heading">PathAI</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  AI job matching for international students — personalized matches across ten
                  dimensions with daily pipeline updates.
                </p>
                <div className="mt-4">
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

            {/* Realty */}
            <Reveal delay={120}>
              <article className="premium-card flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  FOR REAL ESTATE AGENTS
                </p>
                <h3 className="mt-2 text-xl font-bold text-heading">Realty</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  Six AI agents working the pipeline — lead capture, qualification, follow-up,
                  booking, CRM, and reporting, plus a property valuation model.
                </p>
              </article>
            </Reveal>

            {/* SignalFeed */}
            <Reveal delay={180}>
              <article className="premium-card flex h-full flex-col p-6">
                <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  IN DEVELOPMENT
                </span>
                <h3 className="mt-3 text-xl font-bold text-heading">SignalFeed</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  Sales intelligence that scores companies on hiring distress signals, enriches
                  them with decision-maker contacts, and drafts outreach — the engine behind our
                  lead generation service.
                </p>
                <div className="mt-4">
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
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="hero-mesh py-16 text-white md:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Tell us where your business is leaking.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Missed calls, cold leads, manual follow-ups, a website nobody finds. Bring us the
              bottleneck and we&apos;ll tell you honestly whether we can fix it — and what it would
              take.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Book a Free Consult
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

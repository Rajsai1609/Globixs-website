import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "Products",
  description: "Vertical product development in restaurant, healthcare, home services, and real estate.",
};

const tracks = [
  {
    title: "Resto - Restaurant Growth Automation",
    badge: "Live Product",
    description:
      "Built for restaurants and cloud kitchens to improve order flow, catering lead handling, customer engagement, and campaign execution.",
    features: [
      "Catering inquiry automation and lead routing",
      "AI-generated campaign content and promo assets",
      "Customer re-engagement flows and reminders",
    ],
  },
  {
    title: "Health - Clinic Automation",
    badge: "In Development",
    description:
      "Designed for clinics and healthcare providers to streamline intake, scheduling, communication, and operational monitoring.",
    features: [
      "Patient intake and document workflow automation",
      "Appointment management and reminder orchestration",
      "Operational dashboards for clinic visibility",
    ],
  },
  {
    title: "Home Services Operations Platform",
    badge: "Live Product",
    description:
      "Operations tooling for contractors and field teams with workflow support across dispatch, estimates, and service completion.",
    features: [
      "Lead intake and estimate workflows",
      "Dispatch scheduling and job tracking",
      "Invoice follow-up and customer communication",
    ],
  },
  {
    title: "Realty - Agent AI Platform",
    badge: "In Development",
    description:
      "AI-enabled support for real estate agents and teams with lead engagement, appointment workflows, and pipeline visibility.",
    features: [
      "Lead prioritization and response support",
      "Booking and transaction milestone orchestration",
      "CRM visibility for agent activity and outcomes",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="Product Development"
            title="Building digital products for focused business verticals"
            description="Our product group creates practical, revenue-linked applications tailored to industry-specific workflows."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track, index) => (
            <Reveal key={track.title} delay={index * 80}>
              <article className="premium-card relative overflow-hidden p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand/70 via-brand to-brand/60" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{track.badge}</p>
                <h2 className="mt-2 text-xl font-semibold text-heading">{track.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{track.description}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                  {track.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="enterprise-panel p-8">
          <h3 className="text-2xl font-semibold text-heading">How we build products</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            <p className="rounded-xl border border-border bg-slate-50 p-3"><span className="font-semibold text-heading">01</span> Discovery and problem framing</p>
            <p className="rounded-xl border border-border bg-slate-50 p-3"><span className="font-semibold text-heading">02</span> Rapid MVP and workflow validation</p>
            <p className="rounded-xl border border-border bg-slate-50 p-3"><span className="font-semibold text-heading">03</span> Iteration through usage signals</p>
            <p className="rounded-xl border border-border bg-slate-50 p-3"><span className="font-semibold text-heading">04</span> Continuous expansion and support</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


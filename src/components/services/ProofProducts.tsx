import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Product = {
  eyebrow: string;
  title: string;
  desc: string;
  link?: { label: string; href: string; external?: boolean };
  badge?: string;
};

const products: Product[] = [
  {
    eyebrow: "FOR RESTAURANTS",
    title: "Resto",
    desc: "Catering inquiries, customer messages, and online orders handled by AI agents. Live at four independent restaurants — the system behind our voice AI service.",
  },
  {
    eyebrow: "FOR JOB SEEKERS",
    title: "PathAI",
    desc: "AI job matching for international students — personalized matches across ten dimensions with daily pipeline updates.",
    link: { label: "Visit PathAI →", href: "https://mctpathai.com", external: true },
  },
  {
    eyebrow: "FOR REAL ESTATE AGENTS",
    title: "Realty",
    desc: "Six AI agents working the pipeline — lead capture, qualification, follow-up, booking, CRM, and reporting, plus a property valuation model.",
  },
  {
    eyebrow: "FOR SALES TEAMS",
    title: "SignalFeed",
    badge: "IN DEVELOPMENT",
    desc: "Sales intelligence that scores companies on hiring distress signals, enriches them with decision-maker contacts, and drafts outreach — the engine behind our lead generation service.",
    link: { label: "Join the early access list →", href: "/contact?product=signalfeed" },
  },
];

export function ProofProducts() {
  return (
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
          {products.map((product, idx) => (
            <Reveal key={product.title} delay={idx * 60}>
              <article className="premium-card flex h-full flex-col p-6">
                {product.badge ? (
                  <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {product.badge}
                  </span>
                ) : (
                  <p className="eyebrow">{product.eyebrow}</p>
                )}
                <h3 className="mt-2 text-xl font-bold text-heading">{product.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-foreground">{product.desc}</p>
                {product.link ? (
                  <div className="mt-4">
                    {product.link.external ? (
                      <a
                        href={product.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                      >
                        {product.link.label}
                      </a>
                    ) : (
                      <Link
                        href={product.link.href}
                        className="inline-flex items-center text-sm font-semibold text-heading transition-transform duration-200 hover:translate-x-1"
                      >
                        {product.link.label}
                      </Link>
                    )}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

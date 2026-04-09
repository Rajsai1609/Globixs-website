import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { HeroImageRotator } from "@/components/sections/hero-image-rotator";
import { getServices } from "@/lib/data";
import {
  getStaffingCardVisual,
  homeCtaVisual,
  productTrackVisuals,
} from "@/lib/home-visuals";

export const dynamic = "force-dynamic";

const homeIndustryMeta: Record<
  string,
  { shortLabel: string; outcome: string; accent: string }
> = {
  healthcare: {
    shortLabel: "HC",
    outcome: "Secure and compliant digital workflows for better care operations.",
    accent: "from-emerald-50 to-emerald-100/60",
  },
  finance: {
    shortLabel: "FN",
    outcome: "Resilient platforms and data-driven controls for financial agility.",
    accent: "from-blue-50 to-blue-100/60",
  },
  banking: {
    shortLabel: "BK",
    outcome: "Modern banking experiences with strong risk and security posture.",
    accent: "from-indigo-50 to-indigo-100/60",
  },
  retail: {
    shortLabel: "RT",
    outcome: "Omnichannel commerce and inventory intelligence for scale.",
    accent: "from-amber-50 to-amber-100/70",
  },
  logistics: {
    shortLabel: "LG",
    outcome: "Operational visibility and throughput optimization across supply chains.",
    accent: "from-orange-50 to-orange-100/60",
  },
  media: {
    shortLabel: "MD",
    outcome: "Content delivery, personalization, and audience analytics at speed.",
    accent: "from-violet-50 to-violet-100/60",
  },
  "enterprise-technology": {
    shortLabel: "ET",
    outcome: "Enterprise product modernization and integration-led transformation.",
    accent: "from-slate-100 to-slate-200/70",
  },
};

export default async function Home() {
  const services = await getServices();
  const featuredServices = services.slice(0, 6);
  return (
    <div>
      <section className="hero-mesh py-24 text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-100/90">
              Bothell, WA · Est. 2020
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Build Better. Hire Smarter. Grow Faster.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Globixs is a technology solutions company delivering enterprise IT staffing, purpose-built product development, and academy-led career acceleration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">Explore IT Staffing</Link>
              <Link href="/academy" className="btn-secondary">Join the Academy</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">3+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">Business Verticals</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">1K+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">Enterprise Clients</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-2xl font-bold">4+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/70">Live Product Tracks</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid gap-4">
            <HeroImageRotator />
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold">Why clients choose us</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Domain-aware consulting and engineering teams</li>
                <li>Flexible delivery from advisory to managed execution</li>
                <li>Talent pipeline for mission-critical programs</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-6">
        <div className="container-shell">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted by Teams At</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-600">
            <span>Microsoft</span>
            <span>T-Mobile</span>
            <span>Cisco</span>
            <span>Deloitte</span>
            <span>Fiserv</span>
            <span>JPMorgan Chase</span>
            <span>Nordstrom</span>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-surface py-5">
        <div className="container-shell marquee-mask overflow-hidden">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            Core Capabilities
          </p>
          <div className="marquee-track flex min-w-max items-center gap-4">
            {[...[
              { label: "IT Staffing", src: "/tech-logos/aws.svg" },
              { label: "Product Development", src: "/tech-logos/azure.svg" },
              { label: "Globixs Academy", src: "/tech-logos/gcp.svg" },
              { label: "Restaurant Tech", src: "/tech-logos/snowflake.svg" },
              { label: "Healthcare Automation", src: "/tech-logos/databricks.svg" },
              { label: "Home Services", src: "/tech-logos/salesforce.svg" },
              { label: "Real Estate AI", src: "/tech-logos/oracle.svg" },
            ], ...[
              { label: "IT Staffing", src: "/tech-logos/aws.svg" },
              { label: "Product Development", src: "/tech-logos/azure.svg" },
              { label: "Globixs Academy", src: "/tech-logos/gcp.svg" },
              { label: "Restaurant Tech", src: "/tech-logos/snowflake.svg" },
              { label: "Healthcare Automation", src: "/tech-logos/databricks.svg" },
              { label: "Home Services", src: "/tech-logos/salesforce.svg" },
              { label: "Real Estate AI", src: "/tech-logos/oracle.svg" },
            ]].map((item, idx) => (
              <span
                key={`${item.label}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-slate-700"
              >
                <Image src={item.src} alt="" width={16} height={16} className="h-4 w-4 opacity-80" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="IT Staffing"
              title="The talent you need, when you need it"
              description="Globixs connects enterprise organizations with skilled technology professionals across cloud, data, DevOps, and full-stack development."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
              const visual = getStaffingCardVisual(service.slug);
              return (
                <Reveal key={service.id} delay={index * 70}>
                  <article className="premium-card overflow-hidden p-0">
                    <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Staffing Service
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                      <p className="mt-3 text-sm text-slate-600">{service.shortDesc}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brandDark"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={120} className="mt-8 flex justify-center">
            <Link href="/services" className="btn-secondary">
              Explore Staffing Services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="Product Development"
              title="Focused product tracks built by Globixs"
              description="We build practical products for restaurant, healthcare, home services, and real estate operations."
            />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "resto", name: "Resto", slug: "retail", summary: "Restaurant growth automation" },
              { id: "health", name: "Health", slug: "healthcare", summary: "Clinic workflow automation" },
              { id: "home", name: "Home Services", slug: "logistics", summary: "Field operations platform" },
              { id: "realty", name: "Realty", slug: "enterprise-technology", summary: "Agent AI platform" },
            ].map((industry, index) => {
              const trackVisual =
                productTrackVisuals[industry.id] ?? productTrackVisuals.resto;
              return (
              <Reveal key={industry.id} delay={index * 60}>
                <article className="premium-card overflow-hidden p-0">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${
                      homeIndustryMeta[industry.slug]?.accent ?? "from-slate-100 to-slate-200"
                    }`}
                  />
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={trackVisual.src}
                      alt={trackVisual.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-brandSoft text-xs font-bold tracking-wide text-brand">
                        {homeIndustryMeta[industry.slug]?.shortLabel ?? "IN"}
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Product Track
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{industry.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {industry.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
              );
            })}
          </div>
          <Reveal delay={120} className="mt-8 flex justify-center">
            <Link href="/products" className="btn-secondary">
              Explore Product Tracks
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <Reveal className="enterprise-panel p-8">
            <SectionTitle eyebrow="Process" title="A practical engagement model" />
            <ol className="mt-6 space-y-4 text-sm text-slate-600">
              <li>1. Talent and requirement discovery</li>
              <li>2. Expert shortlisting and solution mapping</li>
              <li>3. Delivery execution across staffing or product tracks</li>
              <li>4. Continuous optimization and growth support</li>
            </ol>
          </Reveal>
          <Reveal delay={120} className="enterprise-panel p-8">
            <SectionTitle eyebrow="Academy" title="From student to hired, powered by AI" />
            <p className="mt-4 text-slate-600">
              AI job marketing, interview acceleration, and real product training designed to build verifiable portfolio outcomes.
            </p>
            <Link href="/academy" className="btn-primary mt-6">Explore Academy</Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-brand px-6 py-12 text-white sm:px-10">
                <h2 className="text-2xl font-bold">Ready to accelerate your next initiative?</h2>
                <p className="mt-3 max-w-2xl text-white/85">
                  Partner with a team that combines advisory insight, hands-on engineering, and talent delivery.
                </p>
                <Link href="/contact" className="btn-secondary mt-6 border-white/25 bg-white text-brandDark hover:bg-brandSoft">
                  Schedule a Consultation
                </Link>
              </div>
              <div className="relative min-h-64">
                <Image
                  src={homeCtaVisual.src}
                  alt={homeCtaVisual.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

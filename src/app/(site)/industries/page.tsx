import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { getIndustries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-specific consulting and delivery capabilities.",
};
export const dynamic = "force-dynamic";

const industryMeta: Record<
  string,
  { shortLabel: string; outcome: string; accent: string }
> = {
  healthcare: {
    shortLabel: "HC",
    outcome: "Improve care delivery workflows with secure, compliant digital platforms.",
    accent: "from-emerald-50 to-emerald-100/60",
  },
  finance: {
    shortLabel: "FN",
    outcome: "Modernize finance systems with resilient architecture and risk-aware governance.",
    accent: "from-blue-50 to-blue-100/60",
  },
  banking: {
    shortLabel: "BK",
    outcome: "Accelerate digital banking transformation while strengthening security posture.",
    accent: "from-indigo-50 to-indigo-100/60",
  },
  retail: {
    shortLabel: "RT",
    outcome: "Create seamless omnichannel customer journeys and data-driven operations.",
    accent: "from-amber-50 to-amber-100/70",
  },
  logistics: {
    shortLabel: "LG",
    outcome: "Increase supply-chain visibility and optimize fulfillment performance.",
    accent: "from-orange-50 to-orange-100/60",
  },
  media: {
    shortLabel: "MD",
    outcome: "Enable content velocity, personalization, and scalable audience analytics.",
    accent: "from-violet-50 to-violet-100/60",
  },
  "enterprise-technology": {
    shortLabel: "ET",
    outcome: "Deliver enterprise-grade product engineering and platform modernization.",
    accent: "from-slate-100 to-slate-200/70",
  },
};

const techLogos: { label: string; src: string }[] = [
  { label: "AWS", src: "/tech-logos/aws.svg" },
  { label: "Microsoft Azure", src: "/tech-logos/azure.svg" },
  { label: "Google Cloud", src: "/tech-logos/gcp.svg" },
  { label: "Snowflake", src: "/tech-logos/snowflake.svg" },
  { label: "Databricks", src: "/tech-logos/databricks.svg" },
  { label: "Salesforce", src: "/tech-logos/salesforce.svg" },
  { label: "Oracle", src: "/tech-logos/oracle.svg" },
  { label: "Tableau", src: "/tech-logos/tableau.svg" },
  { label: "Kubernetes", src: "/tech-logos/kubernetes.svg" },
];

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="Industries"
            title="Focused expertise across regulated and high-growth sectors"
            description="Our product and delivery teams support vertical automation initiatives across restaurant, healthcare, home services, and real estate-adjacent operating models."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.id} delay={index * 70}>
              <article className="premium-card overflow-hidden p-0">
                <div
                  className={`h-2 w-full bg-gradient-to-r ${
                    industryMeta[industry.slug]?.accent ?? "from-slate-100 to-slate-200"
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-brandSoft text-xs font-bold tracking-wide text-heading">
                      {industryMeta[industry.slug]?.shortLabel ?? "IN"}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Industry Focus
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-heading">{industry.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {industryMeta[industry.slug]?.outcome ?? industry.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-block text-sm font-semibold text-accent hover:text-brandDark"
                  >
                    Explore Solutions →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <section className="rounded-2xl border border-border bg-surface px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Technology Ecosystems We Work With
            </p>
            <div className="marquee-mask mt-4 overflow-hidden">
              <div className="marquee-track flex min-w-max items-center gap-3">
                {[...techLogos, ...techLogos].map((logo, idx) => (
                  <span
                    key={`${logo.label}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <Image src={logo.src} alt="" width={16} height={16} className="h-4 w-4 opacity-80" />
                    {logo.label}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}


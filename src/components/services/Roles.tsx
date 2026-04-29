import {
  Cloud,
  Database,
  Brain,
  BarChart3,
  Server,
  Code2,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Role = { Icon: LucideIcon; title: string; description: string };

const roles: Role[] = [
  {
    Icon: Cloud,
    title: "Cloud Engineers",
    description:
      "Senior AWS, GCP, and Azure architects fluent in Terraform, Kubernetes, and multi-cloud cost optimization.",
  },
  {
    Icon: Database,
    title: "Data Engineers",
    description:
      "Pipeline builders fluent in Snowflake, dbt, Airflow, Spark, BigQuery, and modern data lakehouse architecture.",
  },
  {
    Icon: Brain,
    title: "ML / AI Engineers",
    description:
      "Production ML specialists in LLMs, RAG systems, fine-tuning, MLOps, and multi-agent architectures.",
  },
  {
    Icon: BarChart3,
    title: "Data Scientists",
    description:
      "Applied scientists who ship models — not notebooks. Strong stats foundations and production deployment experience.",
  },
  {
    Icon: Server,
    title: "DevOps / SRE",
    description:
      "Kubernetes, Terraform, observability stacks, incident response. Senior infra people who reduce on-call pain.",
  },
  {
    Icon: Code2,
    title: "Full-Stack Engineers",
    description:
      "Senior product engineers in React, Next.js, Node, Python, and TypeScript. They ship features, not tickets.",
  },
  {
    Icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "AppSec, cloud security, GRC, and SOC analysts with hands-on certifications and real attack-surface experience.",
  },
  {
    Icon: Smartphone,
    title: "Mobile Engineers",
    description:
      "iOS (Swift), Android (Kotlin), and React Native — production app builders with App Store / Play Store launches.",
  },
];

export function Roles() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Roles We Fill"
            title="The IT roles your team can't afford to fill slowly."
            description="We specialize in senior and mid-level technical hires across the modern cloud and AI stack. Every candidate is pre-vetted on actual technical work, not buzzwords."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, idx) => (
            <Reveal key={role.title} delay={idx * 40}>
              <article className="premium-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <role.Icon size={20} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-heading">{role.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{role.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Server } from "lucide-react";
import { ServiceSection } from "@/components/sections/service-section";

/* (a) Systems & Cloud Consulting — architecture reviews, integrations, data pipelines. */
export function SystemsCloud() {
  return (
    <ServiceSection
      id="systems-cloud"
      eyebrow="(01) Technology Consulting"
      title="Systems & Cloud Consulting"
      Icon={Server}
      description="A senior engineer reviews how your systems are built, hosted and connected, then gives you a written plan with costs and priorities. We handle architecture reviews, cloud setup and cost control on AWS, GCP and Azure, integrations between the tools you run, and the data pipelines that feed reporting. Where it helps, we stay on as fractional technical leadership."
      outcomes={[
        "An architecture review with a prioritized, costed roadmap you can act on or hand to another vendor.",
        "Integrations and data pipelines that are documented, monitored and owned by your team.",
        "Cloud spend, security basics and backups reviewed before they become an incident.",
      ]}
    />
  );
}

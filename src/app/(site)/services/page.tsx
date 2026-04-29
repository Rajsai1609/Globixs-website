import type { Metadata } from "next";
import { Hero }             from "@/components/services/Hero";
import { Roles }            from "@/components/services/Roles";
import { Process }          from "@/components/services/Process";
import { EngagementModels } from "@/components/services/EngagementModels";
import { Clients }          from "@/components/services/Clients";
import { WhyGlobixs }       from "@/components/services/WhyGlobixs";
import { Pricing }          from "@/components/services/Pricing";
import { ClosingCta }       from "@/components/services/ClosingCta";

export const metadata: Metadata = {
  title: "For Employers | Globixs IT Staffing & Recruiting",
  description:
    "Hire senior IT engineers in 7–10 days. AI-powered sourcing, 10-dimension screening, 90-day placement guarantee. Cloud, data, ML, full-stack, DevOps, security.",
};

export default function ServicesPage() {
  return (
    <div>
      <Hero />
      <Roles />
      <Process />
      <EngagementModels />
      <Clients />
      <WhyGlobixs />
      <Pricing />
      <ClosingCta />
    </div>
  );
}

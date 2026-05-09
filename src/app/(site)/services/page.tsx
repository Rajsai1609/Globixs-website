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
  title: "AI-Powered IT Staffing | Globixs",
  description:
    "Staffing at AI speed. Pre-vetted engineers in 7–10 days. AI-driven sourcing, semantic matching, automated screening, predictive fit scoring, and VMS submission automation.",
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

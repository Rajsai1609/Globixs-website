import type { Metadata } from "next";
import { Hero }             from "@/components/staffing/Hero";
import { Roles }            from "@/components/staffing/Roles";
import { Process }          from "@/components/staffing/Process";
import { EngagementModels } from "@/components/staffing/EngagementModels";
import { Clients }          from "@/components/staffing/Clients";
import { WhyGlobixs }       from "@/components/staffing/WhyGlobixs";
import { Pricing }          from "@/components/staffing/Pricing";
import { ClosingCta }       from "@/components/staffing/ClosingCta";

export const metadata: Metadata = {
  title: "IT Staffing for Companies",
  description:
    "Staffing at AI speed. Pre-vetted engineers in 7–10 days. AI-driven sourcing, semantic matching, automated screening, predictive fit scoring, and VMS submission automation.",
};

export default function StaffingPage() {
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

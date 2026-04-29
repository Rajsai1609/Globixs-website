import type { Metadata } from "next";
import { Hero }       from "@/components/consulting/Hero";
import { Practices }  from "@/components/consulting/Practices";
import { Clients }    from "@/components/consulting/Clients";
import { Process }    from "@/components/consulting/Process";
import { Comparison } from "@/components/consulting/Comparison";
import { NotFor }     from "@/components/consulting/NotFor";
import { ClosingCta } from "@/components/consulting/ClosingCta";

export const metadata: Metadata = {
  title: "Business Consulting Services | Globixs",
  description:
    "AI strategy, automation advisory, and technology consulting for SMB and mid-market teams. Senior consultants. 2-to-8-week sprints. Outcomes tied to KPIs.",
};

export default function ConsultingPage() {
  return (
    <div>
      <Hero />
      <Practices />
      <Clients />
      <Process />
      <Comparison />
      <NotFor />
      <ClosingCta />
    </div>
  );
}

import type { Metadata } from "next";
import { Hero }       from "@/components/consulting/Hero";
import { Practices }  from "@/components/consulting/Practices";
import { Clients }    from "@/components/consulting/Clients";
import { Process }    from "@/components/consulting/Process";
import { Comparison } from "@/components/consulting/Comparison";
import { NotFor }     from "@/components/consulting/NotFor";
import { ClosingCta } from "@/components/consulting/ClosingCta";

export const metadata: Metadata = {
  title: "AI-Focused Services | Globixs",
  description:
    "Production AI for enterprise. AI agents, LLM integration, custom AI applications, AI strategy and architecture, and managed AI operations. 2-to-8-week sprints with KPIs tied to outcomes.",
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

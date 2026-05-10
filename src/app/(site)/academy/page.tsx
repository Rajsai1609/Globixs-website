import type { Metadata } from "next";
import { Hero }         from "@/components/academy/Hero";
import { Curriculum }   from "@/components/academy/Curriculum";
import { Audience }     from "@/components/academy/Audience";
import { HowItWorks }  from "@/components/academy/HowItWorks";
import { Waitlist }     from "@/components/academy/Waitlist";
import { FAQ }          from "@/components/academy/FAQ";

export const metadata: Metadata = {
  title: "Globixs Academy | Train. Coming Soon.",
  description:
    "Globixs Academy trains US graduates in production AI engineering — agents, LLM integration, deployment. Consultation-first admissions, placement-track curriculum. Launching soon. Join the waitlist.",
};

export default function AcademyPage() {
  return (
    <div>
      <Hero />
      <Curriculum />
      <Audience />
      <HowItWorks />
      <Waitlist />
      <FAQ />
    </div>
  );
}

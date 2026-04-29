import type { Metadata } from "next";
import { Hero }        from "@/components/about/Hero";
import { WhatWeDo }    from "@/components/about/WhatWeDo";
import { HowWeWork }   from "@/components/about/HowWeWork";
import { Principles }  from "@/components/about/Principles";
import { WhereWeWork } from "@/components/about/WhereWeWork";
import { ClosingCta }  from "@/components/about/ClosingCta";

export const metadata: Metadata = {
  title: "About | Globixs Technology Solutions",
  description:
    "An AI-native staffing and consulting firm based in Seattle. We help US companies hire IT talent faster and ship AI systems sooner.",
};

export default function AboutPage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <Principles />
      <WhereWeWork />
      <ClosingCta />
    </div>
  );
}

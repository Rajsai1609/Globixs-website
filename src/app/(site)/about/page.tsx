import type { Metadata } from "next";
import { Hero }        from "@/components/about/Hero";
import { WhatWeDo }    from "@/components/about/WhatWeDo";
import { Principles }  from "@/components/about/Principles";
import { WhoWeServe }  from "@/components/about/WhoWeServe";
import { WhereWeWork } from "@/components/about/WhereWeWork";
import { ClosingCta }  from "@/components/about/ClosingCta";

export const metadata: Metadata = {
  // `absolute` so the root layout's "%s | Globixs Technology Solutions"
  // template doesn't append a second brand suffix.
  title: { absolute: "About | Globixs Technology Solutions" },
  description:
    "Globixs Technology Solutions — AI automation, digital marketing and technology consulting. Seattle-based, working nationwide.",
};

export default function AboutPage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Principles />
      <WhoWeServe />
      <WhereWeWork />
      <ClosingCta />
    </div>
  );
}

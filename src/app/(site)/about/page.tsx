import type { Metadata } from "next";
import { PageHero }    from "@/components/sections/page-hero";
import { BOOKING_URL } from "@/lib/booking";
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
      <PageHero
        eyebrow="About Globixs"
        lines={["Built in Seattle.", "Working nationwide."]}
        subhead="An engineering-led team helping businesses run leaner with AI, marketing that converts, and consultants who ship."
        primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
      />
      <WhatWeDo />
      <Principles />
      <WhoWeServe />
      <WhereWeWork />
      <ClosingCta />
    </div>
  );
}

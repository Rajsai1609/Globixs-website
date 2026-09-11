import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { BOOKING_URL } from "@/lib/booking";

export function Hero() {
  return (
    <PageHero
      eyebrow="Seattle-based · Working nationwide"
      lines={["AI Automation.", "Digital Marketing.", "Technology Consulting."]}
      subhead="Voice AI, workflow automation, BI dashboards and growth marketing for businesses that want to run leaner."
      primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
      secondaryCta={{ label: "Explore AI Services", href: "/ai-services" }}
      aside={
        <Image
          src="/images/hero-consulting.jpg"
          alt="Globixs engineers planning an AI automation rollout with a client"
          width={700}
          height={525}
          priority
          className="w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(15,23,42,0.20)]"
        />
      }
    />
  );
}

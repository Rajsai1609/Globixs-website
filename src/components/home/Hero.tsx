import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { BOOKING_URL } from "@/lib/booking";
import { AI_AUTOMATION_LABEL } from "@/lib/site-config";

export function Hero() {
  return (
    <PageHero
      eyebrow="Seattle-based · Working nationwide"
      lines={["AI Automation.", "Digital Marketing.", "Technology Consulting."]}
      subhead="Voice AI, workflow automation, BI dashboards and growth marketing for businesses that want to run leaner."
      primaryCta={{ label: "Book a consultation", href: BOOKING_URL }}
      secondaryCta={{ label: `Explore ${AI_AUTOMATION_LABEL}`, href: "/ai-services" }}
      aside={
        /* Fills the media column: 260px tall full-width under the CTAs on
           mobile, 560px tall from lg up, cover-cropped, 8px radius. `fill`
           + `sizes` so the optimizer serves a width that matches the box. */
        <div className="relative h-[260px] w-full overflow-hidden rounded-lg lg:h-[560px]">
          <Image
            src="/images/hero-consulting.jpg"
            alt="Globixs engineers planning an AI automation rollout with a client"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      }
    />
  );
}

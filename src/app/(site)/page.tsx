import { Hero }          from "@/components/home/Hero";
import { ClientLogos }   from "@/components/home/ClientLogos";
import { ServiceCards }  from "@/components/home/ServiceCards";
import { IndustryGrid }  from "@/components/home/IndustryGrid";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { ValuesSection }  from "@/components/home/ValuesSection";
import { CTABanner }      from "@/components/home/CTABanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientLogos />
      <ServiceCards />
      <IndustryGrid />
      {/* Keep existing trust / values / CTA sections */}
      <WelcomeSection />
      <ValuesSection />
      <CTABanner />
    </div>
  );
}

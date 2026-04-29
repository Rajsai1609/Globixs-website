import type { Metadata } from "next";
import { Hero }       from "@/components/products/Hero";
import { Resto }      from "@/components/products/Resto";
import { Realty }     from "@/components/products/Realty";
import { Health }     from "@/components/products/Health";
import { SalesIQ }    from "@/components/products/SalesIQ";
import { WhyWeBuild } from "@/components/products/WhyWeBuild";
import { ClosingCta } from "@/components/products/ClosingCta";

export const metadata: Metadata = {
  title: "Globixs Projects | Vertical AI Systems We Build In-House",
  description:
    "Production AI systems we ship in restaurants, real estate, healthcare, and sales. Real clients, real technical depth, real proof of how Globixs delivers.",
};

export default function ProductsPage() {
  return (
    <div>
      <Hero />
      <Resto />
      <Realty />
      <Health />
      <SalesIQ />
      <WhyWeBuild />
      <ClosingCta />
    </div>
  );
}

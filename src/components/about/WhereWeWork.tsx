import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export function WhereWeWork() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Where We Work"
            title="Built in Seattle. Working across the US."
            description="Globixs is headquartered in the Seattle metro area, serving hiring teams and operators across the United States — from growth-stage startups to mid-market companies."
          />
        </Reveal>
      </div>
    </section>
  );
}

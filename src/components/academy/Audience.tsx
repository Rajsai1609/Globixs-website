import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type AudienceCard = {
  title: string;
  desc: string;
};

const cards: AudienceCard[] = [
  {
    title: "US-based recent graduates",
    desc: "CS, math, physics, or engineering grads from US universities. STEM majors who want to ship, not write whitepapers.",
  },
  {
    title: "OPT and STEM-OPT candidates",
    desc: "International grads on F-1 visas looking for sponsorship-friendly placements. We screen for H1B-eligible roles from day one.",
  },
  {
    title: "Career-switchers with a technical foundation",
    desc: "Self-taught engineers, bootcamp grads, or adjacent-field professionals (data analysts, QA, IT) ready to commit 3–6 months to becoming production AI engineers.",
  },
  {
    title: "Engineers who want to be placed, not just trained",
    desc: "If you want a credential, go elsewhere. If you want a curriculum that ends with you working on a real client team or a Globixs product, we should talk.",
  },
];

export function Audience() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHO IT'S FOR"
            title="Built for the talent the market is overlooking."
            description="Most bootcamps churn through anyone with a credit card. We don't. Globixs Academy is selective by design — we admit the people we believe we can place, and we structure tuition around that promise."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="premium-card flex h-full flex-col gap-4 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <CheckCircle size={22} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{card.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

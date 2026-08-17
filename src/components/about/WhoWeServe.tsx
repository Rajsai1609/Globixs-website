import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

const groups = [
  {
    title: "Businesses",
    description:
      "Growth-stage startups, mid-market tech companies, and local service businesses that need technical talent or AI-powered growth systems without enterprise overhead.",
  },
  {
    title: "Job seekers",
    description:
      "New grads, experienced professionals, visa holders (F-1 / OPT / STEM OPT / H-1B / GC), and career switchers who want a managed, transparent job search.",
  },
];

export function WhoWeServe() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle eyebrow="WHO WE SERVE" title="Who we serve" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {groups.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 80}>
              <article className="premium-card h-full p-8">
                <h3 className="text-lg font-bold text-heading">{group.title}</h3>
                <p className="mt-3 text-base leading-7 text-foreground">{group.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

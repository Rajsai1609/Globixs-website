import { Briefcase, Users, Bot, Repeat } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type FlywheelCard = {
  Icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" }>;
  title: string;
  desc: string;
};

const cards: FlywheelCard[] = [
  {
    Icon: Briefcase,
    title: "Job marketing builds the bench",
    desc: "Every candidate we market gets screened, coached, and placed by our own recruiters. That gives us a bench of engineers we know first-hand — not résumés we bought from a job board.",
  },
  {
    Icon: Users,
    title: "Staffing builds the expertise",
    desc: "The engineers we place into client teams ship production code at enterprise scale. They come back with patterns, tooling, and hard-won judgment that no training program can simulate.",
  },
  {
    Icon: Bot,
    title: "AI services prove the work",
    desc: "The AI receptionists, automations, and websites we run for businesses are built by those same engineers. Live systems with real customers are our most credible reference.",
  },
  {
    Icon: Repeat,
    title: "The compounding effect",
    desc: "Every candidate we market deepens the bench. Every placement sharpens what we can build. Every system we ship proves what our people deliver. Three service lines, one operating system, getting better every quarter.",
  },
];

export function Flywheel() {
  return (
    <section className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="THE FLYWHEEL"
            title="Three service lines. Each one makes the next one stronger."
            description="Most staffing firms only staff. Most AI agencies only build. We do both — with the same people — so each side compounds the others."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <article className="premium-card flex h-full flex-col gap-4 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <card.Icon size={22} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                  <p className="mt-2 text-base leading-7 text-foreground">{card.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

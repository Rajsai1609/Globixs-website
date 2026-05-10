import { GraduationCap, Users, Package, Repeat } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type FlywheelCard = {
  Icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" }>;
  title: string;
  desc: string;
};

const cards: FlywheelCard[] = [
  {
    Icon: GraduationCap,
    title: "Train builds the bench",
    desc: "Every grad we train through Globixs Academy becomes a candidate for our placement pipeline and our internal AI projects. We don't bid on candidates from job boards — we develop them ourselves.",
  },
  {
    Icon: Users,
    title: "Place builds the expertise",
    desc: "Engineers we place into client teams gain real-world AI engineering experience that no bootcamp can simulate. They ship production code at scale, then bring those patterns back.",
  },
  {
    Icon: Package,
    title: "Build proves the work",
    desc: "PathAI, Resto, Aigent, and SignalFeed are products our engineers built and shipped to paying customers. They're our most credible reference — a working demo of what our talent can do for you.",
  },
  {
    Icon: Repeat,
    title: "The compounding effect",
    desc: "Each placement sharpens our products. Each product becomes proof for the next placement. Each grad we train tightens the loop. Three pillars, one operating system, getting better every quarter.",
  },
];

export function Flywheel() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="THE FLYWHEEL"
            title="Three pillars. Each one makes the next one stronger."
            description="Most staffing firms only staff. Most AI consultancies only consult. We do both — and we built our own products with the same engineers — so each side compounds the others."
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

import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { StepBadge } from "@/components/brochure";

const steps = [
  {
    step: "01",
    title: "Free consult — we find your biggest leak",
    desc: "A 30-minute call to work out where you're losing customers, time, or leads today. No pitch deck, no commitment.",
  },
  {
    step: "02",
    title: "We build and launch in weeks, not quarters",
    desc: "We configure, integrate, and deploy on your stack, then test against real customer traffic before it goes live.",
  },
  {
    step: "03",
    title: "Flat monthly rate, cancel anytime",
    desc: "We run it, monitor it, and keep improving it. No long-term lock-in — stay because it works, not because of a contract.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad dark-band">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            onDark
            eyebrow="HOW IT WORKS"
            title="From first call to live system in weeks."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 80}>
              <article className="flex h-full flex-col rounded-xl border border-white/15 bg-white/5 p-8">
                <StepBadge n={item.step} />
                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-white/70">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

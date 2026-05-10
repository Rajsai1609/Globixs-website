import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Step = {
  num: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "(01)",
    title: "Apply",
    desc: "Tell us your background, your goals, and what you've shipped. A short form — no essays, no GPA, no LeetCode.",
  },
  {
    num: "(02)",
    title: "Consultation call",
    desc: "30 minutes with a Globixs senior engineer. We assess fit, walk you through the curriculum, and answer everything about placement, tuition, and timeline. No sales pressure — most calls end with us telling people what to study before reapplying.",
  },
  {
    num: "(03)",
    title: "Train and get placed",
    desc: "If we admit you, we build a personalized 12-to-16-week plan. Mentored projects, weekly code reviews, mock client interviews. The day you finish, we put you in front of our placement clients.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="Consultation-first admissions."
            description="We talk to every applicant before money changes hands. If we don't think we can place you, we tell you — and we don't take your tuition."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg lg:p-10">
                <p className="font-mono text-sm tracking-[0.1em] text-red-600">{step.num}</p>
                <h3 className="mt-3 text-2xl font-bold text-heading">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

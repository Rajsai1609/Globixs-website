import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "When does Globixs Academy launch?",
    answer:
      "We're admitting our founding cohort in 2026. Specific dates depend on placement-pipeline readiness — we won't run a cohort larger than what we can place. Drop your email above to be notified when applications open.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We disclose tuition during the 1:1 consultation, not before. The reason: pricing depends on cohort, payment plan, and placement track. We offer a placement-success structure for select candidates where most of the cost is deferred until you're earning. We don't quote a sticker price for the same reason a hospital doesn't quote surgery on a billboard — your situation matters.",
  },
  {
    question: "How long is the program?",
    answer:
      "12 to 16 weeks of intensive training, plus an open-ended placement window. Most cohort members are placed with a client or a Globixs product team within 30 days of finishing the curriculum.",
  },
  {
    question: "Do you guarantee placement?",
    answer:
      "We don't guarantee placement — anyone who does is lying. What we DO promise: we won't admit you unless we're confident we can place you, we structure tuition to align with your placement outcome, and our staffing team is the same team that runs Globixs's enterprise placement pipeline. We have skin in the game.",
  },
  {
    question: "I'm on OPT / STEM-OPT — can I apply?",
    answer:
      "Yes. We specifically screen for H1B-friendly placements and have an internal visa-intelligence pipeline (the same one powering PathAI). International grads on F-1 are a core part of our target audience.",
  },
  {
    question: "What if I'm not a recent graduate?",
    answer:
      "If you have a technical foundation — even self-taught — we'll consider you. The bar isn't a degree; it's whether you can ship code we'd put in front of a client. Career-switchers from data, QA, IT, or adjacent technical fields are welcome to apply.",
  },
];

export function FAQ() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="FREQUENTLY ASKED"
            title="What you're probably wondering."
            description=""
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold text-heading">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

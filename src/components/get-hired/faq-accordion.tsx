"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why is this free for me?",
    a: "Companies pay staffing agencies a fee when they hire someone we refer — typically 15–25% of the candidate's first-year salary. That fee is built into their hiring budget. Charging candidates on top of that would be double-dipping, and frankly, it's how scam services operate. We don't.",
  },
  {
    q: "What if you can't place me?",
    a: "Then you walk away having lost nothing. No fees, no contracts, no obligations. We're upfront on the intake call about whether we think we can help — we'd rather tell you 'we're not the right fit' than waste your time.",
  },
  {
    q: "Do you work with H1B transfers?",
    a: "Yes. We've placed candidates on H1B transfers, OPT-to-H1B, STEM OPT extensions, and green-card-portability moves. We work closely with employer-side immigration counsel on every offer that involves visa work.",
  },
  {
    q: "What roles do you actually place?",
    a: "Cloud engineering (AWS/GCP/Azure), data engineering (Snowflake/dbt/Spark), AI/ML engineering, data science, full-stack (React/Next.js/Node/Python), DevOps/SRE, and cybersecurity. We don't place non-technical roles.",
  },
  {
    q: "How long does it take from submission to offer?",
    a: "Typically 4–8 weeks from intake call to signed offer, depending on your level and target companies. Senior roles and confidential searches can take longer. We tell you upfront what's realistic for your situation.",
  },
  {
    q: "Can I stay in my current job while you submit me?",
    a: "Yes — most of our candidates do. Every submission requires your approval first, and we treat all conversations as confidential until you decide otherwise.",
  },
];

export function GetHiredFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-heading transition hover:text-accent"
            aria-expanded={openIdx === idx}
          >
            <span className="pr-4">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-muted transition-transform duration-200 ${
                openIdx === idx ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          {openIdx === idx && (
            <p className="px-6 pb-5 text-sm leading-7 text-slate-600">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

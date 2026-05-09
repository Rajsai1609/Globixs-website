"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

type Tab = {
  id: string;
  label: string;
  text?: string;
  list?: string[];
};

const tabs: Tab[] = [
  {
    id: "why",
    label: "Why Choose Globixs",
    text: "At Globixs, we are committed to first understanding our clients’ businesses — then solving their hardest staffing, automation, and delivery problems with AI agents and senior talent that work together. We don’t sell hours. We ship outcomes you can measure.",
  },
  {
    id: "vision",
    label: "Our Vision",
    text: "To be the most creative, insightful, and agile AI-native talent and services company — building enterprise-grade AI staffing pipelines and AI systems that deliver measurable outcomes at speed and scale.",
  },
  {
    id: "values",
    label: "Our Values",
    list: [
      "Respect and integrity in every interaction",
      "Building strong, long-term client relationships",
      "Authenticity — we say what we mean",
      "Resolving issues on priority, not on convenience",
      "Continuous innovation and honest improvement",
    ],
  },
];

export function WhyChooseUs() {
  const [activeId, setActiveId] = useState<string>("why");
  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <section className="section-pad bg-black/[0.03]">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Our culture and our values"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          {/* Tab bar — scrolls horizontally on mobile */}
          <div className="overflow-x-auto pb-1">
            <div
              className="inline-flex gap-1 rounded-xl border border-border bg-surface p-1"
              role="tablist"
              aria-label="Why choose us"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeId === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 ${
                    activeId === tab.id
                      ? "bg-brand text-white shadow-[0_4px_12px_rgba(30,58,95,0.22)]"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content panel */}
          <div
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="premium-card mt-4 p-8"
          >
            {active.list ? (
              <ul className="space-y-3">
                {active.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-7 text-slate-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                {active.text}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

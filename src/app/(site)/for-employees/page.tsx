import type { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { StickyRegister } from "@/components/for-employees/sticky-register";

export const metadata: Metadata = {
  // `absolute` so the root layout's "%s | Globixs Technology Solutions"
  // template doesn't append a second brand suffix.
  title: { absolute: "Full-Time Job Marketing for Candidates | Globixs" },
  description:
    "25–35 tailored applications every business day by a dedicated recruiter. From sign-up to placement — one managed pipeline. Core tech tracks + unsaturated roles.",
};

/* ── Data ──────────────────────────────────────────────────────────────── */

type Step = { num: string; title: string; desc: string };

const pipelineSteps: Step[] = [
  {
    num: "1",
    title: "You Join Globixs",
    desc: "Onboarding call, signed service agreement, dedicated account setup.",
  },
  {
    num: "2",
    title: "Deep Resume Analysis",
    desc: "AI engine plus a human strategist. A full written report — not just a score.",
  },
  {
    num: "3",
    title: "Master Resume Rebuild",
    desc: "ATS-optimized and keyword-aligned — the base every application is tailored from.",
  },
  {
    num: "4",
    title: "Recommended Role Tracks",
    desc: "3–4 locked target tracks agreed with you. No spray-and-pray.",
  },
];

const sourcingItems = [
  {
    label: "Automated scraper",
    detail: "ATS boards · LinkedIn · Indeed · Glassdoor · company career pages",
  },
  {
    label: "Vendor & client network",
    detail: "Roles that never reach public job boards",
  },
];

const weDo = [
  "Deep resume analysis",
  "Master resume rebuild",
  "Role track strategy",
  "Daily sourcing — scraper + vendor network",
  "Role shortlisting",
  "Per-job resume tailoring",
  "Application submission",
  "Follow-up tracking",
  "Weekly reporting",
  "Interview & offer support",
];

const youDo = [
  "Show up to your interviews",
  "Stay reachable on email",
  "Give us feedback on roles",
];

const commitments = [
  { value: "25–35", label: "tailored applications every business day" },
  { value: "1", label: "dedicated recruiter assigned to you" },
  { value: "Weekly", label: "written report on every application" },
  { value: "Daily", label: "fresh listings — applied while still new" },
  { value: "Monthly", label: "no lock-in, cancel anytime" },
];

const audience = [
  "New grads & recent MS",
  "Experienced professionals",
  "Visa holders (F-1 / OPT / STEM OPT / H-1B / GC)",
  "Career switchers into tech",
];

const faqs = [
  {
    q: "Isn't this just an AI auto-apply bot?",
    a: "No. A named human recruiter is assigned to you and reviews and submits every application personally.",
  },
  {
    q: "Will my resume be spammed everywhere?",
    a: "No. Only roles matching your locked tracks, with a resume tailored to each job description.",
  },
  {
    q: "What if I'm on a visa?",
    a: "We work with F-1 / OPT / STEM OPT, H-1B transfer and GC candidates across all tech domains.",
  },
  {
    q: "Do you attend interviews for me?",
    a: "Never. You attend every interview yourself. We prepare you thoroughly — that is where our role ends.",
  },
  {
    q: "How fast do applications start?",
    a: "Sourcing begins within 3 business days of your master resume rebuild.",
  },
  {
    q: "Do you guarantee a job?",
    a: "No, and no honest service can. Employers make hiring decisions. We guarantee the work, and we show you all of it.",
  },
];

/* Shared CTA pair. Both targets are static pages in public/ (join.html,
   register.html) — plain anchors, not next/link. */
function RegisterButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <a
        href="/join"
        className={
          onDark
            ? "rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-900 shadow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            : "btn-primary"
        }
      >
        Register — Core Tech Tracks
      </a>
      <a
        href="/register"
        className={
          onDark
            ? "rounded-lg border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-900"
            : "btn-secondary"
        }
      >
        Register — Unsaturated Roles
      </a>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function ForEmployeesPage() {
  return (
    <div>
      {/* ══════════════════════ 1 · HERO ══════════════════════ */}
      <section className="hero-mesh py-20 text-white sm:py-28">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              (02) For Candidates · FULL-TIME JOB MARKETING — HOW IT WORKS
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              From sign-up to placement. One managed pipeline.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              All tech domains, all experience levels — AI/ML, Data, Cybersecurity, Cloud and
              Software roles, across every industry hiring for them. For new grads, experienced
              professionals, visa holders and career switchers.
            </p>
            <RegisterButtons onDark />
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 2 · SIX-STEP PIPELINE ══════════════════════ */}
      <section id="pipeline" className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionTitle
              eyebrow="THE PIPELINE"
              title="Six steps, start to finish."
              description="Every candidate runs the same managed process — built around a dedicated recruiter, not a job board."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Steps 1–4 */}
            {pipelineSteps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 70}>
                <article className="premium-card flex h-full gap-5 p-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-heading">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{step.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Step 5 — light red-tinted panel */}
            <Reveal delay={280}>
              <article className="flex h-full gap-5 rounded-2xl border border-red-100 bg-red-50 p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white">
                  5
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-heading">Daily Role Sourcing</h3>
                  <ul className="mt-4 space-y-3">
                    {sourcingItems.map((item) => (
                      <li key={item.label}>
                        <p className="text-sm font-semibold text-heading">{item.label}</p>
                        <p className="mt-0.5 text-sm leading-6 text-slate-600">{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 inline-block rounded-lg border border-dashed border-red-300 px-4 py-2 text-sm text-slate-700">
                    <span className="font-semibold text-heading">Qualified daily pool</span> — Every
                    role mapped to your tracks
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Step 6 — dark slate panel */}
            <Reveal delay={350}>
              <article className="flex h-full gap-5 rounded-2xl bg-slate-800 p-8 text-white">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white">
                  6
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    HUMAN IN THE LOOP — NOT AUTOMATION
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">Your Recruiter Applies</h3>
                  <p className="mt-4 text-4xl font-bold text-red-500 sm:text-5xl">25–35</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    tailored applications for you, every business day
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Hand-picked, resume-matched roles. A resume tailored for every job description.
                    You focus on interviews — we handle everything before that.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Slim outcome strip */}
          <Reveal delay={420}>
            <div className="mt-8 rounded-2xl border border-border bg-surface px-8 py-6 text-center">
              <p className="text-lg font-bold text-heading">
                Interviews → Offers → Placement
              </p>
              <p className="mt-2 text-sm text-muted">
                Dedicated recruiter per candidate · Tailored resume per application · Full-time
                roles only · All tech domains
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 3 · TWO TRACKS ══════════════════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle eyebrow="CHOOSE YOUR TRACK" title="Two ways in. Same managed pipeline." />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="premium-card flex h-full flex-col p-8">
                <h3 className="text-xl font-bold text-heading">Core Tech Tracks</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  AI/ML · Data · Cloud/DevOps · Cybersecurity · Software · Product. Compete in the
                  biggest markets with a full team behind you.
                </p>
                <div className="mt-6">
                  <a href="/join" className="btn-primary">
                    Register — Core Tech Tracks
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <article className="premium-card flex h-full flex-col p-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-heading">Unsaturated Roles Track</h3>
                  <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                    New
                  </span>
                </div>
                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  Networks · Datacenters · IT Support · Embedded · Robotics. High-demand,
                  low-competition roles with faster interviews and faster offers.
                </p>
                <div className="mt-6">
                  <a href="/register" className="btn-primary">
                    Register — Unsaturated Roles
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 4 · WHAT WE DO / WHAT YOU DO ══════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-red-100 bg-red-50 p-8">
                <h3 className="text-xl font-bold text-heading">What we do</h3>
                <ul className="mt-5 space-y-3">
                  {weDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 bg-red-600"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-7 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="premium-card h-full bg-white p-8">
                <h3 className="text-xl font-bold text-heading">What you do</h3>
                <ul className="mt-5 space-y-3">
                  {youDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 bg-red-600"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-7 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════ 5 · OUR COMMITMENT ══════════════════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle eyebrow="OUR COMMITMENT TO YOU" title="What you get, every week." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {commitments.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 60}>
                <div className="enterprise-panel h-full p-6 text-center">
                  <p className="text-3xl font-bold text-red-600">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ 6 · WHO THIS IS FOR ══════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              WHO THIS IS FOR
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-heading"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 7 · TRANSPARENCY BAND ══════════════════════ */}
      <section className="bg-slate-800 py-16 text-white md:py-20">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-bold sm:text-3xl">Full transparency, every week.</p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              You receive a weekly report showing every role we applied to, the tailored resume
              used, and the current status of each application. You can verify our work — that is
              the point.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 8 · PRICING ══════════════════════ */}
      <section className="section-pad">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-red-600 bg-white p-8 text-center lg:p-10">
              <p className="text-4xl font-bold text-red-600 sm:text-5xl">
                $349 <span className="text-xl font-semibold">/ per month</span>
              </p>
              <p className="mt-4 text-base font-bold text-heading">
                Month-to-month. Cancel anytime with 5 business days&apos; notice.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A placement fee of 10–12% of first-year base salary applies only if you accept an
                offer we sourced — payable in up to four monthly installments after you start.
                Everything is set out in a written service agreement before you pay anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 9 · FAQ ══════════════════════ */}
      <section className="section-pad bg-black/[0.03]">
        <div className="container-shell">
          <Reveal>
            <SectionTitle eyebrow="FAQ" title="Common questions" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 60}>
                <article className="premium-card h-full bg-white p-6">
                  <h3 className="text-base font-bold text-heading">{faq.q}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{faq.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ 10 · FINAL CTA ══════════════════════ */}
      <section id="register-cta" className="hero-mesh py-16 text-white md:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start? Register your interest.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our team will contact you within 24 hours to book your free 20-minute consultation.
            </p>
            <RegisterButtons onDark />
            <p className="mt-8 text-sm text-slate-300">
              Connect@globixs.com · +1 (206) 552-8424 · Book directly:{" "}
              <a
                href="https://tinyurl.com/2sfxn9w3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-white"
              >
                tinyurl.com/2sfxn9w3
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════ 11 · LEGAL ══════════════════════ */}
      <section className="pb-12">
        <div className="container-shell">
          <p className="mx-auto max-w-4xl text-xs leading-6 text-gray-500">
            Globixs Technology Solutions provides job application and marketing services. We do not
            guarantee employment, interviews, offers or any particular salary; hiring decisions are
            made solely by employers. All candidates attend their own interviews and assessments.
            All resume content is based solely on information provided by the candidate. Full terms
            are set out in the written service agreement provided before any payment is made.
          </p>
        </div>
      </section>

      {/* ══════════════════════ 12 · STICKY REGISTER ══════════════════════ */}
      <StickyRegister />
    </div>
  );
}

import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Globixs Technology Solutions' mission, values, and delivery approach.",
};

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-shell space-y-14">
        <Reveal>
          <SectionTitle
            eyebrow="About Us"
            title="Technology solutions built around outcomes"
            description="Globixs delivers three core lines of business: IT staffing and consulting, vertical product development, and academy-driven talent acceleration."
          />
        </Reveal>

        <section className="grid gap-8 lg:grid-cols-3">
          <Reveal className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="mt-3 text-slate-600">
              Enable organizations and professionals to grow faster through practical technology solutions and execution-first partnerships.
            </p>
          </Reveal>
          <Reveal delay={90} className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="mt-3 text-slate-600">
              Build a globally trusted platform where staffing, product innovation, and workforce development work as one ecosystem.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Values</h3>
            <p className="mt-3 text-slate-600">
              Integrity, ownership, clear communication, continuous improvement, and long-term client success.
            </p>
          </Reveal>
        </section>

        <Reveal className="rounded-xl border border-slate-200 bg-white p-8">
          <h3 className="text-2xl font-semibold">Delivery Model</h3>
          <p className="mt-4 text-slate-600">
            We operate with a three-track delivery model: enterprise staffing and consulting for immediate capability needs, product development for domain-specific automation solutions, and academy programs that prepare job-ready talent through real-world product work.
          </p>
        </Reveal>

        <Reveal delay={80} className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8">
          <h3 className="text-2xl font-semibold">Leadership Team (Placeholder)</h3>
          <p className="mt-4 text-slate-600">
            Add leadership bios and photos here as your content library evolves.
          </p>
        </Reveal>
      </div>
    </div>
  );
}


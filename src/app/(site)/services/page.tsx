import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { getServices } from "@/lib/data";
import { getStaffingCardVisual } from "@/lib/home-visuals";

export const metadata: Metadata = {
  title: "IT Staffing",
  description: "Staff augmentation, IT consulting, managed services, data analytics, and release engineering.",
};
export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="section-pad">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionTitle
            eyebrow="IT Staffing"
            title="Trusted staffing and consulting for enterprise technology teams"
            description="We help organizations scale delivery with flexible IT staffing models and outcome-focused consulting support."
          />
        </Reveal>
        <Reveal className="enterprise-panel p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-slate-900">48h</p>
              <p className="mt-1 text-sm text-slate-600">Typical shortlist turnaround</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">Flexible</p>
              <p className="mt-1 text-sm text-slate-600">Contract, C2H, and managed teams</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">End-to-End</p>
              <p className="mt-1 text-sm text-slate-600">Sourcing, onboarding, and delivery support</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const visual = getStaffingCardVisual(service.slug);
            return (
              <Reveal key={service.id} delay={index * 70}>
                <article className="premium-card overflow-hidden p-0">
                  <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Capability</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{service.shortDesc}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brandDark"
                    >
                      Learn More →
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={90} className="enterprise-panel p-7">
          <h2 className="text-xl font-semibold text-slate-900">Technologies we commonly support</h2>
          <p className="mt-2 text-sm text-slate-600">
            Cloud and infrastructure, full-stack engineering, quality automation, security, BI/analytics, and application support teams.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>AWS, Azure, and GCP engineering roles</li>
            <li>Frontend, backend, and full-stack developers</li>
            <li>Data analysts, BI developers, and data engineers</li>
            <li>DevOps, release engineering, and QA automation</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}


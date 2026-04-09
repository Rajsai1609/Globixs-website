import Link from "next/link";
import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";
import { getOpenJobs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore current career opportunities.",
};
export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const jobs = await getOpenJobs();

  return (
    <div className="section-pad">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionTitle
            eyebrow="Careers"
            title="Grow with projects that create measurable impact"
            description="Our hiring needs shift throughout the year. Check active roles below."
          />
        </Reveal>

        <Reveal className="rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold">Current Openings</h2>
          {jobs.length === 0 ? (
            <p className="mt-4 text-slate-600">
              We are not hiring actively right now. Please check back for current openings.
            </p>
          ) : (
            <div className="mt-6 grid gap-4">
              {jobs.map((job, index) => (
                <Reveal key={job.id} delay={index * 70}>
                  <article className="rounded-lg border border-slate-200 p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {job.location} • {job.employmentType}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">{job.summary}</p>
                  <Link href={`/careers/${job.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brandDark">
                    View Role →
                  </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}


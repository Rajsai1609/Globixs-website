import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobStatus } from "@prisma/client";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { getJobBySlug } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return { title: "Job" };
  return { title: job.title, description: job.summary };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job || job.status !== JobStatus.OPEN) notFound();
  const requirementItems = job.requirements
    .split("\n")
    .map((item) => item.replace(/^-+\s*/, "").trim())
    .filter(Boolean);

  return (
    <div className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="premium-card p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Open Role</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{job.title}</h1>
          <p className="mt-3 text-sm text-slate-500">
            {job.location} • {job.employmentType}
          </p>
          <p className="mt-6 text-slate-900">{job.summary}</p>

          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-slate-900">Job description</h2>
            <p className="mt-3 leading-7 text-slate-700">{job.description}</p>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-slate-900">Minimum qualifications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {requirementItems.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-xl font-semibold text-slate-900">Preferred qualifications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Client-facing delivery and cross-functional collaboration experience.</li>
              <li>Strong communication and stakeholder management skills.</li>
              <li>Experience owning end-to-end delivery outcomes.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <div className="premium-card p-6">
            <h2 className="text-lg font-semibold text-slate-900">Job Snapshot</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Role</dt>
                <dd className="font-medium text-slate-900">{job.title}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Location</dt>
                <dd className="font-medium text-slate-900">{job.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Employment Type</dt>
                <dd className="font-medium text-slate-900">{job.employmentType}</dd>
              </div>
            </dl>
          </div>

          <div id="apply" className="scroll-mt-24">
            <JobApplicationForm jobId={job.id} />
          </div>
        </section>
      </div>
    </div>
  );
}


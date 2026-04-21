import Link from "next/link";
import { notFound } from "next/navigation";
import { updateJob } from "@/app/admin/actions";
import { JobFormFields } from "@/components/admin/job-form-fields";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminEditJobPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { error } = await searchParams;
  const jobId = Number(id);
  if (!Number.isFinite(jobId)) notFound();

  let job: Awaited<ReturnType<typeof prisma.job.findUnique>> = null;
  let dbUnavailable = false;
  try {
    job = await prisma.job.findUnique({ where: { id: jobId } });
  } catch (err) {
    dbUnavailable = true;
    console.error("Admin edit job DB fetch failed:", err);
  }
  if (!job && !dbUnavailable) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/jobs" className="text-sm font-medium text-brand hover:text-brandDark">
          ← Back to roles
        </Link>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Edit role</h2>
        {job ? (
          <p className="mt-1 text-sm text-slate-600">
            Public URL:{" "}
            <a href={`/careers/${job.slug}`} className="font-medium text-brand hover:underline" target="_blank" rel="noreferrer">
              /careers/{job.slug}
            </a>
          </p>
        ) : null}
      </div>
      {error === "missing" ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Please fill in all required fields.
        </p>
      ) : null}
      {error === "db" || dbUnavailable ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Database is currently unavailable. Editing is temporarily disabled.
        </p>
      ) : null}
      {!job ? null : (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <JobFormFields
            action={updateJob}
            submitLabel="Save changes"
            jobId={job.id}
            defaults={{
              title: job.title,
              slug: job.slug,
              location: job.location,
              employmentType: job.employmentType,
              summary: job.summary,
              description: job.description,
              requirements: job.requirements,
              status: job.status,
            }}
          />
        </div>
      )}
    </div>
  );
}

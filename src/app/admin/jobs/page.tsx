import Link from "next/link";
import { JobStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { updateJobStatus } from "@/app/admin/actions";
import { DeleteJobButton } from "@/components/admin/delete-job-button";

export const dynamic = "force-dynamic";

const statuses: JobStatus[] = ["DRAFT", "OPEN", "CLOSED", "ARCHIVED"];

export default async function AdminJobsPage() {
  const jobs = await prisma.job.findMany({
    orderBy: [{ updatedAt: "desc" }],
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Roles</h2>
          <p className="mt-1 text-sm text-slate-600">Create, edit, delete postings. Only OPEN roles show on Careers.</p>
        </div>
        <Link href="/admin/jobs/new" className="btn-primary">
          + New role
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Slug / URL</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Updated</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                    No roles yet.{" "}
                    <Link href="/admin/jobs/new" className="font-semibold text-brand hover:underline">
                      Create one
                    </Link>
                    .
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job.id} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">{job.title}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/careers/${job.slug}`}
                        className="text-brand hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        /{job.slug}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{job.location}</td>
                    <td className="px-4 py-3 text-slate-700">{job.employmentType}</td>
                    <td className="px-4 py-3">
                      <form action={updateJobStatus} className="flex flex-wrap items-center gap-2">
                        <input type="hidden" name="jobId" value={job.id} />
                        <select
                          name="status"
                          defaultValue={job.status}
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <button type="submit" className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold hover:bg-slate-50">
                          Apply
                        </button>
                      </form>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{job.updatedAt.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/admin/jobs/${job.id}/edit`}
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          Edit
                        </Link>
                        <DeleteJobButton jobId={job.id} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

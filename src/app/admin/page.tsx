import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  let jobCount = 0;
  let openJobCount = 0;
  let applicationCount = 0;
  let dbUnavailable = false;

  try {
    [jobCount, openJobCount, applicationCount] = await Promise.all([
      prisma.job.count(),
      prisma.job.count({ where: { status: "OPEN" } }),
      prisma.jobApplication.count(),
    ]);
  } catch (error) {
    dbUnavailable = true;
    console.error("Admin dashboard DB fetch failed:", error);
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
        <p className="mt-1 text-sm text-slate-600">Overview of hiring content and applications.</p>
      </div>
      {dbUnavailable ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Database is currently unavailable. Dashboard metrics are temporarily showing default values.
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total roles</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{jobCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live on Careers</p>
          <p className="mt-2 text-3xl font-bold text-emerald-700">{openJobCount}</p>
          <p className="mt-1 text-xs text-slate-500">OPEN status only</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Applications</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{applicationCount}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href="/admin/jobs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand/30 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-slate-900">Roles</h3>
          <p className="mt-2 text-sm text-slate-600">Full CRUD: create, edit, status, delete job postings.</p>
          <span className="mt-4 inline-block text-sm font-semibold text-brand">Open →</span>
        </Link>
        <Link
          href="/admin/applications"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand/30 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-slate-900">Applications</h3>
          <p className="mt-2 text-sm text-slate-600">
            Compact list: pipeline stage and optional notes—role matches what they applied for.
          </p>
          <span className="mt-4 inline-block text-sm font-semibold text-brand">Open →</span>
        </Link>
      </div>
    </div>
  );
}

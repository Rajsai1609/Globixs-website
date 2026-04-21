import Link from "next/link";
import type { ApplicationStatus } from "@prisma/client";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { updateApplication } from "@/app/admin/actions";
import { getResumeAccessUrl } from "@/lib/storage";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 25;

const PIPELINE_STAGES: ApplicationStatus[] = [
  "NEW",
  "SCREENING",
  "INTERVIEW",
  "OFFER",
  "REJECTED",
];

const stageStyles: Record<ApplicationStatus, string> = {
  NEW: "bg-slate-100 text-slate-800 ring-slate-200",
  SCREENING: "bg-sky-50 text-sky-900 ring-sky-200",
  INTERVIEW: "bg-amber-50 text-amber-950 ring-amber-200",
  OFFER: "bg-emerald-50 text-emerald-950 ring-emerald-200",
  REJECTED: "bg-red-50 text-red-900 ring-red-200",
};

function candidateInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1]?.[0] ?? ""}`.toUpperCase() || "?";
}

function shortAppliedDate(d: Date): string {
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function buildQueryString(
  current: Record<string, string | undefined>,
  updates: Record<string, string | number | undefined | null>,
): string {
  const p = new URLSearchParams();
  const merged = { ...current };
  for (const [k, v] of Object.entries(updates)) {
    if (v === undefined || v === null || v === "") {
      delete merged[k];
    } else {
      merged[k] = String(v);
    }
  }
  for (const [k, v] of Object.entries(merged)) {
    if (v && v !== "all") p.set(k, v);
  }
  const s = p.toString();
  return s ? `?${s}` : "";
}

type Props = {
  searchParams: Promise<{
    q?: string;
    job?: string;
    status?: string;
    page?: string;
    error?: string;
  }>;
};

type JobFilterOption = {
  id: number;
  title: string;
  status: ApplicationStatus | string;
};

type ApplicationWithJob = Prisma.JobApplicationGetPayload<{
  include: { job: true };
}>;

export default async function AdminApplicationsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const q = (sp.q || "").trim();
  const jobFilter = sp.job || "all";
  const statusFilter = sp.status || "all";
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);
  const skip = (page - 1) * PAGE_SIZE;

  const where: Prisma.JobApplicationWhereInput = {};

  if (jobFilter === "unlinked") {
    where.jobId = null;
  } else if (jobFilter !== "all" && Number.isFinite(Number(jobFilter))) {
    where.jobId = Number(jobFilter);
  }

  if (statusFilter !== "all" && PIPELINE_STAGES.includes(statusFilter as ApplicationStatus)) {
    where.status = statusFilter as ApplicationStatus;
  }

  if (q.length > 0) {
    where.OR = [
      { fullName: { contains: q, mode: "insensitive" } },
      { email: { contains: q, mode: "insensitive" } },
      { phone: { contains: q, mode: "insensitive" } },
    ];
  }

  let jobs: JobFilterOption[] = [];
  let applications: ApplicationWithJob[] = [];
  let total = 0;
  let dbUnavailable = false;
  const resumeLinks = new Map<number, string | null>();

  try {
    [jobs, applications, total] = await Promise.all([
      prisma.job.findMany({
        orderBy: [{ status: "asc" }, { title: "asc" }],
        select: { id: true, title: true, status: true },
      }),
      prisma.jobApplication.findMany({
        where,
        include: { job: true },
        orderBy: [{ createdAt: "desc" }],
        skip,
        take: PAGE_SIZE,
      }),
      prisma.jobApplication.count({ where }),
    ]);
  } catch (error) {
    dbUnavailable = true;
    console.error("Admin applications DB fetch failed:", error);
  }

  const queryBase: Record<string, string | undefined> = {};
  if (q) queryBase.q = q;
  if (jobFilter !== "all") queryBase.job = jobFilter;
  if (statusFilter !== "all") queryBase.status = statusFilter;

  if (!dbUnavailable && applications.length > 0) {
    const linkEntries = await Promise.all(
      applications.map(async (app) => [app.id, await getResumeAccessUrl(app.resumeUrl)] as const),
    );
    for (const [id, url] of linkEntries) {
      resumeLinks.set(id, url);
    }
  }

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : skip + 1;
  const showingTo = Math.min(skip + PAGE_SIZE, total);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Applications</h2>
        <p className="text-sm text-slate-500">
          Compact rows: role is fixed to what they applied for—only update pipeline stage. Resume and extra detail on
          demand.
        </p>
      </div>
      {dbUnavailable ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Database is currently unavailable. Application data and updates are temporarily paused.
        </p>
      ) : null}
      {sp.error === "update_failed" ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Could not save the update. Please retry once the database connection is restored.
        </p>
      ) : null}

      <form
        method="get"
        className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:flex-wrap lg:items-end"
      >
        <div className="min-w-[200px] flex-1">
          <label htmlFor="q" className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Search
          </label>
          <input
            id="q"
            name="q"
            type="search"
            placeholder="Name, email, or phone"
            defaultValue={q}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>
        <div className="min-w-[200px]">
          <label htmlFor="job" className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Role
          </label>
          <select
            id="job"
            name="job"
            defaultValue={jobFilter}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option value="all">All roles</option>
            <option value="unlinked">Unlinked</option>
            {jobs.map((j) => (
              <option key={j.id} value={String(j.id)}>
                {j.title} ({j.status})
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-[160px]">
          <label htmlFor="status" className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Stage
          </label>
          <select
            id="status"
            name="status"
            defaultValue={statusFilter}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option value="all">All stages</option>
            {PIPELINE_STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Apply filters
          </button>
          <Link
            href="/admin/applications"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Clear
          </Link>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
        <span>
          {total === 0 ? (
            "No applications match."
          ) : (
            <>
              Showing <span className="font-medium text-slate-900">{showingFrom}</span>–
              <span className="font-medium text-slate-900">{showingTo}</span> of{" "}
              <span className="font-medium text-slate-900">{total}</span>
            </>
          )}
        </span>
        {totalPages > 1 ? (
          <nav className="flex items-center gap-2" aria-label="Pagination">
            <Link
              className={`rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium ${
                page <= 1 ? "pointer-events-none text-slate-300" : "text-slate-700 hover:bg-slate-50"
              }`}
              href={page <= 1 ? "#" : `/admin/applications${buildQueryString(queryBase, { page: page - 1 })}`}
            >
              Previous
            </Link>
            <span className="text-slate-500">
              Page {page} / {totalPages}
            </span>
            <Link
              className={`rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium ${
                page >= totalPages ? "pointer-events-none text-slate-300" : "text-slate-700 hover:bg-slate-50"
              }`}
              href={
                page >= totalPages ? "#" : `/admin/applications${buildQueryString(queryBase, { page: page + 1 })}`
              }
            >
              Next
            </Link>
          </nav>
        ) : null}
      </div>

      {applications.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 py-16 text-center text-sm text-slate-500">
          No applications to display. Adjust filters or open a live job posting.
        </div>
      ) : (
        <div className="space-y-2">
          {applications.map((app) => (
            <article
              key={app.id}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 gap-y-1.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-[10px] font-bold text-white"
                  aria-hidden
                >
                  {candidateInitials(app.fullName)}
                </div>
                <div className="min-w-0 flex-1 basis-[min(100%,14rem)]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-sm font-semibold text-slate-900">{app.fullName}</span>
                    <span
                      className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${stageStyles[app.status]}`}
                    >
                      {app.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      {app.job ? app.job.title : <span className="text-amber-700">Unlinked</span>}
                    </span>
                  </div>
                  <div className="truncate text-xs text-slate-600">
                    <a href={`mailto:${app.email}`} className="hover:underline">
                      {app.email}
                    </a>
                    {app.phone ? (
                      <>
                        {" · "}
                        <a href={`tel:${app.phone.replace(/\s/g, "")}`} className="hover:underline">
                          {app.phone}
                        </a>
                      </>
                    ) : null}
                    <span className="text-slate-400"> · {shortAppliedDate(app.createdAt)}</span>
                    <span className="text-slate-300"> · #{app.id}</span>
                  </div>
                </div>

                {resumeLinks.get(app.id) ? (
                  <a
                    href={resumeLinks.get(app.id) || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs font-semibold text-brand hover:text-brandDark"
                  >
                    Resume
                  </a>
                ) : (
                  <span className="shrink-0 text-xs font-semibold text-slate-400">Resume unavailable</span>
                )}

                <form action={updateApplication} className="flex shrink-0 items-center gap-1.5">
                  <input type="hidden" name="_mode" value="pipeline" />
                  <input type="hidden" name="applicationId" value={app.id} />
                  <select
                    name="status"
                    defaultValue={app.status}
                    aria-label="Pipeline stage"
                    className="rounded-md border border-slate-300 bg-white py-1 pl-2 pr-6 text-xs font-medium text-slate-900"
                  >
                    {PIPELINE_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Set
                  </button>
                </form>
              </div>

              {app.reviewNotes?.trim() ? (
                <p className="mt-1.5 truncate border-t border-slate-100 pt-1.5 text-xs text-slate-500" title={app.reviewNotes.trim()}>
                  <span className="font-medium text-slate-600">Note:</span> {app.reviewNotes.trim()}
                </p>
              ) : null}

              <details className="group mt-1 border-t border-slate-100 pt-1">
                <summary className="cursor-pointer list-none text-xs text-slate-500 marker:content-none hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                  {"Notes & application text…"}
                </summary>
                <div className="mt-2 space-y-3 border-t border-slate-100 pt-2">
                  <form action={updateApplication} className="space-y-1.5">
                    <input type="hidden" name="_mode" value="notes" />
                    <input type="hidden" name="applicationId" value={app.id} />
                    <label className="block text-[10px] font-medium uppercase tracking-wide text-slate-500">
                      Internal notes
                    </label>
                    <textarea
                      name="reviewNotes"
                      rows={2}
                      defaultValue={app.reviewNotes ?? ""}
                      placeholder="Team-only…"
                      className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs"
                    />
                    <button
                      type="submit"
                      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Save notes
                    </button>
                  </form>
                  {app.message?.trim() ? (
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Submitted text</p>
                      <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap rounded-md border border-slate-200 bg-slate-50 p-2 font-mono text-[10px] text-slate-700">
                        {app.message.trim()}
                      </pre>
                    </div>
                  ) : null}
                </div>
              </details>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

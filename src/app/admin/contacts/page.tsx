import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { updateSubmission } from "@/app/admin/actions";
import { getResumeAccessUrl } from "@/lib/storage";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 25;

const TABS = [
  { key: "contact", label: "Contact form" },
  { key: "gethired", label: "Get Hired" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function parseTab(value: string | undefined): TabKey {
  return value === "gethired" ? "gethired" : "contact";
}

function initials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1]?.[0] ?? ""}`.toUpperCase() || "?";
}

function shortDate(d: Date): string {
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
    tab?: string;
    q?: string;
    state?: string;
    page?: string;
    error?: string;
  }>;
};

/** The two tables share every field this page renders; `extra` holds the
 *  Get Hired-only detail so one card component serves both tabs. */
type Row = {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  createdAt: Date;
  handled: boolean;
  notes: string | null;
  message: string | null;
  subtitle: string | null;
  extra: { label: string; value: string }[];
  resumeUrl: string | null;
};

type ContactRow = Prisma.ContactSubmissionGetPayload<object>;
type GetHiredRow = Prisma.GetHiredSubmissionGetPayload<object>;

function fromContact(r: ContactRow): Row {
  return {
    id: r.id,
    fullName: r.fullName,
    email: r.email,
    phone: r.phone,
    createdAt: r.createdAt,
    handled: r.handled,
    notes: r.notes,
    message: r.message,
    subtitle: r.company,
    extra: r.serviceInterest ? [{ label: "Interested in", value: r.serviceInterest }] : [],
    resumeUrl: null,
  };
}

function fromGetHired(r: GetHiredRow): Row {
  return {
    id: r.id,
    fullName: r.fullName,
    email: r.email,
    phone: r.phone,
    createdAt: r.createdAt,
    handled: r.handled,
    notes: r.notes,
    message: r.message,
    subtitle: r.targetRoles,
    extra: [
      { label: "Visa", value: r.visaStatus },
      { label: "Experience", value: r.yearsOfExperience },
      ...(r.linkedinUrl ? [{ label: "LinkedIn", value: r.linkedinUrl }] : []),
    ],
    resumeUrl: r.resumeUrl,
  };
}

export default async function AdminContactsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const tab = parseTab(sp.tab);
  const q = (sp.q || "").trim();
  const stateFilter = sp.state || "all";
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);
  const skip = (page - 1) * PAGE_SIZE;

  const search = q.length > 0;
  const handledFilter =
    stateFilter === "open" ? false : stateFilter === "handled" ? true : undefined;

  const contactWhere: Prisma.ContactSubmissionWhereInput = {
    ...(handledFilter === undefined ? {} : { handled: handledFilter }),
    ...(search
      ? {
          OR: [
            { fullName: { contains: q, mode: "insensitive" } },
            { email: { contains: q, mode: "insensitive" } },
            { phone: { contains: q, mode: "insensitive" } },
            { company: { contains: q, mode: "insensitive" } },
            { message: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const getHiredWhere: Prisma.GetHiredSubmissionWhereInput = {
    ...(handledFilter === undefined ? {} : { handled: handledFilter }),
    ...(search
      ? {
          OR: [
            { fullName: { contains: q, mode: "insensitive" } },
            { email: { contains: q, mode: "insensitive" } },
            { phone: { contains: q, mode: "insensitive" } },
            { targetRoles: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  let rows: Row[] = [];
  let total = 0;
  let contactOpen = 0;
  let getHiredOpen = 0;
  let dbUnavailable = false;
  const resumeLinks = new Map<number, string | null>();

  try {
    [contactOpen, getHiredOpen] = await Promise.all([
      prisma.contactSubmission.count({ where: { handled: false } }),
      prisma.getHiredSubmission.count({ where: { handled: false } }),
    ]);

    if (tab === "contact") {
      const [found, count] = await Promise.all([
        prisma.contactSubmission.findMany({
          where: contactWhere,
          orderBy: [{ createdAt: "desc" }],
          skip,
          take: PAGE_SIZE,
        }),
        prisma.contactSubmission.count({ where: contactWhere }),
      ]);
      rows = found.map(fromContact);
      total = count;
    } else {
      const [found, count] = await Promise.all([
        prisma.getHiredSubmission.findMany({
          where: getHiredWhere,
          orderBy: [{ createdAt: "desc" }],
          skip,
          take: PAGE_SIZE,
        }),
        prisma.getHiredSubmission.count({ where: getHiredWhere }),
      ]);
      rows = found.map(fromGetHired);
      total = count;
    }
  } catch (error) {
    dbUnavailable = true;
    console.error("Admin contacts DB fetch failed:", error);
  }

  if (!dbUnavailable && rows.length > 0) {
    const linkEntries = await Promise.all(
      rows.map(async (r) => [r.id, r.resumeUrl ? await getResumeAccessUrl(r.resumeUrl) : null] as const),
    );
    for (const [id, url] of linkEntries) {
      resumeLinks.set(id, url);
    }
  }

  const queryBase: Record<string, string | undefined> = {};
  if (tab !== "contact") queryBase.tab = tab;
  if (q) queryBase.q = q;
  if (stateFilter !== "all") queryBase.state = stateFilter;

  const returnTo = `/admin/contacts${buildQueryString(queryBase, { page: page > 1 ? page : undefined })}`;

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : skip + 1;
  const showingTo = Math.min(skip + PAGE_SIZE, total);
  const openCount = tab === "contact" ? contactOpen : getHiredOpen;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Contacts</h2>
        <p className="text-sm text-slate-500">
          Enquiries from the contact form and the Get Hired form. Mark each one handled once you have
          replied, and keep any context in the internal notes.
        </p>
      </div>

      {dbUnavailable ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Database is currently unavailable. Submissions and updates are temporarily paused.
        </p>
      ) : null}
      {sp.error === "update_failed" ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Could not save the update. Please retry once the database connection is restored.
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2 border-b border-slate-200" role="tablist">
        {TABS.map((t) => {
          const active = t.key === tab;
          const pending = t.key === "contact" ? contactOpen : getHiredOpen;
          return (
            <Link
              key={t.key}
              role="tab"
              aria-selected={active}
              href={`/admin/contacts${buildQueryString({}, { tab: t.key === "contact" ? undefined : t.key })}`}
              className={`-mb-px inline-flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium ${
                active
                  ? "border-brand text-slate-900"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
              }`}
            >
              {t.label}
              {pending > 0 ? (
                <span className="inline-flex min-w-5 justify-center rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {pending}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <form
        method="get"
        className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:flex-wrap lg:items-end"
      >
        {tab !== "contact" ? <input type="hidden" name="tab" value={tab} /> : null}
        <div className="min-w-[200px] flex-1">
          <label htmlFor="q" className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            Search
          </label>
          <input
            id="q"
            name="q"
            type="search"
            placeholder={tab === "contact" ? "Name, email, phone, company, message" : "Name, email, phone, target roles"}
            defaultValue={q}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>
        <div className="min-w-[160px]">
          <label htmlFor="state" className="block text-xs font-medium uppercase tracking-wide text-slate-500">
            State
          </label>
          <select
            id="state"
            name="state"
            defaultValue={stateFilter}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option value="all">All</option>
            <option value="open">Unhandled</option>
            <option value="handled">Handled</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Apply filters
          </button>
          <Link
            href={`/admin/contacts${buildQueryString({}, { tab: tab === "contact" ? undefined : tab })}`}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Clear
          </Link>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
        <span>
          {total === 0 ? (
            "No submissions match."
          ) : (
            <>
              Showing <span className="font-medium text-slate-900">{showingFrom}</span>–
              <span className="font-medium text-slate-900">{showingTo}</span> of{" "}
              <span className="font-medium text-slate-900">{total}</span>
              {openCount > 0 ? <span className="text-slate-500"> · {openCount} unhandled</span> : null}
            </>
          )}
        </span>
        {totalPages > 1 ? (
          <nav className="flex items-center gap-2" aria-label="Pagination">
            <Link
              className={`rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium ${
                page <= 1 ? "pointer-events-none text-slate-300" : "text-slate-700 hover:bg-slate-50"
              }`}
              href={page <= 1 ? "#" : `/admin/contacts${buildQueryString(queryBase, { page: page - 1 })}`}
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
              href={page >= totalPages ? "#" : `/admin/contacts${buildQueryString(queryBase, { page: page + 1 })}`}
            >
              Next
            </Link>
          </nav>
        ) : null}
      </div>

      {rows.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 py-16 text-center text-sm text-slate-500">
          No submissions to display. Adjust the filters, or wait for the next enquiry.
        </div>
      ) : (
        <div className="space-y-2">
          {rows.map((row) => (
            <article
              key={row.id}
              className={`rounded-lg border bg-white px-2.5 py-2 shadow-sm ${
                row.handled ? "border-slate-200" : "border-l-4 border-l-brand border-slate-200"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 gap-y-1.5">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-[10px] font-bold text-white"
                  aria-hidden
                >
                  {initials(row.fullName)}
                </div>
                <div className="min-w-0 flex-1 basis-[min(100%,14rem)]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-sm font-semibold text-slate-900">{row.fullName}</span>
                    <span
                      className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${
                        row.handled
                          ? "bg-emerald-50 text-emerald-950 ring-emerald-200"
                          : "bg-slate-100 text-slate-800 ring-slate-200"
                      }`}
                    >
                      {row.handled ? "Handled" : "New"}
                    </span>
                    {row.subtitle ? <span className="text-xs text-slate-500">{row.subtitle}</span> : null}
                  </div>
                  <div className="truncate text-xs text-slate-600">
                    <a href={`mailto:${row.email}`} className="hover:underline">
                      {row.email}
                    </a>
                    {row.phone ? (
                      <>
                        {" · "}
                        <a href={`tel:${row.phone.replace(/\s/g, "")}`} className="hover:underline">
                          {row.phone}
                        </a>
                      </>
                    ) : null}
                    <span className="text-slate-400"> · {shortDate(row.createdAt)}</span>
                    <span className="text-slate-300"> · #{row.id}</span>
                  </div>
                </div>

                {row.resumeUrl ? (
                  resumeLinks.get(row.id) ? (
                    <a
                      href={resumeLinks.get(row.id) || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-xs font-semibold text-brand hover:text-brandDark"
                    >
                      Resume
                    </a>
                  ) : (
                    <span className="shrink-0 text-xs font-semibold text-slate-400">Resume unavailable</span>
                  )
                ) : null}

                <form action={updateSubmission} className="flex shrink-0 items-center gap-1.5">
                  <input type="hidden" name="_mode" value="handled" />
                  <input type="hidden" name="table" value={tab} />
                  <input type="hidden" name="submissionId" value={row.id} />
                  <input type="hidden" name="handled" value={row.handled ? "false" : "true"} />
                  <input type="hidden" name="_returnTo" value={returnTo} />
                  <button
                    type="submit"
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                      row.handled
                        ? "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {row.handled ? "Reopen" : "Mark handled"}
                  </button>
                </form>
              </div>

              {row.notes?.trim() ? (
                <p
                  className="mt-1.5 truncate border-t border-slate-100 pt-1.5 text-xs text-slate-500"
                  title={row.notes.trim()}
                >
                  <span className="font-medium text-slate-600">Note:</span> {row.notes.trim()}
                </p>
              ) : null}

              <details className="group mt-1 border-t border-slate-100 pt-1">
                <summary className="cursor-pointer list-none text-xs text-slate-500 marker:content-none hover:text-slate-800 [&::-webkit-details-marker]:hidden">
                  {"Notes & message…"}
                </summary>
                <div className="mt-2 space-y-3 border-t border-slate-100 pt-2">
                  <form action={updateSubmission} className="space-y-1.5">
                    <input type="hidden" name="_mode" value="notes" />
                    <input type="hidden" name="table" value={tab} />
                    <input type="hidden" name="submissionId" value={row.id} />
                    <input type="hidden" name="_returnTo" value={returnTo} />
                    <label className="block text-[10px] font-medium uppercase tracking-wide text-slate-500">
                      Internal notes
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      defaultValue={row.notes ?? ""}
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

                  {row.extra.length > 0 ? (
                    <dl className="grid gap-x-4 gap-y-1 text-[11px] text-slate-600 sm:grid-cols-2">
                      {row.extra.map((e) => (
                        <div key={e.label} className="flex gap-1.5">
                          <dt className="font-medium text-slate-500">{e.label}:</dt>
                          <dd className="min-w-0 truncate">{e.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {row.message?.trim() ? (
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Message</p>
                      <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap rounded-md border border-slate-200 bg-slate-50 p-2 font-mono text-[10px] text-slate-700">
                        {row.message.trim()}
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

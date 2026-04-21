import Link from "next/link";
import { createJob } from "@/app/admin/actions";
import { JobFormFields } from "@/components/admin/job-form-fields";

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminNewJobPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/admin/jobs" className="text-sm font-medium text-brand hover:text-brandDark">
            ← Back to roles
          </Link>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">New role</h2>
          <p className="mt-1 text-sm text-slate-600">Create a posting. Only OPEN roles appear on the public Careers page.</p>
        </div>
      </div>
      {error === "missing" ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Please fill in all required fields.
        </p>
      ) : null}
      {error === "db" ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Database is currently unavailable. Please try again in a moment.
        </p>
      ) : null}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <JobFormFields action={createJob} submitLabel="Create role" />
      </div>
    </div>
  );
}

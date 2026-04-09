"use client";

import { deleteJob } from "@/app/admin/actions";

type Props = { jobId: number };

export function DeleteJobButton({ jobId }: Props) {
  return (
    <form
      action={deleteJob}
      onSubmit={(e) => {
        if (!confirm("Delete this role permanently? Linked applications will keep a record but lose the job link.")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="jobId" value={jobId} />
      <button type="submit" className="rounded-md px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50">
        Delete
      </button>
    </form>
  );
}

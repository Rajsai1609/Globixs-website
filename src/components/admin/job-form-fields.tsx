import type { Job, JobStatus } from "@prisma/client";

const jobStatuses: JobStatus[] = ["DRAFT", "OPEN", "CLOSED", "ARCHIVED"];

type Props = {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  /** When set, included as hidden field for update flows */
  jobId?: number;
  defaults?: Partial<
    Pick<
      Job,
      | "title"
      | "slug"
      | "location"
      | "employmentType"
      | "summary"
      | "description"
      | "requirements"
      | "status"
    >
  >;
};

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15";
const labelClass = "block text-sm font-medium text-slate-700";

export function JobFormFields({ action, submitLabel, jobId, defaults }: Props) {
  return (
    <form action={action} className="max-w-3xl space-y-5">
      {jobId != null ? <input type="hidden" name="jobId" value={jobId} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Title
          <input required name="title" defaultValue={defaults?.title ?? ""} className={inputClass} />
        </label>
        <label className={labelClass}>
          URL slug
          <input
            name="slug"
            placeholder="auto from title if empty"
            defaultValue={defaults?.slug ?? ""}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          Location
          <input required name="location" defaultValue={defaults?.location ?? ""} className={inputClass} />
        </label>
        <label className={labelClass}>
          Employment type
          <input
            required
            name="employmentType"
            placeholder="e.g. Full-time, Contract"
            defaultValue={defaults?.employmentType ?? ""}
            className={inputClass}
          />
        </label>
      </div>
      <label className={labelClass}>
        Status
        <select name="status" defaultValue={defaults?.status ?? "DRAFT"} className={inputClass}>
          {jobStatuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className={labelClass}>
        Summary (listing preview)
        <textarea required name="summary" rows={3} defaultValue={defaults?.summary ?? ""} className={inputClass} />
      </label>
      <label className={labelClass}>
        Job description
        <textarea required name="description" rows={8} defaultValue={defaults?.description ?? ""} className={inputClass} />
      </label>
      <label className={labelClass}>
        Requirements (one per line or bullets)
        <textarea required name="requirements" rows={8} defaultValue={defaults?.requirements ?? ""} className={inputClass} />
      </label>
      <div className="flex flex-wrap gap-3 pt-2">
        <button type="submit" className="btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

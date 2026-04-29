"use client";

import { useState } from "react";

const field =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15";

export function GetHiredForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [pending, setPending] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.set("startedAt", String(startedAt));

    setPending(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/get-hired", { method: "POST", body: fd });
      const json: { error?: string } = await res.json().catch(() => ({}));

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="enterprise-panel space-y-5 p-6 sm:p-8">
      {/* Honeypot — must stay empty */}
      <input type="hidden" name="website" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
          <input required name="fullName" autoComplete="name" className={field} />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Phone
          <input type="tel" name="phone" autoComplete="tel" className={field} />
        </label>

        <label className="block text-sm font-medium text-foreground">
          LinkedIn URL
          <input
            type="url"
            name="linkedinUrl"
            placeholder="https://linkedin.com/in/yourname"
            className={field}
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Current Visa Status <span className="text-red-500" aria-hidden="true">*</span>
          <select required name="visaStatus" defaultValue="" className={field}>
            <option value="" disabled>Select status</option>
            <option>F-1</option>
            <option>OPT</option>
            <option>STEM OPT</option>
            <option>H1B</option>
            <option>Green Card</option>
            <option>US Citizen</option>
            <option>Other</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground">
          Years of Experience <span className="text-red-500" aria-hidden="true">*</span>
          <select required name="yearsOfExperience" defaultValue="" className={field}>
            <option value="" disabled>Select range</option>
            <option>0–2</option>
            <option>3–5</option>
            <option>6–10</option>
            <option>10+</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        Target Role(s) <span className="text-red-500" aria-hidden="true">*</span>
        <input
          required
          name="targetRoles"
          placeholder="e.g., Senior Cloud Engineer, ML Engineer, Data Scientist"
          className={field}
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Resume <span className="text-red-500" aria-hidden="true">*</span>
        <input
          required
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="mt-1 w-full cursor-pointer text-sm text-slate-600 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-brand file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white transition hover:file:bg-brandDark"
        />
        <span className="mt-1 block text-xs text-muted">PDF, DOC, or DOCX — max 10 MB</span>
      </label>

      <label className="block text-sm font-medium text-foreground">
        Tell us briefly what you&apos;re looking for
        <textarea
          name="message"
          rows={4}
          placeholder="Target salary, locations, company stage, anything we should know"
          className={field}
        />
      </label>

      <div className="space-y-3">
        <button disabled={pending} className="btn-primary w-full sm:w-auto">
          {pending ? "Sending..." : "Send to Globixs Recruiters"}
        </button>

        {status === "success" && (
          <p className="text-sm alert-success">
            Your application was received. We&apos;ll respond within 48 business hours.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm alert-error">{errorMsg}</p>
        )}

        <p className="text-xs text-muted">
          We respond within 48 business hours. By submitting, you agree to be contacted by a
          Globixs recruiter. We never share your information with anyone without your written
          permission.
        </p>
      </div>
    </form>
  );
}

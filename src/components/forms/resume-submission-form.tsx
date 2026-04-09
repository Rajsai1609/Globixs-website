"use client";

import { useState } from "react";

export function ResumeSubmissionForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setPending(true);
    setStatus("idle");
    const res = await fetch("/api/resume-submissions", { method: "POST", body: formData });
    setPending(false);
    if (res.ok) {
      form.reset();
      setStatus("success");
      return;
    }
    setStatus("error");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <input type="hidden" name="website" />
      <h3 className="text-xl font-semibold text-slate-900">Submit Your Resume</h3>
      <p className="text-sm text-slate-600">
        Even when there are no active roles, share your profile for future opportunities.
      </p>
      <label className="block text-sm font-medium text-slate-700">
        Full Name
        <input required name="fullName" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Email
        <input required type="email" name="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Phone
        <input name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Resume
        <input required type="file" name="resume" accept=".pdf,.doc,.docx" className="mt-1 block w-full text-sm" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Note (Optional)
        <textarea name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <button disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? "Submitting..." : "Submit Resume"}
      </button>
      {status === "success" ? <p className="text-sm alert-success">Resume submitted successfully.</p> : null}
      {status === "error" ? <p className="text-sm alert-error">Submission failed. Please try again.</p> : null}
    </form>
  );
}


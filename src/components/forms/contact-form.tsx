"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const employeeCount = String(formData.get("employeeCount") || "");
    const startedAt = Date.now();

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: "",
      serviceInterest: String(formData.get("serviceInterest") || ""),
      message: `${String(formData.get("message") || "")}\n\nTeam size: ${employeeCount || "-"}`,
      website: String(formData.get("website") || ""),
      startedAt,
    };

    setPending(true);
    setStatus("idle");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setPending(false);

    if (res.ok) {
      form.reset();
      setStatus("success");
      return;
    }
    setStatus("error");
  }

  return (
    <form onSubmit={onSubmit} className="enterprise-panel space-y-4 p-6 sm:p-8">
      <input type="hidden" name="website" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Book Free Consultation</p>
        <h2 className="mt-2 text-2xl font-semibold text-heading">Tell us what you want to automate</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-foreground">
          Full Name
          <input required name="fullName" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15" />
        </label>
        <label className="text-sm font-medium text-foreground">
          Email Address
          <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15" />
        </label>
        <label className="text-sm font-medium text-foreground">
          Company Name
          <input name="company" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15" />
        </label>
        <label className="text-sm font-medium text-foreground">
          Number of employees
          <input name="employeeCount" placeholder="e.g. 25" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15" />
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        What do you want to automate?
        <select name="serviceInterest" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15">
          <option value="">Select an area</option>
          <option>Hiring / Staffing</option>
          <option>Restaurant Operations</option>
          <option>Real Estate</option>
          <option>Healthcare</option>
          <option>Sales</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-foreground">
        Message / Additional details
        <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15" />
      </label>

      <button disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? "Sending..." : "Book Free Consultation"}
      </button>
      {status === "success" ? <p className="text-sm alert-success">Thank you. We will reach out shortly.</p> : null}
      {status === "error" ? <p className="text-sm alert-error">Something went wrong. Please try again.</p> : null}
    </form>
  );
}

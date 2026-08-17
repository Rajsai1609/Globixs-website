"use client";

import { useState } from "react";

const field =
  "mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/15";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const companySize = String(fd.get("companySize") ?? "");

    const payload = {
      fullName:       String(fd.get("fullName") ?? ""),
      company:        String(fd.get("company") ?? ""),
      email:          String(fd.get("email") ?? ""),
      phone:          String(fd.get("phone") ?? ""),
      serviceInterest: String(fd.get("serviceInterest") ?? ""),
      message: `${String(fd.get("message") ?? "")}\n\nCompany size: ${companySize || "-"}`,
      website:        String(fd.get("website") ?? ""),
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
    <form onSubmit={onSubmit} className="enterprise-panel space-y-5 p-6 sm:p-8">
      {/* Honeypot */}
      <input type="hidden" name="website" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Book a Consultation
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-heading">Tell us how we can help.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Full Name <span className="text-brand" aria-hidden="true">*</span>
          <input
            required
            name="fullName"
            autoComplete="name"
            className={field}
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email Address <span className="text-brand" aria-hidden="true">*</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={field}
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Company Name
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Phone
          <input type="tel" name="phone" autoComplete="tel" className={field} />
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        What can we help with? <span className="text-brand" aria-hidden="true">*</span>
        <select required name="serviceInterest" defaultValue="" className={field}>
          <option value="" disabled>Select an option</option>
          <option>Hire IT talent (recruiting / staffing)</option>
          <option>AI consulting / automation project</option>
          <option>Both — hiring and an AI project</option>
          <option>I&apos;m a candidate looking for a job</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-foreground">
        Tell us a bit more about your needs <span className="text-brand" aria-hidden="true">*</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="e.g., 'Need 3 senior cloud engineers in 30 days' or 'Want to automate our customer support workflow'"
          className={field}
        />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Company size
        <select name="companySize" defaultValue="" className={field}>
          <option value="">Select size (optional)</option>
          <option>1–10 employees</option>
          <option>11–50 employees</option>
          <option>51–200 employees</option>
          <option>201–1,000 employees</option>
          <option>1,000+ employees</option>
        </select>
      </label>

      <div className="space-y-3">
        <button disabled={pending} className="btn-primary w-full sm:w-auto">
          {pending ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-sm alert-success">
            Thank you. We&apos;ll respond within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm alert-error">Something went wrong. Please try again.</p>
        )}
        <p className="text-xs text-muted">
          We respond within one business day. By submitting, you agree to be contacted by Globixs
          about your inquiry. We never share your information without permission.
        </p>
      </div>
    </form>
  );
}

"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiUploadCloud } from "react-icons/fi";

type Props = { jobId: number };

export function JobApplicationForm({ jobId }: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Client-side file validation — mirrors server limits so errors surface instantly
    const fileInput = form.elements.namedItem("resume") as HTMLInputElement;
    const resumeFile = fileInput?.files?.[0];
    if (resumeFile) {
      const MAX_MB = 10;
      if (resumeFile.size > MAX_MB * 1024 * 1024) {
        const actual = (resumeFile.size / (1024 * 1024)).toFixed(1);
        setErrorMessage(`File is ${actual} MB. Maximum allowed is ${MAX_MB} MB.`);
        setStatus("error");
        return;
      }
      const ext = resumeFile.name.split(".").pop()?.toLowerCase() ?? "";
      if (!["pdf", "doc", "docx"].includes(ext)) {
        setErrorMessage("Only PDF, DOC, and DOCX files are accepted.");
        setStatus("error");
        return;
      }
    }

    const formData = new FormData(form);
    setPending(true);
    setStatus("idle");
    setErrorMessage("");
    const res = await fetch("/api/job-applications", { method: "POST", body: formData });
    setPending(false);
    if (res.ok) {
      form.reset();
      setResumeName("");
      setStatus("success");
      return;
    }
    const payload = await res.json().catch(() => ({ error: "Submission failed. Please try again." }));
    setErrorMessage(payload.error || "Submission failed. Please try again.");
    setStatus("error");
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      {status === "success" ? (
        <div
          className="space-y-4 text-center sm:text-left"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:mx-0">
            <FiCheckCircle className="h-8 w-8" aria-hidden />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Application submitted</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Thank you for applying. We have received your information and resume. If your profile is a strong match,
              a member of our team will contact you—typically within a few business days.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Please check your email (including spam) for any follow-up or scheduling messages.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/careers" className="btn-secondary inline-flex justify-center text-center sm:justify-center">
              View all openings
            </Link>
            <Link href="/contact" className="text-center text-sm font-semibold text-slate-600 hover:text-brand sm:text-left">
              Need to correct something? Contact us
            </Link>
          </div>
        </div>
      ) : !showForm ? (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">Apply for this role</h3>
          <p className="text-sm text-slate-600">
            Submit a streamlined application. Standard completion time is under 5 minutes.
          </p>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="btn-primary inline-flex items-center gap-2"
          >
            Apply Now
            <FiArrowRight aria-hidden />
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <input type="hidden" name="jobId" value={jobId} />
          <input type="hidden" name="website" />
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Application Form</h3>
            <p className="mt-1 text-sm text-slate-600">
              Provide the required details below. Our recruiting team typically reviews applications within 2–3 business days.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">First Name</span>
              <input required minLength={2} name="firstName" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Last Name</span>
              <input required minLength={2} name="lastName" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Email</span>
              <input required type="email" name="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Phone</span>
              <input required name="phone" pattern="^[0-9+()\\-\\s]{7,20}$" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Current Location</span>
              <input required name="currentLocation" placeholder="City, State" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">LinkedIn URL</span>
              <input
                required
                type="text"
                inputMode="url"
                name="linkedinUrl"
                placeholder="linkedin.com/in/your-profile"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Work Authorization</span>
              <select required name="workAuthorization" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
                <option value="">Select one</option>
                <option value="Citizen">Citizen</option>
                <option value="Permanent Resident">Permanent Resident</option>
                <option value="Visa">Visa</option>
                <option value="Need Sponsorship">Need Sponsorship</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              <span className="mb-1 inline-flex items-center gap-2">Availability</span>
              <input required name="availability" placeholder="e.g. Immediate / 2 weeks" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-1 inline-flex items-center gap-2">Core Skills (Optional)</span>
            <input name="coreSkills" placeholder="React, Node.js, AWS, Terraform..." className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">Resume</p>
            <input
              ref={fileInputRef}
              required
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setResumeName(file?.name || "");
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:border-brand hover:bg-brandSoft/40"
            >
              <FiUploadCloud className="text-brand" aria-hidden />
              {resumeName ? "Change Resume" : "Upload Resume"}
            </button>
            <p className="text-xs text-slate-500">
              {resumeName ? `Selected: ${resumeName}` : "Accepted formats: PDF, DOC, DOCX (max 10 MB)."}
            </p>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            <span className="mb-1 inline-flex items-center gap-2">Additional Notes (Optional)</span>
            <textarea name="message" rows={4} maxLength={2000} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>

          <button disabled={pending} className="btn-primary w-full sm:w-auto">
            {pending ? "Submitting..." : "Submit Application"}
          </button>
          {status === "error" ? (
            <p className="text-sm alert-error" role="alert">
              {errorMessage || "Submission failed. Please try again."}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}

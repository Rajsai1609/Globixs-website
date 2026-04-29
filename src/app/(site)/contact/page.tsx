import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Globixs Technology Solutions",
  description:
    "Get in touch with Globixs. Free 30-minute consultation for IT staffing, AI consulting, or both. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

        {/* ── Left column ── */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Get In Touch
          </p>
          <h1 className="mt-3 text-4xl font-bold text-heading sm:text-5xl">Let&apos;s talk.</h1>
          <p className="mt-5 text-lg leading-7 text-slate-600">
            Whether you&apos;re hiring IT talent, scoping an AI project, or just exploring what
            Globixs can do — we&apos;ll respond within one business day. Free 30-minute discovery
            call. No pitch deck, no commitment.
          </p>

          <div className="enterprise-panel mt-8 p-6">
            <h2 className="text-base font-semibold text-heading">Contact Information</h2>
            <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{company.address}</p>
            <p className="mt-2 text-sm text-slate-600">{company.phone}</p>
            <p className="mt-2 text-sm text-slate-600">{company.hours}</p>
            <p className="mt-2 text-sm text-slate-600">{company.email}</p>
            <p className="mt-3 text-xs text-slate-400">{company.locationTagline}</p>
          </div>
        </Reveal>

        {/* ── Right column ── */}
        <Reveal delay={80}>
          <ContactForm />

          {/* Candidate redirect */}
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm text-muted">
              Looking for a job?{" "}
              <Link href="/get-hired" className="font-semibold text-accent hover:underline">
                Visit our For Candidates page
              </Link>{" "}
              for our recruiter intake form, FAQ, and process.
            </p>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

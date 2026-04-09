import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Globixs for IT staffing, product development, and academy program inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Talk to the Globixs team</h1>
          <p className="mt-4 text-slate-600">
            Reach out for IT staffing, product development partnerships, or Globixs Academy enrollment guidance.
          </p>
          <div className="enterprise-panel mt-8 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Contact Information</h2>
            <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{company.address}</p>
            <p className="mt-2 text-sm text-slate-600">{company.phone}</p>
            <p className="mt-2 text-sm text-slate-600">{company.hours}</p>
            <p className="mt-2 text-sm text-slate-600">{company.email}</p>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
            Embedded map placeholder
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}


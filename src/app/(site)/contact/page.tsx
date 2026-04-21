import { Metadata } from "next";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Globixs Technology Solutions. AI-powered IT staffing and consultancy services in Seattle, WA.",
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Get Started</p>
          <h1 className="mt-3 text-4xl font-bold text-heading sm:text-5xl">Ready to Automate Your Business?</h1>
          <p className="mt-4 text-slate-600">
            Let&apos;s talk about what AI can do for you. Free 30-minute consultation. No commitment.
          </p>
          <div className="enterprise-panel mt-8 p-6">
            <h2 className="text-lg font-semibold text-heading">Contact Information</h2>
            <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{company.address}</p>
            <p className="mt-2 text-sm text-slate-600">{company.phone}</p>
            <p className="mt-2 text-sm text-slate-600">{company.hours}</p>
            <p className="mt-2 text-sm text-slate-600">{company.email}</p>
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
            Live demo: <a className="font-medium text-accent underline-offset-2 hover:text-brandDark hover:underline" href="https://www.mctpathai.com/" target="_blank">www.mctpathai.com</a><br />
            LinkedIn: <a className="font-medium text-accent underline-offset-2 hover:text-brandDark hover:underline" href="https://www.linkedin.com/company/mctpathai" target="_blank">linkedin.com/company/mctpathai</a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}

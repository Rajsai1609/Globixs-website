import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { company } from "@/lib/site-config";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export const metadata: Metadata = {
  title: "Contact | Globixs Technology Solutions",
  description:
    "Get in touch with Globixs. Free 30-minute consultation for IT staffing, AI consulting, or both. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <div>
      {/* No CTA row: the form is directly below. */}
      <PageHero
        eyebrow="Contact"
        lines={["Let's talk."]}
        subhead="Whether you're hiring, scoping an AI project, or just exploring — we reply within one business day."
      />

    <div className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

        {/* ── Left column ── */}
        <Reveal>
          <div className="enterprise-panel p-6">
            <h2 className="text-base font-semibold text-heading">Contact Information</h2>
            <p className="mt-3 whitespace-pre-line text-sm text-foreground">{company.address}</p>
            <p className="mt-2 text-sm text-foreground">{company.phone}</p>
            <p className="mt-2 text-sm text-foreground">{company.email}</p>
            <p className="mt-2 text-sm text-foreground">
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-brand"
              >
                <LinkedInIcon width={16} height={16} />
                {company.linkedinHandle}
              </a>
            </p>
            <p className="mt-3 text-xs text-muted">{company.locationTagline}</p>
          </div>
        </Reveal>

        {/* ── Right column ── */}
        <Reveal delay={80}>
          <ContactForm />

          {/* Candidate redirect */}
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm text-muted">
              Looking for a job?{" "}
              <Link href="/technology-consulting#job-marketing" className="font-semibold text-accent hover:underline">
                See our Job Marketing service
              </Link>{" "}
              for our recruiter intake form, FAQ, and process.
            </p>
          </div>
        </Reveal>

      </div>
    </div>
    </div>
  );
}

import Link from "next/link";
import { company } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{company.name}</h3>
          <p className="mt-3 text-sm text-slate-300">
            Globixs is a Pacific Northwest–based AI staffing and consulting firm. We help companies hire IT talent faster and ship AI systems sooner — through senior consultants and pre-vetted engineers working alongside production-grade AI agents.
          </p>
          <p className="mt-2 text-xs text-slate-400">{company.locationTagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="transition hover:text-white" href="/">Home</Link></li>
            <li><Link className="transition hover:text-white" href="/services">For Employers</Link></li>
            <li><Link className="transition hover:text-white" href="/get-hired">For Candidates</Link></li>
            <li><Link className="transition hover:text-white" href="/products">AI Products</Link></li>
            <li><Link className="transition hover:text-white" href="/about">About</Link></li>
            <li><Link className="transition hover:text-white" href="/careers">Careers</Link></li>
            <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Contact
          </h4>
          <p className="mt-3 whitespace-pre-line text-sm">{company.address}</p>
          <p className="mt-2 text-sm">{company.phone}</p>
          <p className="mt-2 text-sm">{company.email}</p>
          <a
            href="https://www.linkedin.com/company/globixs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="mt-2 inline-flex items-center gap-1.5 text-sm transition hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <div className="container-shell flex text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

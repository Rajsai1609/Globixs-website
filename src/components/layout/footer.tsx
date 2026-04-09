import Link from "next/link";
import { company } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{company.name}</h3>
          <p className="mt-3 text-sm text-slate-300">
            IT staffing, AI-powered product development, and academy-driven talent acceleration from Bothell, WA.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="transition hover:text-white" href="/services">IT Staffing</Link></li>
            <li><Link className="transition hover:text-white" href="/products">Products</Link></li>
            <li><Link className="transition hover:text-white" href="/academy">Academy</Link></li>
            <li><Link className="transition hover:text-white" href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Contact
          </h4>
          <p className="mt-3 whitespace-pre-line text-sm">{company.address}</p>
          <p className="mt-2 text-sm">{company.phone}</p>
          <p className="mt-2 text-sm">{company.hours}</p>
          <p className="mt-2 text-sm">{company.email}</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4">
        <div className="container-shell flex flex-wrap justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


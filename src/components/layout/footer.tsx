import Link from "next/link";
import { company, navLinks, legalLinks } from "@/lib/site-config";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export function Footer() {
  return (
    <footer className="dark-band">
      <div className="container-shell py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/globixs-logo.svg"
              alt="Globixs Technology Solutions"
              width={1860}
              height={498}
              className="h-auto w-40 md:w-[180px]"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              AI automation, digital marketing and technology consulting. Seattle-based, working
              nationwide.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>{company.phone}</p>
              <p>
                <a href={`mailto:${company.email}`} className="transition hover:text-brand">
                  {company.email}
                </a>
              </p>
              <p className="text-xs text-white/60">{company.address}</p>
            </div>
            <p className="mt-3 text-sm">
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-brand"
              >
                <LinkedInIcon width={18} height={18} />
                Follow us on LinkedIn
              </a>
            </p>
          </div>

          {/* Column 2 — Navigate (mirrors the header) */}
          <nav aria-label="Footer navigation">
            <h4 className="eyebrow-on-dark mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 transition hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Legal */}
          <nav aria-label="Legal">
            <h4 className="eyebrow-on-dark mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 transition hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Globixs Technology Solutions. All rights reserved.</p>
          <p>Seattle, WA · Working nationwide</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-shell py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Globixs Technology Solutions"
              width={130}
              height={30}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI-powered IT staffing and consulting for US enterprises. Senior recruiters do the
              work. AI agents handle the scale.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>{company.phone}</p>
              <p className="whitespace-pre-line text-xs text-gray-500">{company.address}</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/globixs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/globixs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-gray-400 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/globixs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services"     className="transition hover:text-white">IT Staffing</Link></li>
              <li><Link href="/consulting"   className="transition hover:text-white">AI Consulting</Link></li>
              <li><Link href="/ai-products"  className="transition hover:text-white">AI Products</Link></li>
              <li><Link href="/contact"      className="transition hover:text-white">Custom Builds</Link></li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about"    className="transition hover:text-white">About</Link></li>
              <li><Link href="/contact"  className="transition hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact"  className="transition hover:text-white">Contact</Link></li>
              <li><Link href="/careers"  className="transition hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 — Resources */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="transition hover:text-white">Blog</Link></li>
              <li>
                <a
                  href="https://mctpathai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  PathAI ↗
                </a>
              </li>
              <li><Link href="/privacy-policy"        className="transition hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions"  className="transition hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Globixs Technology Solutions. All rights reserved.</p>
          <p>Seattle, WA · Built with care</p>
        </div>
      </div>
    </footer>
  );
}

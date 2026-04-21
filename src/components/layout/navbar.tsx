import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-white/88 shadow-[0_10px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Globixs Technology Solutions"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Get a Free AI Audit
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="container-shell flex gap-4 overflow-x-auto pb-3 text-sm font-medium text-foreground md:hidden"
      >
        {navLinks.map((item) => (
          <Link key={`mobile-${item.href}`} href={item.href} className="whitespace-nowrap hover:text-accent">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

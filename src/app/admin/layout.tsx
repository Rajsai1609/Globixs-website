import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/jobs", label: "Roles" },
  { href: "/admin/applications", label: "Applications" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="hidden w-56 shrink-0 flex-col border-r border-slate-200 bg-slate-950 text-slate-200 md:flex">
        <div className="border-b border-slate-800 px-4 py-4">
          <Link href="/admin" className="block">
            <span className="inline-flex rounded-lg bg-white px-3 py-2 ring-1 ring-white/10">
              <Image
                src="/logo.png"
                alt="Globixs Technology Solutions"
                width={130}
                height={30}
                className="h-8 w-auto"
                priority
              />
            </span>
            <span className="mt-2 block text-xs font-medium text-slate-500">Admin console</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 p-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-slate-800 p-3">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            ← View website
          </Link>
        </div>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-3 py-2 shadow-sm md:hidden">
          <Link href="/admin" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Globixs" width={100} height={24} className="h-6 w-auto" priority />
          </Link>
          <nav className="flex flex-wrap justify-end gap-2 text-xs font-medium">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-brand">
                {item.label}
              </Link>
            ))}
            <Link href="/" className="text-slate-600">
              Site
            </Link>
          </nav>
        </header>
        <header className="hidden items-center gap-4 border-b border-slate-200 bg-white px-8 py-3 shadow-sm md:flex">
          <Link href="/admin" className="shrink-0 opacity-90 hover:opacity-100">
            <Image src="/logo.png" alt="Globixs" width={120} height={28} className="h-7 w-auto" />
          </Link>
          <div className="min-w-0 border-l border-slate-200 pl-4">
            <h1 className="text-sm font-semibold text-slate-900">Console</h1>
            <p className="text-xs text-slate-500">Jobs & applications</p>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-3 md:p-6">{children}</div>
      </div>
    </div>
  );
}

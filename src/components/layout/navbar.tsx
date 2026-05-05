"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { navLinks } from "@/lib/site-config";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-white/88 shadow-[0_10px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between">

        {/* Logo + Seattle tagline */}
        <Link href="/" className="flex flex-col items-start gap-0.5">
          <Image
            src="/logo.png"
            alt="Globixs Technology Solutions"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
          <span className="pl-0.5 text-[11px] font-normal leading-none tracking-wide text-gray-400">
            Seattle, WA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") closeDropdown();
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setDropdownOpen((v) => !v);
                      }
                    }}
                    className="flex items-center gap-1 text-sm font-medium text-foreground transition hover:text-accent"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-border bg-white shadow-lg"
                    >
                      {item.children?.map((child) =>
                        child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeDropdown}
                            className="flex items-center gap-1.5 px-4 py-3 text-sm text-foreground transition hover:bg-surface hover:text-accent"
                          >
                            {child.label}
                            <ExternalLink size={12} aria-hidden="true" className="ml-auto text-muted" />
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            onClick={closeDropdown}
                            className="block px-4 py-3 text-sm text-foreground transition hover:bg-surface hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-primary hidden md:inline-flex">
          Get a Free AI Audit
        </Link>
      </div>

      {/* Mobile nav — scrollable row */}
      <nav
        aria-label="Mobile navigation"
        className="container-shell flex gap-4 overflow-x-auto pb-3 text-sm font-medium text-foreground md:hidden"
      >
        {navLinks.map((item) =>
          item.dropdown ? (
            <div key={item.href} className="flex shrink-0 items-center gap-4">
              <Link href={item.href} className="whitespace-nowrap hover:text-accent">
                {item.label}
              </Link>
              {item.children?.map((child) =>
                child.external ? (
                  <a
                    key={child.href}
                    href={child.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap hover:text-accent"
                  >
                    {child.label} ↗
                  </a>
                ) : (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="whitespace-nowrap hover:text-accent"
                  >
                    {child.label}
                  </Link>
                )
              )}
            </div>
          ) : (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className="whitespace-nowrap hover:text-accent"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

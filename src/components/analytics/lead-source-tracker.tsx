"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONTACT_PATH, LEAD_SOURCE_STORAGE_KEY, normalizeLeadSource } from "@/lib/lead-source";

/**
 * Remembers the last non-contact page a visitor was on, per tab. Next.js
 * client-side navigation does not update `document.referrer`, so the contact
 * form reads this instead to record which page produced the lead. Renders
 * nothing.
 */
export function LeadSourceTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname === CONTACT_PATH) return;
    const source = normalizeLeadSource(`${pathname}${window.location.hash}`);
    if (!source) return;
    try {
      window.sessionStorage.setItem(LEAD_SOURCE_STORAGE_KEY, source);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the
      // form falls back to document.referrer in that case.
    }
  }, [pathname]);

  return null;
}

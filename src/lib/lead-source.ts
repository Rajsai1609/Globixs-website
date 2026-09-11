/**
 * Lead source for contact-form submissions: the site page a visitor was on
 * before they reached /contact, so admin can see which page produced a lead.
 *
 * Shared by the client (tracker + form) and the API route (validation), so
 * this file must stay free of browser- and server-only imports.
 */

/** sessionStorage key the tracker writes and the contact form reads. */
export const LEAD_SOURCE_STORAGE_KEY = "globixs:lead-source";

/** Path of the page that hosts the contact form — never recorded as a source. */
export const CONTACT_PATH = "/contact";

/** Stored when there is no usable referrer (typed URL, bookmark, email link). */
export const DIRECT_SOURCE = "direct";

const MAX_SOURCE_LENGTH = 200;

/**
 * Accepts: a site path with optional hash ("/ai-services#voice-ai"), the
 * literal "direct", or "external:<hostname>" for off-site referrers.
 * Query strings are never accepted so nothing personal is stored.
 */
const SOURCE_PATTERN = /^(\/[A-Za-z0-9\-._~/%#]*|direct|external:[a-z0-9.-]+)$/;

/**
 * Returns the source unchanged when it is a well-formed value, otherwise
 * undefined. Used on both sides of the wire so a tampered or malformed
 * value is dropped rather than stored.
 */
export function normalizeLeadSource(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_SOURCE_LENGTH) return undefined;
  if (!SOURCE_PATTERN.test(trimmed)) return undefined;
  if (trimmed === CONTACT_PATH) return undefined;
  return trimmed;
}

/**
 * Derives a source from `document.referrer` for hard loads of /contact
 * (the tracker only sees client-side navigations that happened earlier in
 * the same tab). Same-origin referrers become a site path; other origins
 * become "external:<host>"; no referrer becomes "direct".
 */
export function leadSourceFromReferrer(referrer: string, currentOrigin: string): string {
  if (!referrer) return DIRECT_SOURCE;
  try {
    const url = new URL(referrer);
    if (url.origin === currentOrigin) {
      return normalizeLeadSource(`${url.pathname}${url.hash}`) ?? DIRECT_SOURCE;
    }
    return normalizeLeadSource(`external:${url.hostname.toLowerCase()}`) ?? DIRECT_SOURCE;
  } catch {
    return DIRECT_SOURCE;
  }
}

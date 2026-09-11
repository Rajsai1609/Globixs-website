/**
 * Service catalog — the single list behind the homepage cards, the section
 * pages (/ai-services, /digital-marketing), the footer, and sitemap anchors.
 *
 * Each entry's `id` doubles as the section anchor on its page. Every section
 * renders the same pattern: title, 2–3 sentence description, three outcome
 * bullets, and a "Book a consultation" CTA (see ServiceSection).
 */
import {
  Workflow,
  PhoneCall,
  CreditCard,
  BarChart3,
  Plug,
  Sparkles,
  Search,
  Megaphone,
  Share2,
  Mail,
  MousePointerClick,
  Bot,
  TrendingUp,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type ServiceEntry = {
  /** URL-safe id — used as the section anchor on the owning page. */
  id: string;
  title: string;
  Icon: LucideIcon;
  /** Homepage card copy — two short lines. */
  blurb: string;
  /** Section body — 2–3 sentences. */
  description: string;
  /** Exactly three outcomes the customer can expect. */
  outcomes: readonly [string, string, string];
};

export type Pillar = {
  href: string;
  title: string;
  Icon: LucideIcon;
  blurb: string;
  ctaLabel: string;
};

/* ── AI Services (/ai-services) ─────────────────────────────────────────── */

export const AI_SERVICES: readonly ServiceEntry[] = [
  {
    id: "ai-business-process-automation",
    title: "AI & Business Process Automation",
    Icon: Workflow,
    blurb:
      "Quote follow-ups, invoicing, reminders, CRM updates and reporting run on AI agents. Your team gets the hours back.",
    description:
      "We map the repeatable work in your business, rank it by hours lost and revenue at risk, and replace it with AI agents and automations. Everything runs on the tools you already use, and we monitor every run after launch.",
    outcomes: [
      "Follow-ups, reminders and invoices go out on time without anyone remembering to send them.",
      "Staff hours move from copy-paste admin to work that needs a person.",
      "A monthly report shows exactly what ran, what it saved, and what to automate next.",
    ],
  },
  {
    id: "voice-ai-customer-engagement",
    title: "Voice AI & Customer Engagement",
    Icon: PhoneCall,
    blurb:
      "AI receptionists that answer 24/7, text back missed calls, book appointments, and keep your reviews working for you.",
    description:
      "An AI receptionist answers every call, books appointments, and routes urgent callers to a human. Missed-call text-back reaches the caller within seconds, chatbots handle support and sales on your website, SMS and WhatsApp, and review management requests and answers reviews across Google and Yelp.",
    outcomes: [
      "Calls that used to go to voicemail get answered, and missed callers get a text before they dial the next business.",
      "Appointments and quote requests get booked outside business hours.",
      "Every completed job produces a review request, and every review gets a drafted response.",
    ],
  },
  {
    id: "pos-integration-optimization",
    title: "POS Integration & Optimization",
    Icon: CreditCard,
    blurb:
      "Connect your point of sale to ordering, loyalty, inventory and accounting, then tune the flow for speed and margin.",
    description:
      "We integrate Square, Toast, Clover, Shopify POS and similar systems with online ordering, loyalty, delivery platforms and accounting. Then we audit the menu, modifier and checkout configuration so tickets move faster and reconciliation stops being a monthly project.",
    outcomes: [
      "Sales, tips and inventory flow to accounting without re-keying.",
      "Online, delivery and in-store orders land in one system with one source of truth.",
      "Item-level margin and peak-hour data are available for pricing and staffing decisions.",
    ],
  },
  {
    id: "business-intelligence-analytics",
    title: "Business Intelligence & Analytics",
    Icon: BarChart3,
    blurb:
      "Dashboards and reports that pull from every system you run, so decisions rest on live numbers instead of gut feel.",
    description:
      "We connect POS, CRM, ads, bookings and accounting data into one reporting layer and build the dashboards an owner actually checks: revenue, margin, marketing return, staffing and retention. Weekly reports and alerts go out automatically.",
    outcomes: [
      "One dashboard replaces the spreadsheet someone rebuilds every Monday.",
      "Problems surface as alerts before they turn into a bad month.",
      "Marketing, staffing and pricing decisions are backed by the same numbers everyone sees.",
    ],
  },
  {
    id: "workflow-systems-integration",
    title: "Workflow & Systems Integration",
    Icon: Plug,
    blurb:
      "Make your CRM, scheduling, billing and support tools talk to each other, with no more double entry.",
    description:
      "We audit how data moves between your systems today, then build the integrations with APIs, webhooks, Make and n8n, plus custom code where off-the-shelf connectors fall short. Every integration is documented and monitored so it survives staff and vendor changes.",
    outcomes: [
      "A record entered once in one tool shows up correctly everywhere else.",
      "Handoffs between sales, operations and finance stop dropping details.",
      "Integrations keep running when a vendor changes an API or a team member leaves.",
    ],
  },
  {
    id: "custom-ai-solutions",
    title: "Custom AI Solutions",
    Icon: Sparkles,
    blurb:
      "When the off-the-shelf tool does not fit, we design, build and run a custom AI application on your data.",
    description:
      "For the high-value workflow generic tools cannot handle, we scope the problem, the data and the measurable result before any build starts. Custom agents, document and knowledge assistants, lead scoring and internal copilots ship in short sprints with evaluation sets, then we run them in production.",
    outcomes: [
      "A working system scoped to one measurable result, not a research project.",
      "Quality is measured against an evaluation set before and after every change.",
      "Monitoring, cost control and model updates are handled after launch.",
    ],
  },
];

/* ── Digital Marketing (/digital-marketing) ─────────────────────────────── */

export const MARKETING_SERVICES: readonly ServiceEntry[] = [
  {
    id: "search-local-seo",
    title: "Search & Local SEO",
    Icon: Search,
    blurb:
      "Show up when nearby customers search for what you do, on Google Maps and in organic results.",
    description:
      "We optimize your Google Business Profile, fix the technical and on-page issues holding your site back, and build the location and service pages that local searches reward. Reviews, citations and tracking are set up so progress is measurable.",
    outcomes: [
      "Your business appears for the searches customers in your area actually make.",
      "Website and profile issues that suppress rankings are found and fixed.",
      "Monthly reporting shows impressions, calls and direction requests, not vanity metrics.",
    ],
  },
  {
    id: "paid-ads",
    title: "Paid Ads (Google/Meta)",
    Icon: Megaphone,
    blurb:
      "Google and Meta campaigns built around cost per lead, with conversion tracking set up before the first dollar is spent.",
    description:
      "We set up conversion tracking first, then build search, Performance Max and Meta campaigns around the actions that matter to you: calls, forms and bookings. Budgets, keywords, audiences and creative are reviewed on a fixed cadence.",
    outcomes: [
      "Every campaign reports cost per lead, not just clicks and impressions.",
      "Wasted spend on irrelevant searches and audiences is cut on a regular review cycle.",
      "Landing pages, tracking and campaigns are aligned so leads are attributable.",
    ],
  },
  {
    id: "social-content-linkedin",
    title: "Social Content & LinkedIn Management",
    Icon: Share2,
    blurb:
      "A steady publishing cadence for your business and founder profiles, planned monthly and written for your audience.",
    description:
      "We plan a monthly content calendar, write and design the posts, and manage publishing across LinkedIn, Instagram and Facebook. Founder and company profiles are kept current so the people who look you up see an active business.",
    outcomes: [
      "A consistent posting schedule without anyone on your team writing at midnight.",
      "Company and founder profiles that reflect what you do today.",
      "A monthly summary of reach, engagement and inbound conversations.",
    ],
  },
  {
    id: "email-whatsapp-campaigns",
    title: "Email & WhatsApp Campaigns",
    Icon: Mail,
    blurb:
      "Automated sequences and campaigns that follow up with leads and bring past customers back.",
    description:
      "We set up the lists, templates and automations for email and WhatsApp: welcome and follow-up sequences, promotions, reminders and win-back campaigns. Consent and opt-out handling are built in from the start.",
    outcomes: [
      "New leads receive a follow-up sequence automatically instead of waiting on a reply.",
      "Past customers hear from you on a schedule with offers and reminders.",
      "Open, reply and booking rates are tracked per campaign.",
    ],
  },
  {
    id: "landing-pages-conversion",
    title: "Landing Pages & Conversion",
    Icon: MousePointerClick,
    blurb:
      "Fast, focused pages with one clear next step, built to turn ad clicks and search visits into calls and bookings.",
    description:
      "We build landing pages and website sections around a single action, connect them to your booking, form and call tracking, and test headlines, offers and layouts against real traffic. Speed and mobile usability are checked before launch.",
    outcomes: [
      "Each campaign sends traffic to a page built for that offer, not the homepage.",
      "Forms, calls and bookings from every page are tracked to their source.",
      "Changes are tested against actual visitors rather than guessed.",
    ],
  },
];

/* ── Pillars (homepage + about) ─────────────────────────────────────────── */

export const PILLARS: readonly Pillar[] = [
  {
    href: "/ai-services",
    title: "AI Services",
    Icon: Bot,
    blurb:
      "Voice AI, business process automation, POS and systems integration, BI dashboards and custom AI, built on your tools and run by our team.",
    ctaLabel: "Explore AI Services →",
  },
  {
    href: "/digital-marketing",
    title: "Digital Marketing",
    Icon: TrendingUp,
    blurb:
      "Search and local SEO, paid ads, social and LinkedIn management, email and WhatsApp campaigns, and landing pages built to convert.",
    ctaLabel: "Explore Digital Marketing →",
  },
  {
    href: "/technology-consulting",
    title: "Technology Consulting",
    Icon: Compass,
    blurb:
      "Systems and cloud consulting, talent solutions for engineering teams, and job marketing for technology professionals.",
    ctaLabel: "Explore Technology Consulting →",
  },
];

export function aiServiceHref(id: string): string {
  return `/ai-services#${id}`;
}

export function marketingServiceHref(id: string): string {
  return `/digital-marketing#${id}`;
}

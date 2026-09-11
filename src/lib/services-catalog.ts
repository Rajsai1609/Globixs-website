/**
 * Service catalog — the one list behind the homepage grid, the /services
 * sections, the footer, and the sitemap anchors. Order matters: the first six
 * are the AI & automation cards; the last two (Digital Marketing, Technology
 * Consulting) render as a second row on the homepage.
 */
import {
  Workflow,
  PhoneCall,
  CreditCard,
  BarChart3,
  Plug,
  Sparkles,
  Megaphone,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type ServiceRow = "automation" | "growth";

export type ServiceEntry = {
  /** URL-safe id — used as the section anchor on /services. */
  id: string;
  title: string;
  Icon: LucideIcon;
  /** Homepage card copy — kept to two short lines. */
  blurb: string;
  /** /services section: what we actually do. */
  whatWeDo: readonly string[];
  /** /services section: who it is for. */
  whoItsFor: string;
  row: ServiceRow;
};

export const SERVICES: readonly ServiceEntry[] = [
  {
    id: "ai-business-process-automation",
    title: "AI & Business Process Automation",
    Icon: Workflow,
    blurb:
      "Quote follow-ups, invoicing, reminders, CRM updates and reporting run on AI agents. Your team gets the hours back.",
    whatWeDo: [
      "Map the repeatable work in your business and rank it by hours lost and revenue at risk.",
      "Build AI agents and automations for follow-ups, invoicing, scheduling, document intake and CRM hygiene.",
      "Deploy on the tools you already use: Google Workspace, Microsoft 365, HubSpot, QuickBooks, Make, n8n.",
      "Monitor every run, fix what breaks, and report the time and money saved each month.",
    ],
    whoItsFor:
      "Owner-led and mid-market businesses where staff spend hours a week on copy-paste admin: home services, clinics, agencies, professional services, and multi-location operators.",
    row: "automation",
  },
  {
    id: "voice-ai-customer-engagement",
    title: "Voice AI & Customer Engagement",
    Icon: PhoneCall,
    blurb:
      "AI receptionists that answer 24/7, text back missed calls, book appointments, and keep your reviews working for you.",
    whatWeDo: [
      "AI receptionist that answers every call, books appointments, and routes urgent callers to a human.",
      "Missed-call text-back that reaches the caller within seconds and recovers the booking.",
      "AI chatbots for support and sales on your website, SMS and WhatsApp, trained on your business.",
      "Review and reputation management: automated review requests after every job, AI-drafted responses, and monitoring across Google and Yelp.",
    ],
    whoItsFor:
      "Restaurants, clinics, salons, dental and medical practices, home services, and any business that loses customers to voicemail.",
    row: "automation",
  },
  {
    id: "pos-integration-optimization",
    title: "POS Integration & Optimization",
    Icon: CreditCard,
    blurb:
      "Connect your point of sale to ordering, loyalty, inventory and accounting, then tune the flow for speed and margin.",
    whatWeDo: [
      "Integrate Square, Toast, Clover, Shopify POS and similar systems with online ordering, loyalty, and delivery platforms.",
      "Sync sales, tips and inventory to accounting so month-end reconciliation stops being a project.",
      "Audit menu, modifier and checkout configuration to cut ticket time and errors.",
      "Surface item-level margin and peak-hour data so pricing and staffing decisions rest on numbers.",
    ],
    whoItsFor:
      "Restaurants, cafes, retail stores, and multi-location operators running on a POS that never got fully set up.",
    row: "automation",
  },
  {
    id: "business-intelligence-analytics",
    title: "Business Intelligence & Analytics",
    Icon: BarChart3,
    blurb:
      "Dashboards and reports that pull from every system you run, so decisions rest on live numbers instead of gut feel.",
    whatWeDo: [
      "Connect POS, CRM, ads, bookings and accounting data into one reporting layer.",
      "Build dashboards for revenue, margin, marketing ROI, staffing and customer retention.",
      "Automate weekly reports and alerts so the right person sees a problem before it becomes a bad month.",
      "Add AI summaries and forecasts on top of the data where they earn their keep.",
    ],
    whoItsFor:
      "Owners and operators who run several tools and still assemble the numbers by hand in spreadsheets.",
    row: "automation",
  },
  {
    id: "workflow-systems-integration",
    title: "Workflow & Systems Integration",
    Icon: Plug,
    blurb:
      "Make your CRM, scheduling, billing and support tools talk to each other, with no more double entry.",
    whatWeDo: [
      "Audit how data moves between your systems today and where it gets re-typed or lost.",
      "Build integrations with APIs, webhooks, Make and n8n, plus custom code where off-the-shelf connectors fall short.",
      "Design the handoffs between sales, operations and finance so records stay consistent end to end.",
      "Document and monitor every integration so it survives staff and vendor changes.",
    ],
    whoItsFor:
      "Growing businesses with a stack of five to fifteen SaaS tools that were bought one at a time and never connected.",
    row: "automation",
  },
  {
    id: "custom-ai-solutions",
    title: "Custom AI Solutions",
    Icon: Sparkles,
    blurb:
      "When the off-the-shelf tool does not fit, we design, build and run a custom AI application on your data.",
    whatWeDo: [
      "Scope the problem, the data, and the measurable result before any build starts.",
      "Build custom AI agents, document and knowledge assistants, lead scoring, and internal copilots on Claude and OpenAI models.",
      "Ship in two-to-eight-week sprints with evaluation sets so quality is measured, not assumed.",
      "Run it in production: monitoring, cost control, model updates and ongoing improvement.",
    ],
    whoItsFor:
      "Businesses with a specific, high-value workflow that generic AI tools cannot handle and a budget for a proper build.",
    row: "automation",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    Icon: Megaphone,
    blurb:
      "Websites that convert, local SEO that gets you found, and lead generation that fills the pipeline every month.",
    whatWeDo: [
      "Fast, modern business websites and landing pages built to turn visitors into calls and bookings.",
      "Local SEO and Google Business Profile optimization so nearby customers find you first.",
      "AI-driven lead generation: prospect discovery, personalized outreach and automated follow-up.",
      "Branding, marketing assets and campaign creative, with reporting tied to leads rather than impressions.",
    ],
    whoItsFor:
      "Local and regional businesses that need a steady flow of qualified leads and a web presence that matches the quality of their work.",
    row: "growth",
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    Icon: Compass,
    blurb:
      "A senior technical partner to assess your stack, plan the roadmap, and make the build-versus-buy calls.",
    whatWeDo: [
      "Technology and AI readiness assessments with a prioritized, costed roadmap.",
      "Vendor and platform selection, architecture reviews, and build-versus-buy decisions.",
      "Fractional CTO and technical leadership for teams without a senior engineer in the room.",
      "Delivery oversight for projects run by other vendors, so you have someone on your side of the table.",
    ],
    whoItsFor:
      "Founders and operators making technology decisions with real money attached and no in-house technical leadership.",
    row: "growth",
  },
];

export const AUTOMATION_SERVICES: readonly ServiceEntry[] = SERVICES.filter(
  (s) => s.row === "automation"
);

export const GROWTH_SERVICES: readonly ServiceEntry[] = SERVICES.filter(
  (s) => s.row === "growth"
);

export function serviceHref(id: string): string {
  return `/services#${id}`;
}

@AGENTS.md

## Site messaging — AI automation leads, staffing and job marketing secondary

The site leads with AI Automation, Digital Marketing, and Technology Consulting
(founder's direction, Sept 2026). Staffing and Job Marketing remain as secondary
offerings. Nav order and routes:

- `Home` → `/`
- `Services` → `/services` — eight sections, one per card on the homepage grid,
  driven by `src/lib/services-catalog.ts` (ids double as section anchors):
  AI & Business Process Automation · Voice AI & Customer Engagement (absorbed
  the old AI Services page: receptionist, missed-call recovery, chatbots, review
  management) · POS Integration & Optimization · Business Intelligence & Analytics
  · Workflow & Systems Integration · Custom AI Solutions · Digital Marketing ·
  Technology Consulting
- `Results` → `/results` — hidden until a customer result is published
- `Job Marketing` → `/for-employees` — full-time job marketing for candidates
- `Staffing` → `/staffing` — IT staffing for companies (components in
  `src/components/staffing/`)
- `About` → `/about`, `Contact` → `/contact`

Every consultation CTA uses `BOOKING_URL` from `src/lib/booking.ts`.

Redirects (301, `next.config.ts`): `/ai-products`, `/products`, `/industries` →
`/services`; `/get-hired`, `/for-candidates` → `/for-employees`; `/academy` → `/`.

### Blog

`/blog` lists posts from `content/blog/*.mdx` (frontmatter validated in
`src/lib/blog.ts`). Posts default to `published: false`; drafts never get a URL.
To publish: set `published: true` and a `date` that is not in the future.

### Note on `/for-employees`

The route name predates the "Job Marketing" label. Renaming to `/job-marketing`
with a redirect is a possible future cleanup; keep the current URL for SEO
continuity unless there is a reason to change it.

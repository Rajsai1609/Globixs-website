@AGENTS.md

## Site structure — three pillars (founder's direction, Sept 2026)

Nav and footer are exactly six items, from `navLinks` in `src/lib/site-config.ts`:
Home · AI Automation (label; URL stays /ai-services, from `AI_AUTOMATION_LABEL`) · Digital Marketing · Technology Consulting · About · Contact.
Staffing, Results and Job Marketing are no longer top-level.

- `/ai-services` — six sections from `AI_SERVICES` in `src/lib/services-catalog.ts`
  (ids double as anchors): AI & Business Process Automation · Voice AI & Customer
  Engagement (absorbed the old AI Services page: receptionist, missed-call
  recovery, chatbots, review management) · POS Integration & Optimization ·
  Business Intelligence & Analytics · Workflow & Systems Integration · Custom AI
  Solutions. Homepage cards link to these anchors.
- `/digital-marketing` — five sections from `MARKETING_SERVICES`: Search & Local
  SEO · Paid Ads · Social Content & LinkedIn · Email & WhatsApp · Landing Pages.
  Factual copy only; no client names or numbers we don't have.
- `/technology-consulting` — three sections: `#systems-cloud`, `#talent` (the
  old staffing page folded into one section), `#job-marketing` (the entire old
  `/for-employees` page, in `src/components/technology-consulting/JobMarketing.tsx`,
  with `<ResultsCounter />`, `<ResultsFeed />` and `<Testimonials />` directly
  above the $349 pricing block).

Every section on the three pages uses `ServiceSection` / `PageHero` from
`src/components/sections/` and the `BOOKING_URL` in `src/lib/booking.ts`.

Redirects (301, `next.config.ts`): `/services`, `/services/*`, `/ai-products`,
`/products`, `/industries` → `/ai-services`; `/staffing` →
`/technology-consulting#talent`; `/consulting` → `/technology-consulting`;
`/for-employees`, `/for-candidates`, `/get-hired` →
`/technology-consulting#job-marketing`; `/academy` → `/`. `/results`,
`/results/[slug]`, `/30days`, `/proof`, `/join`, `/register` are unchanged.

### Testimonials

`CustomerTestimonial` (Prisma) renders only rows with `published = true` AND
`consentAt` set. Manage from the CLI: `npm run testimonial -- list | add | publish
<id> | unpublish <id>` (`scripts/publish-testimonial.ts`). `--publish` requires
`--consent`.

### Blog

`/blog` lists posts from `content/blog/*.mdx` (frontmatter validated in
`src/lib/blog.ts`). Posts default to `published: false`; drafts never get a URL.
To publish: set `published: true` and a `date` that is not in the future.

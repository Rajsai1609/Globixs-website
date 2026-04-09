# Globixs Corporate Site

Production-ready Next.js app for Globixs marketing pages, careers pipeline, and lightweight admin operations.

## Tech Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma ORM
- Nodemailer (SMTP)
- GitHub Actions CI/CD + Vercel deployment workflow

## What Is Implemented

### Marketing site

- Pages: Home, About, Services, Industries, Staffing, Products, Academy, Careers, Contact, Privacy Policy, Terms
- Dynamic pages:
  - `services/[slug]`
  - `careers/[slug]`
- SEO support:
  - route metadata + Open Graph
  - `sitemap.xml`
  - `robots.txt`

### Careers + applications

- Open jobs listing from database
- Job detail pages for active roles
- Application form with validation and success state
- Candidate submissions stored in database
- Internal review is handled in admin UI (no application email dependency for request success)

### Admin operations

- `/admin/jobs`:
  - create/edit jobs
  - manage status (`DRAFT`, `OPEN`, `CLOSED`, `ARCHIVED`)
- `/admin/applications`:
  - search/filter/paginate submissions
  - update pipeline stage
  - update internal notes
- `/admin` is protected via HTTP Basic Auth using:
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`

### Visual system

- Service-aligned image sets for home/services sections
- Academy-specific image set for step cards and audience block
- Tab icon wired to `public/logo.png`

## Project Structure

- `src/app` - routes, layouts, API handlers
- `src/components` - UI sections, forms, shared components
- `src/lib` - data access, validation, email, utilities, visual mappings
- `prisma/schema.prisma` - DB schema
- `prisma/seed.ts` - initial sample records
- `public/` - static assets (logos, photos, icons)
- `docs/DEPLOYMENT.md` - CI/CD and deployment playbook

## Local Setup

1. Install deps

```bash
npm install
```

2. Create env file

```bash
cp .env.example .env
```

3. Start Postgres (Docker)

```bash
npm run db:up
```

4. Generate Prisma client + apply schema

```bash
npm run db:generate
npm run db:push
```

5. Seed sample data (optional but recommended for first run)

```bash
npm run db:seed
```

6. Start app

```bash
npm run dev
```

7. Stop DB when done (optional)

```bash
npm run db:down
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run built app
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript check (`tsc --noEmit`)
- `npm run db:up` / `db:down` - Docker Postgres lifecycle
- `npm run db:generate` - Prisma client generation
- `npm run db:push` - apply schema to DB
- `npm run db:seed` - seed initial data

## Environment Variables

Minimum local/production values:

- `DATABASE_URL`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `EMAIL_FROM`
- `EMAIL_TO_CONTACT`
- `EMAIL_TO_CAREERS`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Recommended additional value:

- `NEXT_PUBLIC_SITE_URL` (used for canonical sitemap/base URL)

## File Upload Note

Resume uploads currently write to local disk (`public/uploads`).
For serverless production, move files to object storage (S3, GCS, R2, or Vercel Blob).

## CI/CD

A GitHub Actions workflow (`.github/workflows/ci.yml`) is configured for:

- quality gates: Prisma validate, lint, typecheck, build
- preview deployment for PRs (Vercel)
- production deployment on `main` after quality passes

Setup steps and secrets are documented in:

- `docs/DEPLOYMENT.md`

## License

Internal project for Globixs. Add/adjust license policy as needed.

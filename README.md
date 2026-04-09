# Globixs Technology Solutions Website

A modern, responsive corporate website for a technology consulting and staffing company, built with:

- Next.js (App Router) + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma ORM
- API route based form handling (contact, job application, general resume)
- File upload support for resumes
- Email notifications via SMTP

## Features

- Marketing pages: Home, About, Services, Industries, Staffing/Talent Solutions, Careers, Contact, Privacy Policy, Terms and Conditions
- Dynamic routes:
  - `services/[slug]`
  - `careers/[slug]`
- Careers supports:
  - Empty state when no active jobs
  - Active job listing cards when jobs are open
  - General resume submission form always available
  - Job application form on open role pages
- Database-backed content and submissions:
  - `Service`
  - `Industry`
  - `Job` with status (`DRAFT`, `OPEN`, `CLOSED`, `ARCHIVED`)
  - `JobApplication`
  - `ResumeSubmission`
  - `ContactSubmission`
- SEO:
  - Metadata on all key pages
  - Open Graph metadata
  - `sitemap.xml` generation
  - `robots.txt` generation

## Project Structure

- `src/app` - App Router pages and API routes
- `src/components` - Reusable layout, section, and form components
- `src/lib` - Data access, Prisma client, validation, spam protection, email, file storage
- `prisma/schema.prisma` - Database schema
- `prisma/seed.ts` - Seed script with sample services, industries, and jobs

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env
```

3. Start PostgreSQL with Docker Compose:

```bash
npm run db:up
```

4. Set your PostgreSQL connection in `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/corp_site?schema=public"
```

5. Generate Prisma client and push schema:

```bash
npm run db:generate
npm run db:push
```

6. Seed sample data:

```bash
npm run db:seed
```

7. Run development server:

```bash
npm run dev
```

8. (Optional) Stop database when done:

```bash
npm run db:down
```

## Form Handling & Uploads

- Contact form posts to `POST /api/contact`.
- General resume form posts to `POST /api/resume-submissions`.
- Job application form posts to `POST /api/job-applications`.
- Resume files are stored under `public/uploads`.
- Basic spam mitigation includes:
  - honeypot field (`website`)
  - submission timing check (`startedAt`)

## Admin-Friendly Architecture

- Jobs and service content are data-driven via database models.
- Publishing/unpublishing jobs is controlled by `Job.status`.
- Lightweight admin UI is available at:
  - `/admin/jobs` for job status management
  - `/admin/applications` for candidate review workflow
- Admin access is protected by HTTP Basic auth using:
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`

## Vercel Deployment Notes

1. Create a PostgreSQL instance (Neon, Supabase, RDS, etc.).
2. Add required environment variables in Vercel project settings:
   - `DATABASE_URL`
   - `EMAIL_FROM`
   - `EMAIL_TO_CONTACT`
   - `EMAIL_TO_CAREERS`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
3. On first deploy, run database setup:
   - `npm run db:generate`
   - `npm run db:push`
   - `npm run db:seed` (optional)
4. For production resume storage, switch from local disk to object storage (S3/R2/GCS) because serverless file systems are ephemeral.

## Future Enhancements

- Build a secure admin UI for services/jobs/content
- Add CMS integration (Sanity/Contentful/Strapi)
- Add ATS integration pipeline
- Add CAPTCHA and rate limiting for stronger spam prevention

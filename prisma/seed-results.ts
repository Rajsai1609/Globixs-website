// npx tsx prisma/seed-results.ts
// Upload the three *-redacted.jpg files to Supabase Storage bucket "results" first.
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  await db.customerResult.upsert({
    where: { slug: "workday-consultant-aug-2026" },
    update: {},
    create: {
      slug: "workday-consultant-aug-2026",
      headline: "30 days, 3 employer calls",
      profile: "Workday/HCM consultant, 6+ yrs",
      track: "CORE_TECH",
      joinedAt: new Date("2026-08-05"),
      consentAt: null,          // set only after written OK from the customer
      published: false,         // flip to true together with consentAt
      story: `She's a Workday and HCM consultant with over six years of experience — senior, niche, and competing with thousands of applicants hitting the same five job titles.

Globixs analyzed her resume, rebuilt the master version, locked her role tracks, and put a named recruiter on her profile who reads every listing, drops the expired and one-click ones, and rewrites the resume for each application.

Employers replied because the applications looked like they came from her — because in every way that matters, they did.`,
      responses: {
        create: [
          { company: "Southwest Airlines", type: "INTERVIEW_INVITE",   role: "T&OS Analytics Consultant",           imagePath: "workday-consultant-aug-2026/southwest-interview-redacted.jpg", receivedOn: new Date("2026-08-24") },
          { company: "Arrow",              type: "RECRUITER_SCREEN",   role: null,                                  imagePath: "workday-consultant-aug-2026/arrow-phone-screen-redacted.jpg",  receivedOn: new Date("2026-08-26") },
          { company: "General Motors",     type: "SCREENING_QUESTION", role: "Workday Extend Configurator – HR IT", imagePath: "workday-consultant-aug-2026/gm-screening-redacted.jpg",         receivedOn: new Date("2026-09-02") },
        ],
      },
    },
  });
  console.log("seeded (unpublished)");
}
main().finally(() => db.$disconnect());

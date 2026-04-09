"use server";

import { ApplicationStatus, JobStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slug";

function parseJobStatus(value: string): JobStatus {
  if (value in JobStatus) return value as JobStatus;
  return JobStatus.DRAFT;
}

function parseApplicationStatus(value: string): ApplicationStatus {
  if (value in ApplicationStatus) return value as ApplicationStatus;
  return ApplicationStatus.NEW;
}

async function uniqueJobSlug(base: string, excludeJobId?: number): Promise<string> {
  const root = base || "role";
  let n = 0;
  while (true) {
    const candidate = n === 0 ? root : `${root}-${n}`;
    const found = await prisma.job.findUnique({ where: { slug: candidate } });
    if (!found || found.id === excludeJobId) return candidate;
    n += 1;
  }
}

export async function updateJobStatus(formData: FormData) {
  const jobId = Number(formData.get("jobId"));
  const status = parseJobStatus(String(formData.get("status") || ""));
  if (!Number.isFinite(jobId)) return;

  await prisma.job.update({
    where: { id: jobId },
    data: { status },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/careers");
}

export async function createJob(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const employmentType = String(formData.get("employmentType") || "").trim();
  const summary = String(formData.get("summary") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const requirements = String(formData.get("requirements") || "").trim();
  const status = parseJobStatus(String(formData.get("status") || ""));
  const slugInput = String(formData.get("slug") || "").trim();

  if (!title || !location || !employmentType || !summary || !description || !requirements) {
    redirect("/admin/jobs/new?error=missing");
  }

  const baseSlug = slugify(slugInput || title);
  const slug = await uniqueJobSlug(baseSlug);

  await prisma.job.create({
    data: {
      slug,
      title,
      location,
      employmentType,
      summary,
      description,
      requirements,
      status,
    },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/careers");
  redirect("/admin/jobs");
}

export async function updateJob(formData: FormData) {
  const jobId = Number(formData.get("jobId"));
  if (!Number.isFinite(jobId)) {
    redirect("/admin/jobs?error=invalid");
  }

  const title = String(formData.get("title") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const employmentType = String(formData.get("employmentType") || "").trim();
  const summary = String(formData.get("summary") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const requirements = String(formData.get("requirements") || "").trim();
  const status = parseJobStatus(String(formData.get("status") || ""));
  const slugInput = String(formData.get("slug") || "").trim();

  if (!title || !location || !employmentType || !summary || !description || !requirements) {
    redirect(`/admin/jobs/${jobId}/edit?error=missing`);
  }

  const existing = await prisma.job.findUnique({ where: { id: jobId } });
  if (!existing) {
    redirect("/admin/jobs?error=notfound");
  }

  const baseSlug = slugify(slugInput || title);
  const slug = await uniqueJobSlug(baseSlug, jobId);

  await prisma.job.update({
    where: { id: jobId },
    data: {
      slug,
      title,
      location,
      employmentType,
      summary,
      description,
      requirements,
      status,
    },
  });

  revalidatePath("/admin/jobs");
  revalidatePath("/careers");
  revalidatePath(`/careers/${existing.slug}`);
  revalidatePath(`/careers/${slug}`);
  redirect("/admin/jobs");
}

export async function deleteJob(formData: FormData) {
  const jobId = Number(formData.get("jobId"));
  if (!Number.isFinite(jobId)) return;

  const existing = await prisma.job.findUnique({ where: { id: jobId } });
  if (!existing) return;

  await prisma.job.delete({ where: { id: jobId } });

  revalidatePath("/admin/jobs");
  revalidatePath("/careers");
  revalidatePath(`/careers/${existing.slug}`);
  redirect("/admin/jobs");
}

/** Pipeline stage only — job stays the one they applied to. */
export async function updateApplication(formData: FormData) {
  const mode = String(formData.get("_mode") || "pipeline");
  const applicationId = Number(formData.get("applicationId"));
  if (!Number.isFinite(applicationId)) return;

  const existing = await prisma.jobApplication.findUnique({ where: { id: applicationId } });
  if (!existing) return;

  if (mode === "notes") {
    const reviewNotes = String(formData.get("reviewNotes") || "").trim() || null;
    await prisma.jobApplication.update({
      where: { id: applicationId },
      data: { reviewNotes, reviewedAt: new Date() },
    });
    revalidatePath("/admin/applications");
    return;
  }

  const status = parseApplicationStatus(String(formData.get("status") || ""));

  await prisma.jobApplication.update({
    where: { id: applicationId },
    data: {
      status,
      reviewedAt: new Date(),
    },
  });

  revalidatePath("/admin/applications");
}

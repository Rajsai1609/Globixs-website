import { NextResponse } from "next/server";
import { JobStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { isLikelySpam } from "@/lib/spam";
import { jobApplicationSchema } from "@/lib/validators";
import { saveResumeFile } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume");
    const payload = {
      jobId: formData.get("jobId"),
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      currentLocation: String(formData.get("currentLocation") || ""),
      linkedinUrl: String(formData.get("linkedinUrl") || ""),
      workAuthorization: String(formData.get("workAuthorization") || ""),
      availability: String(formData.get("availability") || ""),
      coreSkills: String(formData.get("coreSkills") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
      startedAt: Number(formData.get("startedAt") || 0),
    };

    const parsed = jobApplicationSchema.safeParse(payload);
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const hint = Object.values(first).flat()[0];
      return NextResponse.json(
        { error: hint || "Please check the form and try again.", details: first },
        { status: 400 },
      );
    }

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Resume is required." }, { status: 400 });
    }

    if (isLikelySpam(parsed.data.website, parsed.data.startedAt)) {
      return NextResponse.json({ ok: true });
    }

    const job = await prisma.job.findUnique({ where: { id: parsed.data.jobId } });
    if (!job || job.status !== JobStatus.OPEN) {
      return NextResponse.json(
        { error: "This role is not open for applications." },
        { status: 403 },
      );
    }

    let resumeUrl: string;
    try {
      resumeUrl = await saveResumeFile(file);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid resume file.";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const fullName = `${parsed.data.firstName} ${parsed.data.lastName}`.trim();
    const enrichedMessage = [
      parsed.data.message?.trim() ? `Candidate Note: ${parsed.data.message.trim()}` : "",
      `Location: ${parsed.data.currentLocation}`,
      `Work Authorization: ${parsed.data.workAuthorization}`,
      `Availability: ${parsed.data.availability}`,
      `LinkedIn: ${parsed.data.linkedinUrl}`,
      parsed.data.coreSkills ? `Core Skills: ${parsed.data.coreSkills}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await prisma.jobApplication.create({
      data: {
        jobId: parsed.data.jobId,
        fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: enrichedMessage,
        resumeUrl,
      },
    });

    // No email: review applications in /admin/applications

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[job-applications] POST error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}

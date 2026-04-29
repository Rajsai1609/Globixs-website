import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getHiredSchema } from "@/lib/validators";
import { isLikelySpam } from "@/lib/spam";
import { sendNotificationEmail } from "@/lib/email";
import { saveResumeFile, FileValidationError, StorageConfigError } from "@/lib/storage";

export async function POST(request: Request) {
  let fd: FormData;
  try {
    fd = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const resumeFile = fd.get("resume");
  if (!(resumeFile instanceof File) || resumeFile.size === 0) {
    return NextResponse.json({ error: "Resume is required." }, { status: 400 });
  }

  let resumeUrl: string;
  try {
    resumeUrl = await saveResumeFile(resumeFile);
  } catch (err) {
    if (err instanceof FileValidationError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    if (err instanceof StorageConfigError) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    throw err;
  }

  const raw = {
    fullName:          String(fd.get("fullName") ?? ""),
    email:             String(fd.get("email") ?? ""),
    phone:             String(fd.get("phone") ?? "") || undefined,
    linkedinUrl:       String(fd.get("linkedinUrl") ?? "") || undefined,
    visaStatus:        String(fd.get("visaStatus") ?? ""),
    yearsOfExperience: String(fd.get("yearsOfExperience") ?? ""),
    targetRoles:       String(fd.get("targetRoles") ?? ""),
    resumeUrl,
    message:           String(fd.get("message") ?? "") || undefined,
    website:           String(fd.get("website") ?? ""),
    startedAt:         Number(fd.get("startedAt") ?? 0),
  };

  const parsed = getHiredSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form input." }, { status: 400 });
  }

  const payload = parsed.data;
  if (isLikelySpam(payload.website, payload.startedAt)) {
    return NextResponse.json({ ok: true });
  }

  try {
    await prisma.getHiredSubmission.create({
      data: {
        fullName:          payload.fullName,
        email:             payload.email,
        phone:             payload.phone,
        linkedinUrl:       payload.linkedinUrl,
        visaStatus:        payload.visaStatus,
        yearsOfExperience: payload.yearsOfExperience,
        targetRoles:       payload.targetRoles,
        resumeUrl:         payload.resumeUrl,
        message:           payload.message,
      },
    });
  } catch (err) {
    console.error("[get-hired] DB insert failed:", err);
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }

  await sendNotificationEmail(
    `New Get Hired submission from ${payload.fullName}`,
    [
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone ?? "-"}`,
      `LinkedIn: ${payload.linkedinUrl ?? "-"}`,
      `Visa Status: ${payload.visaStatus}`,
      `Experience: ${payload.yearsOfExperience} years`,
      `Target Roles: ${payload.targetRoles}`,
      `Resume: ${payload.resumeUrl}`,
      ``,
      `Message:`,
      payload.message ?? "-",
    ].join("\n"),
    process.env.EMAIL_TO_CONTACT ?? "",
  );

  return NextResponse.json({ ok: true });
}

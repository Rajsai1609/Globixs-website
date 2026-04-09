import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
});

export const resumeSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
});

function normalizeHttpUrl(value: string): string {
  const t = value.trim();
  if (!t) return t;
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t}`;
}

export const jobApplicationSchema = z.object({
  jobId: z.coerce.number().int().positive(),
  firstName: z.string().min(2).max(80),
  lastName: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  currentLocation: z.string().min(2).max(120),
  linkedinUrl: z
    .string()
    .min(1)
    .transform((s) => normalizeHttpUrl(s))
    .pipe(z.string().url()),
  workAuthorization: z.enum(["Citizen", "Permanent Resident", "Visa", "Need Sponsorship"]),
  availability: z.string().min(1).max(60),
  coreSkills: z.string().max(500).optional(),
  message: z.string().max(2000).optional(),
  website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
});


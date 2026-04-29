-- CreateTable
CREATE TABLE "GetHiredSubmission" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "linkedinUrl" TEXT,
    "visaStatus" TEXT NOT NULL,
    "yearsOfExperience" TEXT NOT NULL,
    "targetRoles" TEXT NOT NULL,
    "resumeUrl" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GetHiredSubmission_pkey" PRIMARY KEY ("id")
);

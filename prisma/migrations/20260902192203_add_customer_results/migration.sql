-- CreateEnum
CREATE TYPE "ResultTrack" AS ENUM ('CORE_TECH', 'UNSATURATED');

-- CreateEnum
CREATE TYPE "ResponseType" AS ENUM ('INTERVIEW_INVITE', 'RECRUITER_SCREEN', 'SCREENING_QUESTION', 'OFFER');

-- CreateTable
CREATE TABLE "CustomerResult" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "track" "ResultTrack" NOT NULL DEFAULT 'CORE_TECH',
    "joinedAt" TIMESTAMP(3) NOT NULL,
    "story" TEXT NOT NULL,
    "consentAt" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployerResponse" (
    "id" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "type" "ResponseType" NOT NULL,
    "role" TEXT,
    "imagePath" TEXT NOT NULL,
    "receivedOn" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmployerResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerResult_slug_key" ON "CustomerResult"("slug");

-- CreateIndex
CREATE INDEX "CustomerResult_published_createdAt_idx" ON "CustomerResult"("published", "createdAt");

-- CreateIndex
CREATE INDEX "EmployerResponse_receivedOn_idx" ON "EmployerResponse"("receivedOn");

-- AddForeignKey
ALTER TABLE "EmployerResponse" ADD CONSTRAINT "EmployerResponse_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "CustomerResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

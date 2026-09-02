-- Triage state for /admin/contacts. Purely additive: new nullable columns,
-- one boolean defaulting to false, and two supporting indexes. No existing
-- column or row is altered.

-- AlterTable
ALTER TABLE "ContactSubmission" ADD COLUMN     "handled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "handledAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "GetHiredSubmission" ADD COLUMN     "handled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "handledAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT;

-- CreateIndex
CREATE INDEX "ContactSubmission_handled_createdAt_idx" ON "ContactSubmission"("handled", "createdAt");

-- CreateIndex
CREATE INDEX "GetHiredSubmission_handled_createdAt_idx" ON "GetHiredSubmission"("handled", "createdAt");

/**
 * One-shot Prisma connection test.
 * Run: npx tsx test-connection.ts
 * Requires DATABASE_URL and DIRECT_URL in environment (or .env file loaded externally).
 * Delete this file after debugging.
 */

import { PrismaClient } from "@prisma/client";

const vars = {
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
};

console.log("\n=== Connection test ===");

for (const [key, val] of Object.entries(vars)) {
  if (!val) {
    console.error(`MISSING: ${key} is not set`);
    process.exit(1);
  }
  // Print host portion only — never log the full URL (it contains the password).
  try {
    const url = new URL(val);
    console.log(`${key}: host=${url.hostname}  port=${url.port}  user=${url.username}`);
  } catch {
    console.error(`${key}: could not parse as URL`);
    process.exit(1);
  }
}

console.log("\nConnecting via DATABASE_URL (transaction pooler)...");

const prisma = new PrismaClient({
  log: ["error"],
});

async function main() {
  try {
    // Lightweight query that hits the DB without touching app tables.
    const result = await prisma.$queryRaw<[{ now: Date }]>`SELECT now()`;
    console.log(`SUCCESS — server time: ${result[0].now.toISOString()}`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`FAILED — ${message}`);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

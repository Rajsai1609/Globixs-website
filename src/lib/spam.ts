export function isLikelySpam(website: string | undefined, startedAt?: number): boolean {
  if (website && website.trim().length > 0) {
    return true;
  }

  if (!startedAt) {
    return false;
  }

  const elapsed = Date.now() - startedAt;
  return elapsed < 3000;
}


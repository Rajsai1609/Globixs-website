/**
 * Blog content layer.
 *
 * Posts live in `content/blog/<slug>.mdx` (or `.md`) with YAML frontmatter.
 * Anything with `published: false` — or a future `date` — never leaves this
 * module, so drafts can sit in the repo without leaking a URL.
 *
 * Frontmatter contract (validated with zod, so a typo fails the build):
 *   title:       string
 *   description: string
 *   date:        YYYY-MM-DD
 *   published:   boolean            (default false — drafts by default)
 *   author?:     string
 *   tags?:       string[]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const POST_EXTENSIONS = [".mdx", ".md"] as const;

const frontmatterSchema = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  date: z.coerce.date(),
  published: z.boolean().default(false),
  author: z.string().min(1).default("Globixs Team"),
  tags: z.array(z.string().min(1)).default([]),
});

export type PostFrontmatter = z.infer<typeof frontmatterSchema>;

export type PostSummary = PostFrontmatter & {
  slug: string;
};

export type Post = PostSummary & {
  /** Raw MDX body, compiled by the page. */
  body: string;
};

/** Slugs are file names; keep them URL-safe so a bad name fails early. */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function slugFromFilename(filename: string): string | null {
  const ext = POST_EXTENSIONS.find((e) => filename.endsWith(e));
  if (!ext) return null;
  const slug = filename.slice(0, -ext.length);
  return SLUG_PATTERN.test(slug) ? slug : null;
}

async function listPostFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && slugFromFilename(e.name) !== null)
      .map((e) => e.name)
      .sort();
  } catch (error: unknown) {
    // A missing content directory is a valid empty blog, not a crash.
    if (isNodeError(error) && error.code === "ENOENT") return [];
    throw error;
  }
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && "code" in error;
}

async function readPost(filename: string): Promise<Post> {
  const slug = slugFromFilename(filename);
  if (!slug) throw new Error(`Invalid blog post file name: ${filename}`);

  const raw = await fs.readFile(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
    throw new Error(`Invalid frontmatter in content/blog/${filename}: ${issues.join("; ")}`);
  }

  return { ...parsed.data, slug, body: content };
}

function isLive(post: PostFrontmatter, now: Date): boolean {
  return post.published && post.date.getTime() <= now.getTime();
}

/** Every post on disk, drafts included. Newest first. Admin/tooling use only. */
export async function getAllPosts(): Promise<Post[]> {
  const files = await listPostFiles();
  const posts = await Promise.all(files.map(readPost));
  return [...posts].sort((a, b) => b.date.getTime() - a.date.getTime());
}

/** Published, non-future posts without their bodies. Newest first. */
export async function getPublishedPosts(): Promise<PostSummary[]> {
  const now = new Date();
  const posts = await getAllPosts();
  return posts.filter((p) => isLive(p, now)).map(toSummary);
}

function toSummary(post: Post): PostSummary {
  const { slug, title, description, date, published, author, tags } = post;
  return { slug, title, description, date, published, author, tags };
}

/** A single published post, or null if it is missing or still a draft. */
export async function getPublishedPost(slug: string): Promise<Post | null> {
  if (!SLUG_PATTERN.test(slug)) return null;
  for (const ext of POST_EXTENSIONS) {
    try {
      const post = await readPost(`${slug}${ext}`);
      return isLive(post, new Date()) ? post : null;
    } catch (error: unknown) {
      if (isNodeError(error) && error.code === "ENOENT") continue;
      throw error;
    }
  }
  return null;
}

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

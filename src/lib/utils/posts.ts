import { getCollection } from "astro:content";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import calculateReadingTime from "reading-time";
import type { Post, ReadingTime } from "../types/post";

/**
 * Get all published posts, sorted by date
 */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection("posts");
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set(posts.flatMap((post) => post.data.tags));
  return Array.from(tags).sort();
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

/**
 * Get reading time from Markdown post body.
 * @returns A string with the reading time, or undefined if the text is empty or null.
 */
export const getReadingTime = (
  text: string | undefined
): ReadingTime | undefined => {
  if (!text || !text.length) return undefined;
  try {
    const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
    if (minutes && minutes > 0) {
      return `${Math.ceil(minutes)} min de leitura` as const;
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
};

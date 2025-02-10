import { getCollection } from 'astro:content';
import type { Post } from '../types/post';

/**
 * Get all published posts, sorted by date
 */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/**
 * Get all unique tags from published posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set(posts.flatMap(post => post.data.tags));
  return Array.from(tags).sort();
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.tags.includes(tag));
}

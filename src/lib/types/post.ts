import type { CollectionEntry } from "astro:content";

// Type for a blog post
export type Post = CollectionEntry<"posts">;

// Helper type for post frontmatter
export type PostFrontmatter = Post["data"];

// Type for the reading time of a post
export type ReadingTime = `${number} min de leitura`;

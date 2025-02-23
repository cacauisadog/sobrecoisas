import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Define the schema for blog posts
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    // Required fields
    title: z
      .string()
      .min(1, "Title is required")
      .max(100, "Title must be 100 characters or less"),

    description: z
      .string()
      .min(1, "Description is required")
      .max(200, "Description must be 200 characters or less"),

    pubDate: z.coerce.date({
      required_error: "Publication date is required",
      invalid_type_error: "Publication date must be a valid date",
    }),

    // Optional fields with defaults
    draft: z.boolean().default(false),

    tags: z
      .array(
        z
          .string()
          .min(2, "Tag must be at least 2 characters")
          .max(20, "Tag must be 20 characters or less")
      )
      .default([]),

    // Optional image field
    image: z
      .object({
        url: z.string().url("Image URL must be a valid URL"),
        alt: z.string().min(1, "Image alt text is required"),
      })
      .optional(),
  }),
});

// Export the collections
export const collections = {
  posts,
};

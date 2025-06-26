import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/blog-posts" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.union([z.string(), z.date()]),
		description: z.string(),
	}),
});

const docs = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/docs" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		category: z.string(),
		order: z.number(),
		featured: z.boolean().optional(),
		lastUpdated: z.union([z.string(), z.date()]),
	}),
});

export const collections = { posts, docs };
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string().url().optional(),
		order: z.number().int(),
	}),
});

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
	}),
});

export const collections = { projects, blog };

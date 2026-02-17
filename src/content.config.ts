/**
 * Content Collections Configuration
 *
 * Astro Content Collections let us define schemas for our Markdown/MDX content.
 * This gives us type-safe frontmatter — if a required field is missing or the
 * wrong type, we get an error at build time instead of a broken page at runtime.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts collection — for the learning journal / devlog
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Projects collection — for portfolio project writeups
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['completed', 'in-progress', 'planned']).default('planned'),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    keyLearning: z.string().optional(),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { blog, projects };

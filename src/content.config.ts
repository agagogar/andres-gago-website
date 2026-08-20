import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url()
});

const authorSchema = z.object({
  name: z.string(),
  url: z.string().url().optional()
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "publications",
      "working-papers",
      "work-in-progress",
      "other-research-work"
    ]),
    authors: z.array(authorSchema).default([]),
    venue: z.string().optional(),
    dateLabel: z.string().optional(),
    status: z.string().optional(),
    links: z.array(linkSchema).default([]),
    order: z.number().default(999)
  })
});

const teaching = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/teaching" }),
  schema: z.object({
    course: z.string(),
    institution: z.string(),
    program: z.string().optional(),
    role: z.string().optional(),
    period: z.string(),
    notes: z.string().optional(),
    order: z.number().default(999)
  })
});

const otherPublications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/other-publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    outlet: z.string(),
    dateLabel: z.string(),
    links: z.array(linkSchema).default([]),
    order: z.number().default(999)
  })
});

export const collections = {
  research,
  teaching,
  "other-publications": otherPublications
};

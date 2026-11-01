import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Each editorial post has an English source and locale-specific Markdown translations.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    locale: z.enum(['en', 'de', 'es', 'ru', 'pl']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

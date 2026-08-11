import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // 著者=つっちゃん先生・監修=Dr.チャンマー が基本形（E-E-A-T対応）
    author: z.string().default('つっちゃん先生'),
    supervisor: z.string().default('Dr.チャンマー'),
    draft: z.boolean().default(false),
  }),
})

export const collections = { journal }

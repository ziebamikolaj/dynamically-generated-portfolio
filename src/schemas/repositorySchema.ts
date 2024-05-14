import { z } from "zod";

import { OwnerSchema } from "./ownerSchema";

export const RepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string(),
  topics: z.array(z.string()),
  owner: OwnerSchema,
  pushed_at: z.string().datetime(),
  language: z.string().nullable(),
  readme: z.string().nullable().optional(),
  preview: z.string().nullable().optional(),
});

export const RepositoriesSchema = z.array(RepositorySchema);
export type Repository = z.infer<typeof RepositorySchema>;

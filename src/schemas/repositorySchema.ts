import { z } from "zod";

import { OwnerSchema } from "./ownerSchema";

export const RepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  url: z.string(),
  topics: z.array(z.string()),
  owner: OwnerSchema,
  readme: z.string().nullable().optional(),
});

export const RepositoriesSchema = z.array(RepositorySchema);
 
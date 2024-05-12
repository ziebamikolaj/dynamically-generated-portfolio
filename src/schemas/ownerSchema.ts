import { z } from "zod";

export const OwnerSchema = z.object({
  avatar_url: z.string(),
  login: z.string(),
  url: z.string(),
});

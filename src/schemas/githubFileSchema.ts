import { z } from "zod";

export const GithubFileSchema = z.object({
  content: z.string().optional(),
  download_url: z.string().optional(),
});

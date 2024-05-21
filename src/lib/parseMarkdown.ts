import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

export const parseMarkdown = async (markdown: string) => {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
};

import type { Repository } from "@/types/repository";

import { RepositoriesSchema } from "@/schemas/repositorySchema";

export const getRepositories = async (username: string) => {
  const response = await fetch(
    "https://api.github.com/users/" + username + "/repos",
    {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_GITHUB_TOKEN,
      },
    },
  );
  const data = (await response.json()) as Array<unknown>;
  try {
    const repositories = RepositoriesSchema.parse(data);
    for (const repository of repositories) {
      const readme = await getReadmeFile(username, repository.name);
      repository.readme = decodeBase64(readme.content);
    }

    return repositories;
  } catch (error) {
    console.error("Validation failed", error);
    throw new Error("Data validation failed");
  }
};

const getReadmeFile = async (owner: string, repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_GITHUB_TOKEN,
      },
    },
  );
  const data = (await response.json()) as { content: string };
  return data;
};

const decodeBase64 = (data: string) => {
  console.log(data);
  if (data === undefined || data === null) return null;
  return data
    .split("\n")
    .map((line) => atob(line))
    .join("\n");
};

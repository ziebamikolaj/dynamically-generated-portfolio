import { GithubFileSchema } from "@/schemas/githubFileSchema";
import { RepositoriesSchema } from "@/schemas/repositorySchema";

export const getRepositories = async () => {
  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
    {
      headers: {
        Authorization: "Bearer " + process.env.GITHUB_TOKEN,
      },
    },
  );
  const data = (await response.json()) as unknown;
  try {
    const repositories = RepositoriesSchema.parse(data);
    for (const repository of repositories) {
      const readme = await getReadmeFile(repository.name);
      const preview = await getPreviewFile(repository.name);
      repository.readme = decodeBase64(readme);
      repository.preview = preview;
    }
    return repositories;
  } catch (error) {
    throw new Error("Data validation failed");
  }
};

const getReadmeFile = async (repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repo}/readme`,
    {
      headers: {
        Authorization: "Bearer " + process.env.GITHUB_TOKEN,
      },
    },
  );
  const data = (await response.json()) as unknown;
  try {
    const readme = GithubFileSchema.parse(data);
    return readme.content;
  } catch {
    throw new Error("Data validation failed");
  }
};

const getPreviewFile = async (repo: string) => {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repo}/contents/preview.webp`,
    {
      headers: {
        Authorization: "Bearer " + process.env.GITHUB_TOKEN,
      },
    },
  );
  const data = (await response.json()) as unknown;

  try {
    const readme = GithubFileSchema.parse(data);
    return readme.download_url;
  } catch {
    throw new Error("Data validation failed");
  }
};

const decodeBase64 = (data: string | undefined) => {
  if (data === undefined || data === null) return null;
  return data
    .split("\n")
    .map((line) => atob(line))
    .join("\n");
};

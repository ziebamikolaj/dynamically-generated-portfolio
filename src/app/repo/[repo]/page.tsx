import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";

import { getRepositories } from "@/api/repositories";
import RoundedButton from "@/components/RoundedButton";
import { Badge } from "@/components/ui/badge";
import { parseMarkdown } from "@/lib/parseMarkdown";

interface RepoProps {
  params: {
    repo: string;
  };
}
export async function generateStaticParams() {
  const repositories = await getRepositories();
  const paths = repositories.map((repo) => ({ repo: repo.name }));
  return paths;
}

export default async function Repo({ params }: RepoProps) {
  const repositories = await getRepositories();
  const repo = repositories.find((repo) => repo.name === params.repo);

  if (!repo) return notFound();

  return (
    <section className="h-[calc(100vh-6.5rem)] p-10">
      <div className="flex justify-between">
        <div className="m-auto mb-6 flex flex-wrap items-center md:mb-8 lg:mb-10 xl:w-1/2">
          {repo.preview && (
            <img
              alt={repo.name}
              className="h-auto w-full rounded-t-2xl"
              src={repo.preview}
            />
          )}
          <div className="flex w-full flex-col justify-center">
            <h2 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              {repo.name}
            </h2>
            <div className="flex w-full flex-wrap gap-2 pt-2">
              {repo.topics.sort().map((topic) => (
                <Badge
                  variant="outline"
                  className="border-card-secondary text-card-foreground"
                  key={topic}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Link href="/" className="hover:text-[#94A3B8]">
          <RiArrowGoBackFill className="h-8 w-8" />
        </Link>
      </div>
      <div className="m-auto mb-6 text-base md:mb-8 md:text-lg lg:mb-10 lg:text-xl xl:w-1/2">
        <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
          About
        </h3>
        <p>{repo.description}</p>
      </div>
      <div className="m-auto mb-6 text-base md:mb-8 md:text-lg lg:mb-10 lg:text-xl xl:w-1/2">
        {repo.readme && (
          <div>
            <h3 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">
              README
            </h3>
            <div
              className="markdown text-card-foreground md:text-base lg:text-lg"
              dangerouslySetInnerHTML={{
                __html: (await parseMarkdown(repo.readme || "")) || "",
              }}
            />
          </div>
        )}
      </div>
      <div className="m-auto flex items-center justify-between xl:w-1/2">
        <div className="mb-6 mt-4 space-x-5 space-y-3 ">
          <RoundedButton href={repo.html_url} className="ml-5">
            View on GitHub
          </RoundedButton>
          {repo.homepage && (
            <RoundedButton href={repo.homepage}>Live Demo</RoundedButton>
          )}
        </div>
        <div className="flex text-sm text-card-foreground md:text-base lg:text-lg">
          <div className="flex flex-wrap justify-end">
            <span className="w-full text-right">{repo.language}</span>
            {repo.license && <span>{repo.license.name}</span>}
            <span className="w-full whitespace-nowrap text-right">
              Updated {format(new Date(repo.pushed_at), "MMMM dd")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

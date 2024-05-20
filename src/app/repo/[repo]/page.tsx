import Link from "next/link";
import { notFound } from "next/navigation";

import { getRepositories } from "@/api/repositories";

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
  if (!repo) {
    return notFound();
  }
  return (
    <div className="grid min-h-[calc(100vh-5.5rem)] w-full place-items-center">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Work in Progress</h1>
        <p className="text-lg">This site is currently under construction.</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

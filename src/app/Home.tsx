"use client";

import type { Repository } from "@/schemas/repositorySchema";

import { RepoCard } from "@/components/RepoCard";

const Home = ({ repositories }: { repositories: Array<Repository> }) => {
  return (
    <div className="3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 grid place-items-center gap-4 pt-10 xl:grid-cols-2 2xl:grid-cols-3">
      {repositories
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
        )
        .map((repository) => (
          <RepoCard key={repository.id} repository={repository} />
        ))}
    </div>
  );
};
export default Home;

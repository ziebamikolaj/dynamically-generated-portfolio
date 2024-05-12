"use client";

import type { Repository } from "@/schemas/repositorySchema";

import { RepoCard } from "@/components/RepoCard";

const Home = ({ repositories }: { repositories: Array<Repository> }) => {
  return (
    <div className="grid place-items-center gap-4 pt-10 xl:grid-cols-2 2xl:grid-cols-3">
      {repositories.map((repository) => (
        <RepoCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
};
export default Home;

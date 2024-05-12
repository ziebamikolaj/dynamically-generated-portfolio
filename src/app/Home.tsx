"use client";

import type { Repository } from "@/types/repository";

const Home = ({ repositories }: { repositories: Array<Repository> }) => {
  console.log(repositories);

  return <div></div>;
};
export default Home;

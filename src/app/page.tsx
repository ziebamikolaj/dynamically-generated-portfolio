import { getRepositories } from "@/api/repositories";

import Home from "./Home";

export default async function Page() {
  const repositories = await getRepositories();
  return <Home repositories={repositories} />;
}

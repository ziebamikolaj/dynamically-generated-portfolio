import { useQuery } from "@tanstack/react-query";

import { getRepositories } from "@/api/repositories";

const Home = () => {
  const {
    data: repositories,
    isError,
    error,
  } = useQuery({
    queryKey: ["repositories"],
    queryFn: () => getRepositories("ziebamikolaj"),
  });

  console.log(repositories);
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div></div>;
};
export default Home;

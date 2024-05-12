import Navbar from "@/components/Navbar";

import "../index.css";

import { getRepositories } from "@/api/repositories";

import Home from "./Home";
import { Providers } from "./providers";

export const revalidate = 60;

export default async function Page() {
  const repositories = await getRepositories("ziebamikolaj");
  return (
    <Providers
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <Home repositories={repositories} />
    </Providers>
  );
}
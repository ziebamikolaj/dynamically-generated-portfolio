import type { Owner } from "./owner";

export type Repository = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  topics: Array<string>;
  owner: Owner;
};

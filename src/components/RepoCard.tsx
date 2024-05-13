import type { Repository } from "@/schemas/repositorySchema";
import { format } from "date-fns";
import { CiCalendar } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiLinkLight } from "react-icons/pi";

import { LanguageIcon } from "./LanguageIcon";
import { Badge } from "./ui/badge";
import { TypographyH3, TypographyP } from "./ui/typographies";

export const RepoCard = ({ repository }: { repository: Repository }) => {
  return (
    <div className="flex w-[20rem] flex-wrap justify-end rounded-xl bg-card md:w-[40rem] xl:w-[32rem] 2xl:w-[28rem]">
      <div className="grid h-60 w-full place-items-center rounded-t-xl bg-card-secondary">
        <FiGithub className="h-24 w-full text-card-foreground" />
      </div>

      <div className="w-full p-6">
        <TypographyH3 className="w-full">
          <div className="flex justify-end">
            <div className="w-full">{repository.name}</div>
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center hover:text-card-foreground"
            >
              <PiLinkLight />
            </a>
          </div>
        </TypographyH3>

        <div className="flex">
          <TypographyP className="h-24 w-full pr-6 text-card-foreground">
            {repository.description}
          </TypographyP>
        </div>
        <div className="flex flex-wrap gap-2">
          {repository.topics.map((topic) => (
            <Badge variant="outline" key={topic}>
              {topic}
            </Badge>
          ))}
        </div>
        <div className="flex items-end">
          <LanguageIcon language={repository.language} />
          <TypographyP className="flex w-full content-end items-center justify-end gap-2">
            <CiCalendar />
            Updated {format(repository.updated_at, "MMMM yyyy")}
          </TypographyP>
        </div>
      </div>
    </div>
  );
};

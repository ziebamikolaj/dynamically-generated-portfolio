import type { Repository } from "@/schemas/repositorySchema";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
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
        {repository.preview ? (
          <img
            src={repository.preview}
            alt={repository.name}
            className="h-60 w-full rounded-t-xl border border-card object-cover"
          />
        ) : (
          <FiGithub className="h-24 w-full text-card-foreground" />
        )}
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
          <TypographyP className="w-full pr-6 text-card-foreground xl:h-28 ">
            {repository.description}
          </TypographyP>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {repository.topics.sort().map((topic) => (
            <Badge
              variant="outline"
              className="border-card-secondary  text-card-foreground"
              key={topic}
            >
              {topic}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex">
          <LanguageIcon language={repository.language} />

          <HoverCard>
            <div className="flex w-full justify-end">
              <HoverCardTrigger className="flex items-center gap-2">
                <CiCalendar />
                Updated {format(repository.pushed_at, "MMMM yyyy")}
              </HoverCardTrigger>
            </div>
            <HoverCardContent className="w-44 rounded-xl text-center text-foreground ">
              <TypographyP>
                Pushed on {format(repository.pushed_at, "dd-MM-yyyy")}
              </TypographyP>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

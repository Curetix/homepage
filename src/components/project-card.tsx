import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { GlobeIcon } from "lucide-react";
import { TechnologyBadge } from "@/components/technology-badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project: { name, description, source, website, technologies },
}: ProjectCardProps) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="flex gap-3">
          {source && (
            <a
              className={cn(buttonVariants({ variant: "link" }), "p-1")}
              href={source}
              target="_blank"
              rel="noreferrer">
              <SiGithub className="mr-2 h-4 w-4" />
              Source
            </a>
          )}
          {website && (
            <a
              className={cn(buttonVariants({ variant: "link" }), "p-1")}
              href={website}
              target={website.startsWith("http") ? "_blank" : undefined}>
              <GlobeIcon className="mr-2 h-4 w-4" />
              Visit
            </a>
          )}
        </div>
        <p>{description}</p>
        <div className="flex gap-1">
          {technologies?.map((t) => (
            <TechnologyBadge key={t.name} technology={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

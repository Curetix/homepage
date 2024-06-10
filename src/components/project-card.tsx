import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { GlobeIcon } from "lucide-react";
import { TechnologyBadge } from "@/components/technology-badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectImage } from "@/components/project-image";
import { ClientOnly } from "@/components/client-only";
import { Skeleton } from "@/components/ui/skeleton";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project: { name, description, source, website, technologies, images },
}: ProjectCardProps) {
  return (
    <Card className="hover:border-primary transition-colors">
      <div className="p-3">
        <ClientOnly fallback={<Skeleton className="w-full aspect-[16/9] rounded" />}>
          <ProjectImage projectName={name} images={images} className="border rounded shadow" />
        </ClientOnly>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
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
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <div className="flex gap-1">
          {technologies?.map((t) => (
            <TechnologyBadge key={t.name} technology={t} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

import type { Project } from "@/lib/data";
import { SiGithub } from "react-icons/si";
import { GlobeIcon } from "lucide-react";
import { TechnologyBadge } from "@/components/technology-badge";
import * as Card from "@/components/ui/card";
import { ProjectImage } from "@/components/project-image";
import { ClientOnly } from "@/components/client-only";
import { Skeleton } from "@/components/ui/skeleton";
import { css } from "styled-system/css";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import NextLink from "next/link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project: { name, description, source, website, technologies, images },
}: ProjectCardProps) {
  return (
    <Card.Root
      className={css({
        borderWidth: 1,
        borderColor: "transparent",
        transition: "colors",
        boxSizing: "border-box",
        _hover: {
          borderColor: "accent.emphasized",
        },
      })}>
      <div className={css({ p: 3 })}>
        <ClientOnly
          fallback={
            <Skeleton className={css({ width: "full", aspectRatio: 16 / 9, rounded: "sm" })} />
          }>
          <ProjectImage
            projectName={name}
            images={images}
            className={css({ borderWidth: 1, rounded: "sm", shadow: "sm" })}
          />
        </ClientOnly>
      </div>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <div className={css({ display: "flex", gap: 3 })}>
          {source && (
            <Button variant="link" asChild>
              <NextLink href={source} target="_blank" rel="noreferrer">
                <SiGithub />
                Source
              </NextLink>
            </Button>
          )}
          {website && (
            <Button variant="link" asChild>
              <NextLink href={website} target={website.startsWith("http") ? "_blank" : undefined}>
                <GlobeIcon />
                Visit
              </NextLink>
            </Button>
          )}
        </div>
      </Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Footer className={css({ display: "flex", gap: 1, justifyContent: "flex-start" })}>
        {technologies?.map((t) => (
          <TechnologyBadge key={t.name} technology={t} />
        ))}
      </Card.Footer>
    </Card.Root>
  );
}

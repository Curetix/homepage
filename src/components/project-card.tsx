import type { Project } from "@/lib/data";

import NextLink from "next/link";
import { HiGlobeAlt } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { css } from "styled-system/css";

import { ClientOnly } from "@/components/client-only";
import { ProjectImage } from "@/components/project-image";
import { TechnologyBadge } from "@/components/technology-badge";
import { Badge } from "@/components/ui/badge";
import * as Card from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { Skeleton } from "@/components/ui/skeleton";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({
  project: { name, description, source, website, technologies, images, isArchived },
}: ProjectCardProps) {
  return (
    <Card.Root
      className={css({
        shadow: "xs",
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
            <Skeleton className={css({ width: "full", aspectRatio: 16 / 9, rounded: "lg" })} />
          }>
          <ProjectImage
            projectName={name}
            images={images}
            className={css({ borderWidth: 1, rounded: "lg", shadow: "xs" })}
          />
        </ClientOnly>
      </div>
      <Card.Header>
        <Card.Title>
          {name}
          {isArchived && (
            <Badge ml={2} variant="subtle" colorPalette="red">
              Archived
            </Badge>
          )}
        </Card.Title>
        <div className={css({ display: "flex", gap: 3 })}>
          {source && (
            <Link asChild>
              <NextLink href={source} target="_blank" rel="noreferrer">
                <SiGithub />
                Source
              </NextLink>
            </Link>
          )}
          {website && (
            <Link asChild>
              <NextLink href={website} target={website.startsWith("http") ? "_blank" : undefined}>
                <HiGlobeAlt />
                Visit
              </NextLink>
            </Link>
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

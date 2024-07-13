import type { Technology } from "@/lib/data";

import NextLink from "next/link";

import { Badge } from "@/components/ui/badge";

type TechnologyBadgeProps = {
  technology: Technology;
};

export function TechnologyBadge({
  technology: { name, website, icon: Icon },
}: TechnologyBadgeProps) {
  return (
    <Badge asChild rel="noreferrer" display="flex">
      <NextLink href={website || "#"} target="_blank">
        {Icon && <Icon />}
        {name}
      </NextLink>
    </Badge>
  );
}

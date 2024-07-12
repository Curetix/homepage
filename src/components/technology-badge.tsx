import type { Technology } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { css } from "styled-system/css";
import NextLink from "next/link";

type TechnologyBadgeProps = {
  technology: Technology;
};

export function TechnologyBadge({
  technology: { name, website, icon: Icon, color },
}: TechnologyBadgeProps) {
  return (
    <Badge
      asChild
      //   className={badgeVariants({
      //     class: "group relative hover:shadow-xl shadow-[var(--color)]",
      //   })}
      rel="noreferrer"
      className={css({ display: "flex" })}>
      <NextLink href={website || "#"} target="_blank">
        {Icon && <Icon className="mr-1 transition-colors" />}
        {name}
      </NextLink>
    </Badge>
  );
}

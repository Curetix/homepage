import type { Technology } from "@/lib/data";
import { badgeVariants } from "./ui/badge";

type TechnologyBadgeProps = {
  technology: Technology;
};

export function TechnologyBadge({
  technology: { name, website, icon: Icon, color },
}: TechnologyBadgeProps) {
  return (
    <a
      href={website}
      target="_blank"
      // style={{ "--color": color || "white" }}
      className={badgeVariants({
        class: "group relative hover:shadow-xl shadow-[var(--color)]",
        // ...variantProps,
      })}
      rel="noreferrer">
      {Icon && <Icon className="mr-1 transition-colors" />}
      {name}
    </a>
  );
}

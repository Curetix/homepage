"use client";

import { useTheme } from "next-themes";
import Image, { type ImageProps } from "next/image";
import type { Project } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type ProjectImageProps = {
  projectName: string;
  images: Project["images"];
} & Omit<ImageProps, "src" | "alt">;

export function ProjectImage({ projectName, images, ...props }: ProjectImageProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const locale = "en";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images) return;

  if (!mounted) {
    return <Skeleton className={cn("w-full aspect-[16/9] rounded-full", props.className)} />;
  }

  return (
    <Image
      src={images[locale as string][resolvedTheme || "light"]}
      alt={`Screenshot of ${projectName}`}
      {...props}
    />
  );
}

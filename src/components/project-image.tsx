"use client";

import type { Project } from "@/lib/data";
import type { ImageProps } from "next/image";

import { useTheme } from "next-themes";
import Image from "next/image";

type ProjectImageProps = {
  projectName: string;
  images: Project["images"];
} & Omit<ImageProps, "src" | "alt">;

export function ProjectImage({ projectName, images, ...props }: ProjectImageProps) {
  const { resolvedTheme } = useTheme();
  const locale = "en";

  if (!images) return;

  return (
    <Image
      src={images[locale as string][resolvedTheme || "light"]}
      alt={`Screenshot of ${projectName}`}
      {...props}
    />
  );
}

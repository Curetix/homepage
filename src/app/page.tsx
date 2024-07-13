import NextLink from "next/link";
import { HiArrowDown, HiEnvelope } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { css } from "styled-system/css";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <main className={css({ display: "flex", flexDirection: "column" })}>
      <section
        id="hero"
        className={css({ width: "full", py: { base: 12, md: 24, lg: 32, xl: 48 } })}>
        <div className={css({ px: { base: 4, md: 6 } })}>
          <div
            className={css({
              display: "flex",
              flexDir: "column",
              alignItems: "center",
              spaceY: 4,
              textAlign: "center",
            })}>
            <div className={css({ spaceY: 2 })}>
              <h1
                className={css({
                  textAlign: "center",
                  fontSize: "4xl",
                  lineHeight: "3rem",
                  fontWeight: "bold",
                  dropShadow: "sm",
                  md: {
                    fontSize: "7xl",
                    lineHeight: "5rem",
                  },
                })}>
                {"Hi, I'm "}
                <span
                  className={css({
                    display: "inline-block",
                    color: "transparent",
                    bgClip: "text",
                    bgGradient: "to-b",
                    gradientFrom: "yellow.400",
                    gradientVia: "pink.600",
                    gradientTo: "violet.700",
                  })}>
                  Curetix
                </span>
              </h1>
              <p
                className={css({
                  mx: "auto",
                  textWrap: "balance",
                  textAlign: "center",
                  fontSize: "xl",
                  color: "fg.muted",
                  md: { fontSize: "2lx" },
                })}>
                I'm a developer who is currently focused on web projects
              </p>
            </div>
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                gap: 2,
                sm: { flexDir: "row", gap: 4 },
              })}>
              <Button asChild>
                <NextLink href="#projects">
                  <HiArrowDown />
                  Projects
                </NextLink>
              </Button>
              <Button asChild>
                <NextLink href="https://github.com/curetix">
                  <SiGithub />
                  GitHub
                </NextLink>
              </Button>
              <Button asChild>
                <NextLink href="mailto:contact@curetix.eu">
                  <HiEnvelope />
                  Contact
                </NextLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={css({
          mx: "auto",
          display: "flex",
          flexDir: "column",
          gap: 5,
          p: { base: 5, md: 10 },
        })}>
        <h2 className={css({ textAlign: "center", fontSize: "4xl" })}>Projects</h2>
        <div
          className={css({
            display: "grid",
            gap: 3,
            gridTemplateColumns: { base: 1, md: 2, xl: 3 },
          })}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <footer
        className={css({
          p: 6,
          mx: "auto",
        })}>
        <p className={css({ color: "fg.muted" })}>
          © Curetix {new Date().getFullYear()}. All rights reserved.{" "}
          <a
            className={css({
              textUnderlineOffset: 4,
              _hover: { textDecorationLine: "underline" },
            })}
            href="mailto:contact@curetix.eu">
            contact@curetix.eu
          </a>
        </p>
      </footer>
    </main>
  );
}

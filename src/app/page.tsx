import { buttonVariants } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowDownIcon, MailIcon } from "lucide-react";
import {projects} from "@/lib/data";
import {ProjectCard} from "@/components/project-card";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="bg-clip-text text-center text-4xl/[3rem] font-bold drop-shadow-sm md:text-7xl/[5rem]">
                  {"Hi, I'm "}
                  <span
                      className="inline-block bg-gradient-to-b from-yellow-400 via-pink-600 to-violet-700 bg-clip-text text-transparent">
                    Curetix
                  </span>
                </h1>
                <p className="mx-auto text-balance text-center text-xl text-muted-foreground md:text-2xl">
                  I'm a developer who is currently focused on web projects
                </p>
              </div>
              <div className="space-x-4">
                <a href="#projects" className={buttonVariants({size: "lg"})}>
                  <ArrowDownIcon className="mr-2 h-4 w-4"/>
                  Projects
                </a>
                <a
                    href="https://github.com/curetix"
                    target="_blank"
                    className={buttonVariants({size: "lg"})}
                    rel="noreferrer">
                  <SiGithub className="mr-2 h-4 w-4"/>
                  GitHub
                </a>
                <a href="mailto:contact@curetix.eu" className={buttonVariants({size: "lg"})}>
                  <MailIcon className="mr-2 h-4 w-4"/>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*<section id="projects" className="mx-auto flex flex-col gap-5">*/}
        {/*  <h1 className="bg-clip-text text-center text-4xl md:text-4xl">Projects</h1>*/}
        {/*  {projects.map((project) => <ProjectCard key={project.name} project={project}/>)}*/}
        {/*</section>*/}
      </main>

      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          © Curetix {new Date().getFullYear()}. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <a
            className="text-xs underline-offset-4 hover:underline"
            href="mailto:contact@curetix.eu">
            contact@curetix.eu
          </a>
        </nav>
      </footer>
    </div>
  );
}

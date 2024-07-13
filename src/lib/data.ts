import type { ImageProps } from "next/image";
import type { IconType } from "react-icons";

import {
  SiChakraui,
  SiCloudflarepages,
  SiMantine,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import livearchive_de_dark from "@/assets/livearchive_de_dark.png";
import livearchive_de_light from "@/assets/livearchive_de_light.png";
import livearchive_en_dark from "@/assets/livearchive_en_dark.png";
import livearchive_en_light from "@/assets/livearchive_en_light.png";
import mailflare_dark from "@/assets/mailflare_dark.png";
import mailflare_light from "@/assets/mailflare_light.png";
import polls_dark from "@/assets/polls_dark.png";
import polls_light from "@/assets/polls_light.png";
import { token } from "styled-system/tokens";

export type Technology = {
  name: string;
  website?: string;
  icon?: IconType;
  color?: string;
  class?: string;
};

export type Project = {
  name: string;
  website?: string;
  source?: string;
  description?: string;
  icon?: string;
  technologies?: Technology[];
  isArchived?: boolean;
  images?: {
    [lang: string]: {
      [theme: string]: ImageProps["src"];
    };
  };
};

export const technologies = {
  // Languages
  typescript: {
    name: "TypeScript",
    website: "https://typescriptlang.org",
    color: token("colors.blue.500"),
    icon: SiTypescript,
  },
  python: {
    name: "Python",
    website: "https://python.org",
    color: token("colors.yellow.400"),
    icon: SiPython,
  },

  // Web Frameworks
  react: {
    name: "React",
    website: "https://react.dev",
    color: token("colors.cyan.400"),
    icon: SiReact,
  },
  nextjs: {
    name: "Next.js",
    website: "https://nextjs.org",
    color: token("colors.white"),
    icon: SiNextdotjs,
  },

  // Styling frameworks & component libraries
  tailwind: {
    name: "Tailwind CSS",
    website: "https://tailwindcss.com/",
    color: token("colors.cyan.500"),
    icon: SiTailwindcss,
  },
  mantine: {
    name: "Mantine UI",
    website: "https://mantine.dev",
    color: token("colors.blue.400"),
    icon: SiMantine,
  },
  chakra: {
    name: "Chakra UI",
    website: "https://chakra-ui.com/",
    color: token("colors.teal.600"),
    icon: SiChakraui,
  },
  panda: {
    name: "Panda CSS",
    website: "https://panda-css.com/",
    color: token("colors.yellow.500"),
  },

  // Deployments
  vercel: {
    name: "Vercel ",
    website: "https://vercel.com",
    color: token("colors.white"),
    icon: SiVercel,
  },
  cloudflarePages: {
    name: "Cloudflare Pages",
    website: "https://www.cloudflare.com/developer-platform/pages",
    color: token("colors.orange.500"),
    icon: SiCloudflarepages,
  },

  // Others
  supabase: {
    name: "Supabase",
    website: "https://supabase.com",
    color: token("colors.emerald.400"),
    icon: SiSupabase,
  },
} as const satisfies Record<string, Technology>;

export const projects: Project[] = [
  {
    name: "LiveArchive Frontend",
    description:
      "Complete rewrite of the LiveArchive website with optimizations for mobile and many new features. Also working on a dashboard for users and partners.",
    website: "https://livearchive.net",
    technologies: [technologies.react, technologies.nextjs, technologies.chakra],
    images: {
      de: {
        dark: livearchive_de_dark,
        light: livearchive_en_light,
      },
      en: {
        dark: livearchive_en_dark,
        light: livearchive_en_light,
      },
    },
  },
  // {
  //   name: "LiveArchive Dashboard (WIP)",
  //   description: "User dashboard to manage account and channel settings, videos, teams, ...",
  //   technologies: [
  //     technologies.react,
  //     technologies.nextjs,
  //     technologies.tailwind,
  //     technologies.shadcnui,
  //   ],
  // },
  {
    name: "MailFlare",
    description:
      "Chrome and Firefox extension to use Cloudflare Email Routing as an email alias service.",
    website: "https://mailflare.pages.dev",
    source: "https://github.com/curetix/mailflare-extension",
    technologies: [
      technologies.react,
      technologies.mantine,
      // technologies.cloudflarePages
    ],
    images: {
      de: {
        dark: mailflare_dark,
        light: mailflare_light,
      },
      en: {
        dark: mailflare_dark,
        light: mailflare_light,
      },
    },
  },
  {
    name: "Supabase Polls",
    description:
      "My first React project, a simple website to create polls, vote in them and view their results in realtime.",
    website: "https://supabase-polls.vercel.app",
    source: "https://github.com/curetix/supabase-polls",
    isArchived: true,
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.chakra,
      technologies.supabase,
      // technologies.vercel,
    ],
    images: {
      de: {
        dark: polls_dark,
        light: polls_light,
      },
      en: {
        dark: polls_dark,
        light: polls_light,
      },
    },
  },
  {
    name: "Webfiction Scraper",
    description:
      "Command-line utility that scrapes web serials and creates an eBook for the eReader of your choice.",
    source: "https://github.com/curetix/webfiction-scraper",
    technologies: [technologies.python],
  },
  {
    name: "Homepage",
    description:
      "The website you're currently looking at, where I'm experimenting with Panda CSS and Park UI.",
    website: "#hero",
    source: "https://github.com/curetix/portfolio",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.panda,
      // technologies.vercel,
    ],
  },
];

import type { IconType } from "react-icons";
import type { ImageProps } from "next/image";

import colors from "tailwindcss/colors";
import {
  // SiAstro,
  // SiBun,
  SiChakraui,
  // SiCloudflarepages,
  SiMantine,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  // SiVercel,
} from "react-icons/si";

import livearchive_de_dark from "@/assets/livearchive_de_dark.png";
import livearchive_de_light from "@/assets/livearchive_de_light.png";
import livearchive_en_dark from "@/assets/livearchive_en_dark.png";
import livearchive_en_light from "@/assets/livearchive_en_light.png";
import mailflare_dark from "@/assets/mailflare_dark.png";
import mailflare_light from "@/assets/mailflare_light.png";
import polls_dark from "@/assets/polls_dark.png";
import polls_light from "@/assets/polls_light.png";

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
    color: colors.blue["500"],
    icon: SiTypescript,
  },
  python: {
    name: "Python",
    website: "https://python.org",
    color: colors.yellow["400"],
    icon: SiPython,
  },

  // Web Frameworks
  react: {
    name: "React",
    website: "https://react.dev",
    color: colors.cyan["400"],
    icon: SiReact,
  },
  nextjs: {
    name: "Next.js",
    website: "https://nextjs.org",
    color: colors.white,
    icon: SiNextdotjs,
  },

  // Styling frameworks & component libraries
  tailwind: {
    name: "Tailwind CSS",
    website: "https://tailwindcss.com/",
    color: colors.cyan["500"],
    icon: SiTailwindcss,
  },
  mantine: {
    name: "Mantine UI",
    website: "https://mantine.dev",
    color: colors.blue["400"],
    icon: SiMantine,
  },
  chakra: {
    name: "Chakra UI",
    website: "https://chakra-ui.com/",
    color: colors.teal["600"],
    icon: SiChakraui,
  },
  shadcnui: {
    name: "shadcn/ui",
    website: "https://ui.shadcn.com",
    color: colors.white,
    icon: SiShadcnui,
  },

  // Deployments
  // vercel: {
  //   name: "Vercel ",
  //   website: "https://vercel.com",
  //   color: colors.white,
  //   icon: SiVercel,
  // },
  // cloudflarePages: {
  //   name: "Cloudflare Pages",
  //   website: "https://www.cloudflare.com/developer-platform/pages",
  //   color: colors.orange["500"],
  //   icon: SiCloudflarepages,
  // },

  // Others
  // bun: {
  //   name: "Bun",
  //   website: "https://bun.sh/",
  //   color: colors.orange["100"],
  //   icon: SiBun,
  // },
  // plasmo: {
  //   name: "Plasmo",
  //   website: "https://plasmo.com",
  //   color: colors.white,
  // },
  // vidstack: {
  //   name: "Vidstack Player",
  //   website: "https://vidstack.io",
  //   color: colors.white,
  // },
  supabase: {
    name: "Supabase",
    website: "https://supabase.com",
    color: colors.emerald["400"],
    icon: SiSupabase,
  },
} as const satisfies Record<string, Technology>;

export const projects: Project[] = [
  {
    name: "LiveArchive",
    description:
      "Complete rewrite of the LiveArchive website with modern technologies and many new features.",
    website: "https://livearchive.net",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.chakra,
      // technologies.vidstack,
    ],
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
      // technologies.plasmo,
      technologies.mantine,
      // technologies.cloudflarePages,
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
    name: "Portfolio",
    description: "The website you're currently looking at :)",
    website: "#hero",
    source: "https://github.com/curetix/portfolio",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.tailwind,
      // technologies.vercel
    ],
  },
];

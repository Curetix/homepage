import colors from "tailwindcss/colors";

export type Technology = {
  name: string;
  website?: string;
  icon?: string;
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
  image?: string;
};

export const technologies = {
  // Languages
  typescript: {
    name: "TypeScript",
    website: "https://typescriptlang.org",
    color: colors.blue["500"],
    icon: "simple-icons:typescript",
  },
  python: {
    name: "Python",
    website: "https://python.org",
    color: colors.yellow["400"],
    icon: "simple-icons:python",
  },

  // Web Frameworks
  react: {
    name: "React",
    website: "https://react.dev",
    color: colors.cyan["400"],
    icon: "simple-icons:react",
  },
  nextjs: {
    name: "Next.js",
    website: "https://nextjs.org",
    color: colors.white,
    icon: "simple-icons:nextdotjs",
  },
  astro: {
    name: "Astro",
    website: "https://astro.build",
    color: colors.fuchsia["500"],
    icon: "simple-icons:astro",
  },

  // Styling frameworks & component libraries
  tailwind: {
    name: "Tailwind CSS",
    website: "https://tailwindcss.com/",
    color: colors.cyan["500"],
    icon: "simple-icons:tailwindcss",
  },
  mantine: {
    name: "Mantine UI",
    website: "https://mantine.dev",
    color: colors.blue["400"],
    icon: "simple-icons:mantine",
  },
  chakra: {
    name: "Chakra UI",
    website: "https://chakra-ui.com/",
    color: colors.teal["600"],
    icon: "simple-icons:chakraui",
  },
  shadcnui: {
    name: "shadcn/ui",
    website: "https://ui.shadcn.com",
    color: colors.white,
    icon: "simple-icons:shadcnui",
  },

  // Deployments
  vercel: {
    name: "Vercel ",
    website: "https://vercel.com",
    color: colors.white,
    icon: "simple-icons:vercel",
  },
  cloudflarePages: {
    name: "Cloudflare Pages",
    website: "https://www.cloudflare.com/developer-platform/pages",
    color: colors.orange["500"],
    icon: "simple-icons:cloudflarepages",
  },

  // Others
  bun: {
    name: "Bun",
    website: "https://bun.sh/",
    color: colors.orange["100"],
    icon: "simple-icons:bun",
  },
  plasmo: {
    name: "Plasmo",
    website: "https://plasmo.com",
    color: colors.white,
  },
  vidstack: {
    name: "Vidstack Player",
    website: "https://vidstack.io",
    color: colors.white,
  },
  supabase: {
    name: "Supabase",
    website: "https://supabase.com",
    color: colors.emerald["400"],
    icon: "simple-icons:supabase",
  },
} as const satisfies Record<string, Technology>;

export const projects: Project[] = [
  {
    name: "LiveArchive",
    description:
      "Complete rewrite of the LiveArchive website with modern technologies and many new features.",
    website: "https://livearchive.net",
    image: "/src/assets/livearchive_{locale}_{color}.png",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.chakra,
      // technologies.vidstack,
    ],
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
    image: "/src/assets/mailflare_{color}.png",
    technologies: [
      technologies.react,
      // technologies.plasmo,
      technologies.mantine,
      // technologies.cloudflarePages,
    ],
  },
  {
    name: "Supabase Polls",
    description:
      "My first React project, a simple website to create polls, vote in them and view their results in realtime.",
    website: "https://supabase-polls.vercel.app",
    source: "https://github.com/curetix/supabase-polls",
    image: "/src/assets/polls_{color}.png",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.chakra,
      technologies.supabase,
      // technologies.vercel,
    ],
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

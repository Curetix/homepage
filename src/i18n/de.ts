import type en from "./en";

export default {
  hero: {
    title: "Hi, ich bin",
    introduction: "Ich bin ein Entwickler, der gerade auf Web-Projekte fokussiert wird.",
    projectLink: "Projekte",
    githubLink: "GitHub",
    contactLink: "Kontakt",
  },
  footer: {
    copyright: "Alle Rechte vorbehalten.",
  },
  themeSwitcher: {
    title: "Farbmodus wechseln",
    themeLight: "Hell",
    themeDark: "Dunkel",
    themeSystem: "System",
  },
  localeSwitcher: {
    title: "Sprache wechseln",

    english: "English (Englisch)",
    german: "Deutsch",
  },
  projects: {
    title: "Projekte",
    visitLink: "Besuchen",
    sourceLink: "Quellcode",
  },
} satisfies typeof en;

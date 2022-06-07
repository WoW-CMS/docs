import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { hopeTheme } from "vuepress-theme-hope";
import { navbarEn, navbarEs, sidebarEn, sidebarEs } from './configs';

export default defineUserConfig({
  base: "/docs/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/docs/boxicons/boxicons.min.css"
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "WoW-CMS Docs",
      description: "",
    },
    "/es/": {
      lang: "es-ES",
      title: "WoW-CMS Docs",
      description: "",
    },
  },

  theme: hopeTheme({
    title: "WoW-CMS Docs",

    docsDir: "src",

    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      "/es/": {
        navbar: navbarEs,
        sidebar: sidebarEs,
      },
    },

    fullscreen: true,

    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
  }),

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/es/": {
          placeholder: "Buscar",
        },
      },
    }),
  ],
});

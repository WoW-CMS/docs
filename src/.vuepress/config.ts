import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { hopeTheme } from "vuepress-theme-hope";
import { navbarEn, navbarEs, sidebarEn, sidebarEs } from './configs';

const base = (process.env.BASE as "/" | `/${string}/`) || "/";
const hostname = process.env.HOSTNAME || "https://wow-cms.github.io";

export default defineUserConfig({
  base,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: `${base}favicon.ico`
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: `${base}boxicons/boxicons.min.css`
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "WoW-CMS Docs",
      description: "Documentation for WoW-CMS projects",
    },
    "/es/": {
      lang: "es-ES",
      title: "WoW-CMS Docs",
      description: "Documentación para proyectos de WoW-CMS",
    },
  },

  theme: hopeTheme({
    hostname,

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

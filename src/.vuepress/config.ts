import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index.js";
import * as sidebar from "./sidebar/index.js";

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
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      "/es/": {
        navbar: navbar.es,
        sidebar: sidebar.es,
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

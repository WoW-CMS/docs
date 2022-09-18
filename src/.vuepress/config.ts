import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

const base = process.env.BASE || "/";
const hostname = process.env.HOSTNAME || "https://wow-cms.github.io/";

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

  theme,

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

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = process.env.BASE || "/";

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
        href: `${base}assets/boxicons/boxicons.min.css`
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
    shikiPlugin({
      themes: {
        light: "material-theme-lighter",
        dark: "material-theme-darker",
      },
    }),
  ],
});

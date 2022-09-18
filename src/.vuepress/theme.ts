import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index.js";
import * as sidebar from "./sidebar/index.js";

export default hopeTheme({
    hostname,

    docsDir: "src",

    fullscreen: true,

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

    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
});
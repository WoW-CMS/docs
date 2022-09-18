import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index";
import * as sidebar from "./sidebar/index";

const hostname = process.env.HOSTNAME || "https://wow-cms.github.io";

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

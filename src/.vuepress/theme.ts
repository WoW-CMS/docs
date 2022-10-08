import { hopeTheme } from "vuepress-theme-hope";
import { navbarEn, navbarEs } from "./navbar/index.js";
import { sidebarEn, sidebarEs } from "./sidebar/index.js";

const hostname = process.env.HOSTNAME || "https://wow-cms.github.io";

export default hopeTheme({
    hostname,

    docsDir: "src",

    fullscreen: true,

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

    plugins: {
      mdEnhance: {
        tabs: true,
      },
    },
});

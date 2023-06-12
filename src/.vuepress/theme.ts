import { hopeTheme } from "vuepress-theme-hope";
import { enNavbarConfig, esNavbarConfig } from "./navbar/index.js";
import { enSidebarConfig, esSidebarConfig } from "./sidebar/index.js";

const hostname = process.env.HOSTNAME || "https://wow-cms.github.io";

export default hopeTheme({
    hostname,

    docsDir: "src",

    darkmode: "enable",

    locales: {
      "/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,
      },
      "/es/": {
        navbar: esNavbarConfig,
        sidebar: esSidebarConfig,
      },
    },

    plugins: {
      mdEnhance: {
        attrs: true,
        codetabs: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        tabs: true,
      },
    },
});

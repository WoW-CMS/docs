import { navbar } from "vuepress-theme-hope";

export const esNavbarConfig = navbar([
  {
    text: "Inicio",
    icon: "bx bxs-home",
    link: "/es/",
  },
  {
    text: "Proyectos",
    icon: "bx bx-library",
    children: [
      {
        text: "CMS",
        children: [
          {
            text: "BlizzCMS",
            icon: "bx bx-radio-circle-marked",
            link: "/es/blizzcms/",
          },
          {
            text: "BlizzCMS Plus",
            icon: "bx bx-radio-circle-marked",
            link: "/es/1.x/",
          },
        ],
      },
    ],
  },
  {
    text: "Más",
    icon: "bx bx-list-plus",
    children: [
      {
        text: "Sitio web",
        icon: "bx bxs-zap",
        link: "https://wow-cms.com",
      },
      {
        text: "Discord",
        icon: "bx bxl-discord-alt",
        link: "https://discord.wow-cms.com",
      },
      {
        text: "Ko-fi",
        icon: "bx bxs-donate-heart",
        link: "https://ko-fi.com/wowcms",
      },
    ],
  },
]);

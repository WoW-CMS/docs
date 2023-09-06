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
    text: "More",
    icon: "bx bx-list-plus",
    children: [
      {
        text: "Noticias",
        children: [
          {
            text: "WoW-CMS Noticias",
            icon: "bx bxs-news",
            link: "https://wow-cms.com/news",
          },
        ],
      },
      {
        text: "Redes Sociales",
        children: [
          {
            text: "WoW-CMS Discord",
            icon: "bx bxl-discord-alt",
            link: "https://discord.wow-cms.com",
          },
        ],
      },
    ],
  },
]);

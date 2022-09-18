import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  {
    text: "Home",
    icon: "bx bxs-home",
    link: "/",
  },
  {
    text: "Projects",
    icon: "bx bx-library",
    children: [
      {
        text: "CMS",
        children: [
          {
            text: "BlizzCMS",
            icon: "bx bx-radio-circle-marked",
            link: "/blizzcms/",
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
        text: "News",
        children: [
          {
            text: "WoW-CMS News",
            icon: "bx bxs-news",
            link: "https://wow-cms.com/news",
          },
        ],
      },
      {
        text: "Social",
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

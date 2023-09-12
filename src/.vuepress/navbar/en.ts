import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
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
          {
            text: "BlizzCMS Plus",
            icon: "bx bx-radio-circle-marked",
            link: "/1.x/",
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
        text: "Website",
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

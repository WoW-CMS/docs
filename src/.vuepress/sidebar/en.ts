import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

export const sidebarEn: HopeThemeSidebarConfig = {
  "/": [
    "",
    {
      text: "BlizzCMS",
      icon: "",
      prefix: "blizzcms/",
      children: [
        "getting-started",
        "guides/",
        "structure/",
        "developer/",
        "changelogs/",
      ],
    },
  ],

  "/blizzcms/": [
    "",
    "getting-started",
    {
      text: "Guides",
      icon: "bx bxs-book-reader",
      prefix: "guides/",
      collapsible: true,
      children: [
        {
          text: "Linux",
          icon: "bx bxl-tux",
          prefix: "linux/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Troubleshooting",
          icon: "bx bxs-book-bookmark",
          prefix: "troubleshooting/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Structure",
      icon: "bx bxs-layer",
      prefix: "structure/",
      collapsible: true,
      children: [
        "constants",
        "database",
        {
          text: "Functions",
          icon: "bx bx-code",
          prefix: "functions/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Libraries",
          icon: "bx bx-library",
          prefix: "libraries/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Models",
          icon: "bx bx-transfer",
          prefix: "models/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Developer",
      icon: "bx bxs-layer-plus",
      prefix: "developer/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Changelogs",
      icon: "bx bxs-box",
      prefix: "changelogs/",
      collapsible: true,
      children: "structure",
    },
  ],
}

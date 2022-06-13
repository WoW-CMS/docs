import { sidebar } from "vuepress-theme-hope";

export const sidebarEn = sidebar({
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
      collapsable: true,
      children: [
        {
          text: "Linux",
          icon: "bx bxl-tux",
          prefix: "linux/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "Windows",
          icon: "bx bxl-windows",
          prefix: "windows/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Structure",
      icon: "bx bxs-layer",
      prefix: "structure/",
      collapsable: true,
      children: [
        "constants",
        "database",
        {
          text: "Functions",
          icon: "bx bx-code",
          prefix: "functions/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "Libraries",
          icon: "bx bx-library",
          prefix: "libraries/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "Models",
          icon: "bx bx-transfer",
          prefix: "models/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Developer",
      icon: "bx bxs-layer-plus",
      prefix: "developer/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "Changelogs",
      icon: "bx bxs-box",
      prefix: "changelogs/",
      collapsable: true,
      children: "structure",
    },
  ],
});

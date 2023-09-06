import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
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
    {
      text: "BlizzCMS Plus",
      icon: "",
      prefix: "1.x/",
      children: [
        "getting-started",
        "guides/",
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
          text: "Contributions",
          icon: "bx bxl-git",
          prefix: "contributions/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Database",
          icon: "bx bxs-data",
          prefix: "database/",
          collapsible: true,
          children: "structure",
        },
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
          text: "Core",
          icon: "bx bxs-cog",
          prefix: "core/",
          collapsible: true,
          children: "structure",
        },
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

  "/1.x/": [
    "",
    "getting-started",
    {
      text: "Guides",
      icon: "bx bxs-book-reader",
      prefix: "guides/",
      collapsible: true,
      children: "structure",
    },
  ],
});

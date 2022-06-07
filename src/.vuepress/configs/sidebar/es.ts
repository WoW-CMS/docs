import { sidebar } from "vuepress-theme-hope";

export const sidebarEs = sidebar({
  "/es/": [
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

  "/es/blizzcms/": [
    "",
    "getting-started",
    {
      text: "Guías",
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
      text: "Estructura",
      icon: "bx bxs-layer",
      prefix: "structure/",
      collapsable: true,
      children: [
        "constants",
        "database",
        {
          text: "Funciones",
          icon: "bx bx-code-block",
          prefix: "functions/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "Librerías",
          icon: "bx bx-library",
          prefix: "libraries/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Desarrollador",
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

export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "Sutisna Santosa",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Sutisna Santosa | All rights reserved.",
    social: {
      twitter: "https://x.com/dedengine",
      github: "https://github.com/dedengine",
      discord: "https://discord.gg/ZKxnmeQgkR",
      instagram: "https://www.instagram.com/heatman_bae/",
      tiktok: "https://www.tiktok.com/@dedengine"
    }
  }
} as const; 
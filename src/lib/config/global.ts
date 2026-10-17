import { derived } from 'svelte/store'
import { language } from '../stores/language'

const en = {
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
}

const id = {
  site: {
    name: "Your Portfolio Name",
    author: "Sutisna Santosa",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Navigasi Utama",
    items: [
      {
        title: "Beranda",
        href: "/"
      },
      {
        title: "Proyek",
        href: "/projects"
      },
      {
        title: "Artikel",
        href: "/posts"
      },
      {
        title: "Tentang",
        href: "/about"
      }
    ]
  },
  theme: {
    dayMode: "Mode terang",
    nightMode: "Mode gelap"
  },
  footer: {
    aria: "Navigasi Footer",
    copyright: "© 2026 Sutisna Santosa | Hak cipta dilindungi.",
    social: {
      twitter: "https://x.com/dedengine",
      github: "https://github.com/dedengine",
      discord: "https://discord.gg/ZKxnmeQgkR",
      instagram: "https://www.instagram.com/heatman_bae/",
      tiktok: "https://www.tiktok.com/@dedengine"
    }
  }
}

export const globalConfig = derived(language, ($lang) => ($lang === 'id' ? id : en))

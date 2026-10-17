import { derived } from 'svelte/store'
import { language } from '../stores/language'

const en = {
  title: "Our Projects",
  description: "A selection of projects I've designed and built, from dashboards and data visualizations to developer tools.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  pagination: {
    previous: "Previous",
    next: "Next"
  },
  items: [
    {
      title: "Analytics Dashboard",
      description: "Real-time metrics with interactive charts.",
      href: "#!",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "Game Library UI",
      description: "Dark-themed game library with fast filtering.",
      href: "#!",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "Realtime Chart Kit",
      description: "Reusable chart components, built for speed.",
      href: "#!",
      imageUrl: "/assets/images/projects/project3.png"
    },
    {
      title: "Trading Terminal",
      description: "Live candlesticks and order book views.",
      href: "#!",
      imageUrl: "/assets/images/projects/project4.jpg"
    },
    {
      title: "Infrastructure Monitor",
      description: "Server health, traffic, and deploy status.",
      href: "#!",
      imageUrl: "/assets/images/projects/project5.jpg"
    },
    {
      title: "Data Viz Playground",
      description: "Experimental 3D charts rendered with WebGL.",
      href: "#!",
      imageUrl: "/assets/images/projects/project6.png"
    },
    {
      title: "Developer Portal",
      description: "Docs, onboarding, and tooling for dev teams.",
      href: "#!",
      imageUrl: "/assets/images/projects/project7.jpg"
    },
    {
      title: "Static Blog Engine",
      description: "Markdown blog engine with full-text search.",
      href: "#!",
      imageUrl: "/assets/images/projects/project8.jpg"
    },
    {
      title: "Hackathon Platform",
      description: "Registration, schedule, and project gallery.",
      href: "#!",
      imageUrl: "/assets/images/projects/project9.jpg"
    },
    {
      title: "Product Landing Page",
      description: "Conversion-focused page with scroll motion.",
      href: "#!",
      imageUrl: "/assets/images/projects/project10.jpg"
    },
    {
      title: "Studio Dashboard",
      description: "Client tracking with time logs and invoices.",
      href: "#!",
      imageUrl: "/assets/images/projects/project11.jpg"
    },
    {
      title: "Keyboard Configurator",
      description: "Remap keys, layers, and lighting in-browser.",
      href: "#!",
      imageUrl: "/assets/images/projects/project12.jpg"
    }
  ]
}

const id = {
  title: "Proyek Saya",
  description: "Kumpulan proyek yang saya desain dan bangun, dari dasbor dan visualisasi data hingga alat bantu developer.",
  backButton: "Kembali ke Beranda",
  noProjects: "Proyek tidak ditemukan.",
  pagination: {
    previous: "Sebelumnya",
    next: "Berikutnya"
  },
  items: [
    {
      title: "Dasbor Analitik",
      description: "Metrik real-time dengan grafik interaktif.",
      href: "#!",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "Antarmuka Pustaka Game",
      description: "Pustaka game bertema gelap dengan filter cepat.",
      href: "#!",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "Kit Grafik Real-Time",
      description: "Komponen grafik yang bisa dipakai ulang, dibangun untuk kecepatan.",
      href: "#!",
      imageUrl: "/assets/images/projects/project3.png"
    },
    {
      title: "Terminal Trading",
      description: "Candlestick langsung dan tampilan order book.",
      href: "#!",
      imageUrl: "/assets/images/projects/project4.jpg"
    },
    {
      title: "Pemantau Infrastruktur",
      description: "Kesehatan server, lalu lintas, dan status deploy.",
      href: "#!",
      imageUrl: "/assets/images/projects/project5.jpg"
    },
    {
      title: "Playground Visualisasi Data",
      description: "Grafik 3D eksperimental yang dirender dengan WebGL.",
      href: "#!",
      imageUrl: "/assets/images/projects/project6.png"
    },
    {
      title: "Portal Developer",
      description: "Dokumentasi, onboarding, dan perkakas untuk tim developer.",
      href: "#!",
      imageUrl: "/assets/images/projects/project7.jpg"
    },
    {
      title: "Mesin Blog Statis",
      description: "Mesin blog Markdown dengan pencarian teks lengkap.",
      href: "#!",
      imageUrl: "/assets/images/projects/project8.jpg"
    },
    {
      title: "Platform Hackathon",
      description: "Pendaftaran, jadwal, dan galeri proyek.",
      href: "#!",
      imageUrl: "/assets/images/projects/project9.jpg"
    },
    {
      title: "Landing Page Produk",
      description: "Halaman fokus konversi dengan animasi scroll.",
      href: "#!",
      imageUrl: "/assets/images/projects/project10.jpg"
    },
    {
      title: "Dasbor Studio",
      description: "Pelacakan klien dengan catatan waktu dan faktur.",
      href: "#!",
      imageUrl: "/assets/images/projects/project11.jpg"
    },
    {
      title: "Konfigurator Keyboard",
      description: "Atur ulang tombol, layer, dan pencahayaan di browser.",
      href: "#!",
      imageUrl: "/assets/images/projects/project12.jpg"
    }
  ]
}

export const projectsConfig = derived(language, ($lang) => ($lang === 'id' ? id : en))

import { derived } from 'svelte/store'
import { language } from '../stores/language'

const en = {
  greeting: "I build web experiences that feel effortless.",
  description: "Sutisna Santosa as a frontend developer with an eye for design and detail.",
  buttons: {
    viewProjects: "View Projects",
    readPosts: "Read Posts",
    viewAbout: "View About"
  }
}

const id = {
  greeting: "Saya membangun pengalaman web yang terasa ringan.",
  description: "Sutisna Santosa, frontend developer dengan perhatian pada desain dan detail.",
  buttons: {
    viewProjects: "Lihat Proyek",
    readPosts: "Baca Artikel",
    viewAbout: "Tentang Saya"
  }
}

export const homeConfig = derived(language, ($lang) => ($lang === 'id' ? id : en))

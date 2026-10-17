import { writable } from 'svelte/store'

export type ThemeName = 'light' | 'dark'

// Same behavior as the template's next-themes setup: default dark, follow the
// system preference until the user picks a theme.
function resolveInitial(): ThemeName {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

const store = writable<ThemeName>(resolveInitial())

store.subscribe((value) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value === 'dark')
  localStorage.setItem('theme', value)
})

export const theme = store

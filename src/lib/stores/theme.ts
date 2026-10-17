import { writable, get } from 'svelte/store'

export type ThemeName = 'light' | 'dark'

// Only a manual pick is stored (like next-themes); until then the device theme wins.
const STORAGE_KEY = 'theme-choice'

function deviceTheme(): ThemeName {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveInitial(): ThemeName {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return deviceTheme()
}

const store = writable<ThemeName>(resolveInitial())

store.subscribe((value) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value === 'dark')
})

// Keep following the device while the user has not picked a theme
if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem(STORAGE_KEY)) store.set(event.matches ? 'dark' : 'light')
  })
}

export const theme = {
  subscribe: store.subscribe,
  set(value: ThemeName) {
    localStorage.setItem(STORAGE_KEY, value)
    store.set(value)
  },
  update(fn: (value: ThemeName) => ThemeName) {
    theme.set(fn(get(store)))
  }
}

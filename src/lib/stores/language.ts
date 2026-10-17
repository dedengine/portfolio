import { writable } from 'svelte/store'

export type Lang = 'en' | 'id'

// Default is English; only the visitor's own pick is remembered.
const stored = typeof localStorage === 'undefined' ? null : localStorage.getItem('lang')

const store = writable<Lang>(stored === 'id' ? 'id' : 'en')

store.subscribe((value) => {
  if (typeof document !== 'undefined') document.documentElement.lang = value
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', value)
})

export const language = store

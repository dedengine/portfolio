<script lang="ts">
  import { theme } from '../stores/theme';
  import { globalConfig } from '../config/global';

  function toggle() {
    theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }
</script>

<button
  type="button"
  onclick={toggle}
  class="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
  aria-label={`Switch to ${$theme === 'dark' ? 'light' : 'dark'} mode`}
>
  <div class="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
    <svg
      class={`absolute w-6 h-6 transition duration-700 transform ease ${$theme === 'dark' ? 'hidden' : ''}`}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
    <svg
      class={`absolute w-6 h-6 transition duration-700 transform ease ${$theme === 'light' ? 'hidden' : ''}`}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
    </svg>
  </div>
  <span class="hidden sm:inline-block">
    <span class={`ml-2 ${$theme === 'dark' ? 'hidden' : ''}`}>{globalConfig.theme.dayMode}</span>
    <span class={`ml-2 ${$theme === 'light' ? 'hidden' : ''}`}>{globalConfig.theme.nightMode}</span>
  </span>
</button>

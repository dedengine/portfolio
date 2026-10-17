<script lang="ts">
  import { language } from '../stores/language';

  const names = { en: 'English', id: 'Bahasa Indonesia' } as const;

  function toggle() {
    language.update((value) => (value === 'en' ? 'id' : 'en'));
  }
</script>

<button
  type="button"
  onclick={toggle}
  class="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
  aria-label={`Switch to ${$language === 'en' ? names.id : names.en}`}
>
  <div class="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z"></path>
    </svg>
  </div>
  <span class="hidden md:inline-block ml-2">
    {$language === 'en' ? names.en : names.id}
  </span>
</button>

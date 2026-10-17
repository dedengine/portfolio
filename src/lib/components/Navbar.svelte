<script lang="ts">
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import ThemeToggle from './ThemeToggle.svelte';
  import { globalConfig } from '../config/global';

  let isMenuOpen = $state(false);
  let scrolled = $state(false);
  let currentPath = $state('/');

  function syncPath() {
    currentPath = (window.location.hash || '#/').replace(/^#/, '');
  }

  onMount(() => {
    syncPath();
    window.addEventListener('hashchange', syncPath);

    const onScroll = () => (scrolled = window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', syncPath);
      window.removeEventListener('scroll', onScroll);
    };
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function isActive(path: string) {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  }
</script>

<header id="header" class={`fixed top-0 left-0 z-50 w-full h-20 ${scrolled ? 'bg-white/80 backdrop-blur-md dark:bg-neutral-950/80' : ''}`}>
  <div class="flex items-center justify-between h-full max-w-7xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
    <a use:link href="/" class="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold whitespace-nowrap">
      <span class="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
      <span class="-translate-y-0.5">{globalConfig.site.author}</span>
    </a>

    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <div
      id="mobileMenuBackground"
      onclick={closeMenu}
      class={`fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90 ${isMenuOpen ? 'block' : 'hidden'}`}
    ></div>

    <nav class="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
      <div
        id="openMenu"
        onclick={toggleMenu}
        class={`flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`}
      >
        <svg class="w-8 h-8 dark:text-neutral-200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 8h16M4 16h16"></path>
        </svg>
      </div>

      <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
      <div
        id="closeMenu"
        onclick={toggleMenu}
        class={`flex flex-col items-end justify-center w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>

      <div
        id="menu"
        class={`fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start ${isMenuOpen ? 'flex' : 'hidden'} w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0`}
      >
        <div class="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
          <div class="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
        </div>

        {#each globalConfig.navigation.items as item}
          <a
            use:link
            href={item.href}
            onclick={closeMenu}
            class={`relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white ${isActive(item.href) ? 'text-neutral-900 dark:text-white' : ''}`}
          >
            {item.title}
          </a>
        {/each}
      </div>

      <ThemeToggle />
    </nav>
  </div>
</header>

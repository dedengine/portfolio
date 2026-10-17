<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import { aboutConfig } from '../lib/config/about';

  let connectParts = $derived($aboutConfig.connect.description.split($aboutConfig.connect.links.twitter.text));
  let skillsExpanded = $state(false);
</script>

<main class="min-h-screen flex flex-col">
  <div class="relative flex-grow flex flex-col">
    <div class="page-backdrop absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
      <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-15 blur-[100px]"></div>
    </div>

    <Navbar />

    <section class="about-section relative z-20 w-[896px] mx-auto mt-32 mb-12">
      <div class="relative z-20 w-full mx-auto lg:mx-0">
        <h2 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {$aboutConfig.title}
        </h2>
        <div class="flex flex-col md:flex-row gap-8 mt-3 sm:mt-4 lg:mt-6">
          <div class="w-full md:w-1/2 flex flex-col">
            <p class="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {$aboutConfig.description}
            </p>
            <div class="about-skills mt-auto pt-4 flex flex-wrap gap-2" class:skills-expanded={skillsExpanded}>
              {#each $aboutConfig.skills as skill, index}
                <span class="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                  {skill}
                </span>
              {/each}
              <button
                type="button"
                class="about-skills-toggle sm:hidden"
                aria-expanded={skillsExpanded}
                onclick={() => (skillsExpanded = !skillsExpanded)}
              >
                {skillsExpanded ? $aboutConfig.skillsLess : $aboutConfig.skillsMore}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div class="about-photo-col w-full md:w-1/2 flex justify-end">
            <div class="about-photo relative w-[360px] h-[360px]">
              <img src="/assets/images/about/coder.jpg" alt="Profile" class="object-cover rounded-xl w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div class="about-sections flex flex-col md:flex-row mt-20">
        <div class="about-timeline flex-1">
          <h2 class="mb-2 text-2xl font-bold dark:text-neutral-200">
            {$aboutConfig.experience.title}
          </h2>
          <div class="py-10">
            {#each $aboutConfig.experience.items as item, index}
              <div class="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div class="relative flex flex-col justify-start pl-12">
                  <div class="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <svg class="w-8 h-8 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p class="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{item.period}</p>
                  <h3 class="my-1 text-lg font-bold dark:text-neutral-100">{item.role}</h3>
                  <p class="mb-1 text-sm font-medium dark:text-neutral-300">{item.company}</p>
                  <p class="text-sm font-light text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <div class="about-connect w-[360px] ml-8">
          <h2 class="mb-2 text-2xl font-bold dark:text-neutral-200">{$aboutConfig.connect.title}</h2>
          <div class="py-[30px]">
            <p class="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {#each connectParts as part, index}{#if index === connectParts.length - 1}{@const parts = part.split($aboutConfig.connect.links.email.text)}{parts[0]}<a href={$aboutConfig.connect.links.email.url} class="text-indigo-600 underline">{$aboutConfig.connect.links.email.text}</a>{parts[1]}{:else}{part}<a href={$aboutConfig.connect.links.twitter.url} target="_blank" class="text-indigo-600 underline">{$aboutConfig.connect.links.twitter.text}</a>{/if}{/each}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</main>

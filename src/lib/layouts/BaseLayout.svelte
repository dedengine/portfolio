<script lang="ts">
  let { children } = $props();
</script>

<div class="relative h-screen">
  <div class="relative z-10 flex flex-col h-full">
    {@render children()}
  </div>
</div>

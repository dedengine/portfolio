<script lang="ts">
  import Router from 'svelte-spa-router';
  import BaseLayout from './lib/layouts/BaseLayout.svelte';
  import HomePage from './pages/HomePage.svelte';
  import ProjectsPage from './pages/ProjectsPage.svelte';
  import PostsPage from './pages/PostsPage.svelte';
  import PostPage from './pages/PostPage.svelte';
  import AboutPage from './pages/AboutPage.svelte';

  const routes = {
    '/': HomePage,
    '/projects': ProjectsPage,
    '/posts': PostsPage,
    '/posts/:slug': PostPage,
    '/about': AboutPage
  };
</script>

<BaseLayout>
  <Router {routes} />
</BaseLayout>

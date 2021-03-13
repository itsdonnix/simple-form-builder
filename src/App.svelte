<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<header class="text-white main-header margin-page">
  <div class="app-name">Formulir</div>
</header>

<main class="margin-page">
  <Router {routes} />
</main>

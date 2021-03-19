<script>
  import Router, { location, link } from 'svelte-spa-router';
  import routes from './routes';
</script>

{#if $location.startsWith('/form/editor') || $location === '/'}
  <header class="text-white main-header margin-page">
    <a class="app-name" href="/" use:link>Formulir</a>
  </header>
{/if}

<Router {routes} />

<script>
  import Router, { location } from 'svelte-spa-router';
  import routes from './routes';
</script>

{#if $location.startsWith('/form/editor') || $location === '/'}
  <header class="text-white main-header margin-page">
    <div class="app-name">Formulir</div>
  </header>
{/if}

<Router {routes} />

<script>
  import Router, { location, link } from 'svelte-spa-router';
  import routes from './routes';
</script>

{#if $location.startsWith('/form/edit') || $location === '/'}
  <header class="text-white main-header margin-page">
    <a class="app-name" href="/" use:link>Simple Form Builder</a>
  </header>
{/if}

<Router {routes} />

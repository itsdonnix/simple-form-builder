<script>
  import Router, { location, link } from 'svelte-spa-router';
  import routes from './routes';

  const appName = import.meta.env.VITE_APP_NAME || window.__simpleFormBuilder_initialDocumentTitle;
</script>

{#if $location === '/' || $location.startsWith('/form/edit')}
  <header class="text-white main-header margin-page">
    <a class="app-name" href="/" use:link>{appName}</a>
  </header>
{/if}

<Router {routes} />

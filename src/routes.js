import { wrap } from 'svelte-spa-router/wrap';

const routes = {
  '/': wrap({
    asyncComponent: () => import('./views/index.svelte'),
  }),
  '/form/new': wrap({
    asyncComponent: () => import('./views/form/form-editor.svelte'),
  }),
};

export default routes;

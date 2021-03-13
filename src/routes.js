import { wrap } from 'svelte-spa-router/wrap';

const routes = {
  '/': wrap({
    asyncComponent: () => import('./views/index.svelte'),
  }),
};

export default routes;

import { wrap } from 'svelte-spa-router/wrap';
import * as utils from './utils';
import { replace } from 'svelte-spa-router';

const routes = {
  '/': wrap({
    asyncComponent: () => import('./views/index.svelte'),
  }),

  '/form/:id': wrap({
    asyncComponent: () => import('./views/form/form-view.svelte'),
  }),

  '/form/edit/new/': wrap({
    asyncComponent: () => null,
    conditions: [
      async () => {
        const hash = await utils.generateHash();
        replace('/form/edit/' + hash);
        return false;
      },
    ],
  }),

  '/form/edit/:id': wrap({
    asyncComponent: () => import('./views/form/form-editor.svelte'),
  }),
};

export default routes;

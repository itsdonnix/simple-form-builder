import { wrap } from 'svelte-spa-router/wrap';
import * as utils from './utils';
import { replace } from 'svelte-spa-router';

const routes = {
  '/': wrap({
    asyncComponent: () => import('./views/index.svelte'),
  }),

  '/form/editor/new/': wrap({
    asyncComponent: () => null,
    conditions: [
      async () => {
        const hash = await utils.generateHash();
        replace('/form/editor/' + hash);
        return false;
      },
    ],
  }),

  '/form/editor/:id': wrap({
    asyncComponent: () => import('./views/form/form-editor.svelte'),
  }),
};

export default routes;

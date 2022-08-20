const { svelte } = require('@sveltejs/vite-plugin-svelte');
const { defineConfig } = require('vite');
const sveltePreprocess = require('svelte-preprocess');

module.exports = defineConfig(({ /* command, */ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: './',
    build: {
      target: 'es2016',
    },
    plugins: [
      svelte({
        hot: !isProduction,
        emitCss: true,
        preprocess: [
          sveltePreprocess({
            defaults: {
              style: 'postcss',
            },
            postcss: true,
          }),
        ],
      }),
    ],
  };
});

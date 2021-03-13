<script>
  import { mdiPlusCircle } from '@mdi/js';
  import Icon from '../components/Icon.svelte';
  import { link } from 'svelte-spa-router';
</script>

<main class="margin-page">
  <div class="mt-4">
    <h3 class="p-2 font-bold h3">Baru</h3>
    <div class="m-3">
      <a
        class="flex flex-col new-form-card--wrapper"
        href="/form/new"
        title="Buat formulir baru"
        use:link>
        <div class="flex items-center justify-center new-form-card">
          <Icon path={mdiPlusCircle} />
        </div>
        <div class="my-2 text-center">Formulir Baru</div>
      </a>
    </div>
  </div>
</main>

<script>
  import { mdiPlus } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  let self;

  const emit = createEventDispatcher();

  function emitQuestionType(type) {
    emit('onSelectQuestionType', type);
  }
</script>

<button bind:this={self} class="flex items-center px-2 py-1 btn btn--primary">
  <div class="p-2">
    <Icon path={mdiPlus} width="30px" height="30px" />
  </div>
  <div class="p-1">
    <div class="p-2 inner-label">Tambahkan pertanyaan</div>
    <div class="hidden-buttons">
      <button class="p-2 text-black bg-white" on:click={() => emitQuestionType('selection')}>Pilihan</button>
      <button class="p-2 text-black bg-white" on:click={() => emitQuestionType('essay')}>Teks</button>
      <button class="p-2 text-black bg-white">Lainnya</button>
    </div>
  </div>
</button>

<style>
  .hidden-buttons {
    display: none;
  }

  button:focus-within .inner-label {
    display: none;
  }

  button:focus-within .hidden-buttons {
    display: initial;
  }
</style>

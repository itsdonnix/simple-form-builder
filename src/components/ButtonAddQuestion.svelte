<script>
  import { mdiPlus } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  let self;
  let active = false;

  const emit = createEventDispatcher();

  async function emitQuestionType(type) {
    emit('onSelectQuestionType', type);
  }

  $: if (active) {
    if (self) {
      const button = self.querySelector('button');
      button && button.focus();
    }
  }
</script>

<button
  bind:this={self}
  class="flex items-center px-2 py-1 btn btn--primary"
  on:click={() => (active = true)}
  on:focusout={(e) => (active = self.contains(e.relatedTarget))}>
  <div class="p-2">
    <Icon path={mdiPlus} width="30px" height="30px" />
  </div>
  <div class="p-1">
    {#if !active}
      <div class="p-2">Tambahkan pertanyaan</div>
    {:else}
      <button
        class="p-2 text-black bg-white"
        on:click={(e) => emitQuestionType('pilihan')}>Pilihan</button>
      <button
        class="p-2 text-black bg-white"
        on:click={(e) => emitQuestionType('teks')}>Teks</button>
      <button class="p-2 text-black bg-white">Lainnya</button>
    {/if}
  </div>
</button>

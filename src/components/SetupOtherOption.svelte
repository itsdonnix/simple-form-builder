<script>
  import Icon from './Icon.svelte';
  import { mdiTrashCanOutline } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';

  export let multiple = false;

  const emit = createEventDispatcher();
</script>

<div class="flex items-center mb-2 setup--question-item other-option-item">
  {#if multiple}
    <input class="inline-block mr-2" type="checkbox" disabled />
  {:else}
    <input class="inline-block mr-2" type="radio" disabled />
  {/if}
  <input
    class="flex-1 inline-block p-2 border border-gray-400"
    disabled
    placeholder="Others"
    style="max-width: 300px"
    type="text" />
  <button class="ml-2 delete-question-button" on:click={() => emit('delete')} title="Remove option">
    <Icon path={mdiTrashCanOutline} width="25px" height="25px" />
  </button>
</div>

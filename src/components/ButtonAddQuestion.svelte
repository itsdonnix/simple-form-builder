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

<button
  aria-label="Add question"
  bind:this={self}
  class="flex items-center px-2 py-1 btn btn--primary"
  title="Add a new question">
  <div class="p-2">
    <Icon path={mdiPlus} width="30px" height="30px" />
  </div>
  <div class="p-1">
    <div class="p-2 inner-label">Add question</div>
    <div class="hidden-buttons">
      <button
        aria-label="Add question with options type"
        class="p-2 text-black bg-white"
        on:click={() => emitQuestionType('selection')}>Options</button>
      <button
        aria-label="Add question with essay type"
        class="p-2 text-black bg-white"
        on:click={() => emitQuestionType('essay')}>Text</button>
      <button class="p-2 text-black bg-white">Others</button>
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

<script>
  import { mdiTrashCanOutline } from '@mdi/js';
  import { createEventDispatcher, tick } from 'svelte';
  import Icon from '../Icon.svelte';
  import TextView from './TextView.svelte';

  const emit = createEventDispatcher();

  export let question;
  export let index = 0;

  export let preview = false;

  // DOM Bindings
  let self;
  let fieldQuestionText;

  async function focus() {
    const previewBefore = preview;
    preview = previewBefore && false;
    if (previewBefore) {
      await tick();
      fieldQuestionText.focus();
    }
  }
</script>

<div
  bind:this={self}
  class="flex flex-col mt-2 question-selection-type"
  class:preview
  class:bg-gray-100={!preview}
  on:click={focus}
  on:focusout={(e) => (preview = !self.contains(e.relatedTarget))}
  tabindex="0"
>
  <!-- PREVIEW MODE -->
  {#if preview}
    <TextView number={index + 1} {question} />
    <!-- EDIT MODE -->
  {:else}
    <!-- TOP BAR -->
    <div class="flex p-1 border-b">
      <div class="ml-auto">
        <button
          aria-label="Remove question"
          class="flex items-center px-3 py-2"
          on:click={() => emit('delete', index)}
          title="Remove question"
        >
          <Icon path={mdiTrashCanOutline} width="25px" height="25px" />
        </button>
      </div>
    </div>

    <!-- QUESTION & OPTIONS -->
    <div class="flex w-full p-5 question-selection-type-inputs" style="height: 100%">
      <div class="mr-2">{index + 1}.</div>
      <div class="flex flex-col flex-1" style="height: 100%">
        <!-- QUESTION TEXT -->
        <textarea
          bind:this={fieldQuestionText}
          bind:value={question.text}
          class="p-2 setup--question-text"
          placeholder="Input a question"
          type="text"
          rows="3"
        />

        {#if question.multiline}
          <textarea class="p-2 mt-2 border border-gray-400" disabled placeholder="Input your answer" rows="3" />
        {:else}
          <input disabled class="p-2 mt-2 border border-gray-400" placeholder="Input your answer" type="text" />
        {/if}
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="flex flex-col p-1 border-t md:flex-row">
      <label class="flex items-center px-3 py-2" tabindex="0">
        <input type="checkbox" bind:checked={question.multiline} />
        <div class="ml-2">Long answer</div>
      </label>
      <label class="flex items-center px-3 py-2" tabindex="0">
        <input type="checkbox" bind:checked={question.required} />
        <div class="ml-2">Required</div>
      </label>
    </div>
  {/if}
</div>

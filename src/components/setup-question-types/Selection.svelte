<script>
  import { mdiPlus, mdiTrashCanOutline } from '@mdi/js';
  import { createEventDispatcher, tick } from 'svelte';
  import Icon from '../Icon.svelte';
  import SetupOtherOption from '../SetupOtherOption.svelte';
  import SelectionView from './SelectionView.svelte';

  const emit = createEventDispatcher();

  export let question;
  export let index = 0;

  export let preview = false;

  if (!question.options.length) {
    question.options = ['Option 1', 'Option 2'];
  }

  // DOM Bindings
  let self;
  let optionItemsParent;
  let fieldQuestionText;

  async function focusOnLastOption() {
    await tick();
    const optionItems = optionItemsParent.querySelectorAll('.setup--question-item:not(.other-option-item) input');
    optionItems.length && optionItems[optionItems.length - 1].focus();
  }

  function addOption() {
    question.options = [...question.options, `Option ` + (question.options.length + 1)];
    focusOnLastOption();
  }

  function removeOption(index) {
    const _options = [...question.options];
    _options.splice(index, 1);
    question.options = [..._options];
  }

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
    <SelectionView number={index + 1} {question} />
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

        <div bind:this={optionItemsParent} class="flex flex-col justify-center mt-5">
          <!--  -->
          {#each question.options as option, index}
            <div class="flex items-center mb-2 setup--question-item">
              {#if question.multiple}
                <input class="inline-block mr-2" type="checkbox" disabled />
              {:else}
                <input class="inline-block mr-2" type="radio" disabled />
              {/if}
              <input bind:value={option} class="flex-1 inline-block p-2" style="max-width: 300px" type="text" />
              <button
                aria-label="Remove option"
                class="ml-2 delete-question-button"
                on:click={() => removeOption(index)}
                title="Remove option"
              >
                <Icon path={mdiTrashCanOutline} width="25px" height="25px" />
              </button>
            </div>
          {/each}

          {#if question.hasOtherOption}
            <SetupOtherOption multiple={question.multiple} on:delete={() => (question.hasOtherOption = false)} />
          {/if}
        </div>
      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="flex flex-col p-1 border-t md:flex-row">
      <button class="flex items-center px-3 py-2" on:click={addOption}>
        <Icon path={mdiPlus} width="25px" height="25px" />
        Add new option
      </button>
      {#if !question.hasOtherOption}
        <button class="flex items-center px-3 py-2" on:click={() => (question.hasOtherOption = true)}>
          Add "other" option
        </button>
      {/if}
      <label class="flex items-center px-3 py-2" tabindex="0">
        <input type="checkbox" bind:checked={question.multiple} />
        <div class="ml-2">Multiple</div>
      </label>
      <label class="flex items-center px-3 py-2" tabindex="0">
        <input type="checkbox" bind:checked={question.required} />
        <div class="ml-2">Required</div>
      </label>
    </div>
  {/if}
</div>

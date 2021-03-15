<script>
  import { mdiPlus, mdiTrashCanOutline } from '@mdi/js';
  import { tick } from 'svelte';
  import Icon from './Icon.svelte';
  import SetupOtherOption from './SetupOtherOption.svelte';

  export let question;
  export let number = 0;

  let preview = true;

  if (!question.options.length) {
    question.options = ['Pilihan 1', 'Pilihan 2'];
  }

  // DOM Bindings
  let self;
  let optionItemsParent;
  let fieldQuestionText;

  async function focusOnLastOption() {
    await tick();
    const optionItems = optionItemsParent.querySelectorAll(
      '.setup--question-item:not(.other-option-item) input'
    );
    optionItems.length && optionItems[optionItems.length - 1].focus();
  }

  function addOption() {
    question.options = [
      ...question.options,
      `Pilihan ` + (question.options.length + 1),
    ];
    focusOnLastOption();
  }

  function removeOption(index) {
    const _options = [...question.options];
    _options.splice(index, 1);
    question.options = [..._options];
  }

  async function onSelfClicked() {
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
  class="flex question-selection-type"
  class:preview
  on:click={onSelfClicked}
  on:focusout={(e) => (preview = !self.contains(e.relatedTarget))}
  tabindex="0">
  <!-- PREVIEW MODE -->
  {#if preview}
    <div class="flex p-5 question-selection-type preview">
      <div class="mr-1 text-lg">{number}.</div>
      <div>
        <p class="text-lg whitespace-pre">
          {question.text}
          {#if question.required}
            <span class="text-red-600">*</span>
          {/if}
        </p>
        <div class="flex flex-col mt-2">
          {#each question.options as option}
            <div class="flex items-center mb-2">
              <input class="inline-block mr-2" type="radio" disabled />
              <div>{option}</div>
            </div>
          {/each}
          {#if question.hasOtherOption}
            <div class="flex items-center mb-2 ">
              <input class="inline-block mr-2" type="radio" disabled />
              <div class="text-gray-500">Lainnya</div>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <!-- EDIT MODE -->
  {:else}
    <div
      class="flex flex-col w-full p-5 bg-gray-100 question-selection-type-inputs"
      style="height: 100%">
      <!-- QUESTION TEXT -->
      <textarea
        bind:this={fieldQuestionText}
        bind:value={question.text}
        class="p-2"
        placeholder="Masukkan pertanyaan"
        type="text"
        rows="3" />

      <div
        bind:this={optionItemsParent}
        class="flex flex-col justify-center mt-5">
        <!--  -->
        {#each question.options as option, index}
          <div class="flex items-center mb-2 setup--question-item">
            <input class="inline-block mr-2" type="radio" disabled />
            <input
              bind:value={option}
              class="flex-1 inline-block p-2"
              style="max-width: 300px"
              type="text" />
            <button
              class="ml-2 delete-question-button"
              on:click={() => removeOption(index)}
              title="Hapus opsi">
              <Icon path={mdiTrashCanOutline} width="25px" height="25px" />
            </button>
          </div>
        {/each}

        {#if question.hasOtherOption}
          <SetupOtherOption
            on:delete={() => (question.hasOtherOption = false)} />
        {/if}

        <div class="flex flex-col mt-2 md:flex-row">
          <button class="flex items-center px-3 py-2" on:click={addOption}>
            <Icon path={mdiPlus} width="25px" height="25px" />
            Tambahkan Opsi
          </button>
          {#if !question.hasOtherOption}
            <button
              class="flex items-center px-3 py-2"
              on:click={() => (question.hasOtherOption = true)}>
              Tambahkan opsi "Lainnya"
            </button>
          {/if}
          <label class="flex items-center px-3 py-2" tabindex="0">
            <input type="checkbox" bind:checked={question.multiple} />
            <div class="ml-2">Jawaban ganda</div>
          </label>
          <label class="flex items-center px-3 py-2" tabindex="0">
            <input type="checkbox" bind:checked={question.required} />
            <div class="ml-2">Harus diisi</div>
          </label>
        </div>
      </div>
    </div>
  {/if}
</div>

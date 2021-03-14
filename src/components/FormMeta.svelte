<script>
  export let title = 'Formulir tanpa judul';
  export let description = 'Deskripsi formulir';

  let preview = true;
  let self;
  let inputTitleEl;

  $: if (!preview) {
    inputTitleEl && inputTitleEl.focus();
  }
</script>

<div
  bind:this={self}
  class="form-meta"
  class:preview
  on:click={() => (preview = preview && false)}
  on:focusout={(e) => (preview = !self.contains(e.relatedTarget))}
  tabindex="0">
  {#if preview}
    <div class="p-5 form-meta-preview">
      <h2 class="text-2xl">{title}</h2>
      <p class="mt-2">{description}</p>
    </div>
  {:else}
    <div
      class="flex flex-col w-full p-5 bg-gray-100 form-meta-inputs"
      style="height: 100%">
      <!-- FORM TITLE -->
      <input
        bind:this={inputTitleEl}
        bind:value={title}
        class="p-2 mb-2 text-xl"
        placeholder="Masukkan judul formulir"
        type="text" />

      <!-- FORM DESCRIPTION -->
      <textarea
        bind:value={description}
        class="p-2"
        placeholder="Masukkan deskripsi formulir"
        type="text"
        rows="3" />
    </div>
  {/if}
</div>

<style>
  .form-meta.preview:hover {
    @apply bg-gray-200;
  }
</style>

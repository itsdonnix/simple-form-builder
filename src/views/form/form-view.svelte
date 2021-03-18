<script>
  import { onMount } from 'svelte';
  import * as store from '../../store.js';
  import TextView from '../../components/setup-question-types/TextView.svelte';
  import SelectionView from '../../components/setup-question-types/SelectionView.svelte';

  export let params;
  export let id;

  let form;
  let answer = {
    nama: '',
    phoneNumber: '',
  };

  if (params && params.id) {
    id = params.id;
    form = store.getForm(id);
    document.title = form.title;
  }

  function submit() {}

  onMount(() => {
    document.body.classList.add('bg-color-2');
    return () => {
      document.body.classList.remove('bg-color-2');
    };
  });
</script>

<form on:submit|preventDefault={submit} class="flex flex-col items-center">
  <div class="w-full p-1 mx-5 my-10 bg-white shadow-md" style="max-width: 700px">
    <div class="p-5 form-meta-preview">
      <h2 class="text-2xl">{form.title}</h2>
      <p class="mt-2">{form.description}</p>
    </div>

    <div class="flex flex-col p-5">
      <label class="text-sm" for="name">Nama <span class="text-red-600">*</span></label>
      <input
        name="name"
        class="p-2 mt-1 border border-gray-400"
        placeholder="Masukkan nama Anda"
        type="text"
        required />
    </div>

    <div class="flex flex-col p-5">
      <label class="text-sm" for="name">Nomor HP <span class="text-red-600">*</span></label>
      <input
        name="phone-number"
        class="p-2 mt-1 border border-gray-400"
        placeholder="Masukkan nomor HP Anda"
        type="tel"
        required />
    </div>

    <hr class="my-5" />

    <!-- QUESTION -->
    <div>
      {#each form.questions as question, index}
        {#if question.type === 'selection'}
          <SelectionView disabled={false} {question} number={index + 1} />
        {:else if question.type === 'essay'}
          <TextView disabled={false} {question} number={index + 1} />
        {/if}
      {/each}
    </div>

    <div class="flex p-3">
      <button class="px-4 py-2 ml-auto font-bold btn btn--primary">Kirim</button>
    </div>
  </div>
</form>

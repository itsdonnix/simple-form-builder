<script>
  import { onMount } from 'svelte';
  import * as store from '../../store.js';
  import TextView from '../../components/setup-question-types/TextView.svelte';
  import Icon from '../../components/Icon.svelte';
  import SelectionView from '../../components/setup-question-types/SelectionView.svelte';
  import { mdiCheck } from '@mdi/js';
  import { generateSessionId, getSessionID } from '../../session.js';
  import { DefaultForm } from '../../shared.js';

  export let params;
  export let id;

  let loading = false;
  let form = { ...DefaultForm };
  let formSent = false;

  let answer = {
    sessionId: getSessionID(),
    name: '',
    phoneNumber: '',
    answers: [],
  };

  if (params && params.id) {
    id = params.id;
    answer.id = id;
  }

  let confirmMessage =
    'Your answers will be sent, please make sure your answers are correct before submitting the answers. \n Continue sending your answers?';

  function submit() {
    if (confirm(confirmMessage)) {
      loading = true;
      setTimeout(() => {
        store.addAnswer(answer);
        formSent = true;
        loading = false;
      }, 5000);
    }
  }

  onMount(async () => {
    form = store.getForm(id);
    if (!!form) {
      document.title = form.title;
    } else {
      document.title = 'Form not found';
    }
    if (!answer.sessionId) {
      answer.sessionId = await generateSessionId();
    }
    const _answer = store.getAnswerByFormIdAndSessionId(id, answer.sessionId);
    if (!!_answer) {
      formSent = true;
    }
    document.body.classList.add('bg-color-2');
    return () => {
      document.body.classList.remove('bg-color-2');
    };
  });
</script>

{#if !formSent}
  {#if !form}
    <div class="flex flex-col items-center justify-center">
      <div
        class="flex flex-col items-center justify-center w-full p-3 mx-5 my-10 bg-white shadow-md"
        style="max-width: 700px; min-height: 200px">
        <h1 class="text-xl">It looks like the form you are looking for does not exist...</h1>
      </div>
    </div>
  {:else}
    <form on:submit|preventDefault={submit} class="flex flex-col items-center">
      <div class="w-full p-1 mx-5 my-10 bg-white shadow-md" style="max-width: 700px">
        <div class="p-5 form-meta-preview">
          <h2 class="text-2xl">{form.title}</h2>
          <p class="mt-2">{form.description}</p>
        </div>

        <div class="flex flex-col p-5">
          <label class="text-sm" for="name">Name <span class="text-red-600">*</span></label>
          <input
            name="name"
            class="p-2 mt-1 border border-gray-400"
            placeholder="Input your name"
            bind:value={answer.name}
            type="text"
            required />
        </div>

        <div class="flex flex-col p-5">
          <label class="text-sm" for="name">Number Phone <span class="text-red-600">*</span></label>
          <input
            name="phone-number"
            class="p-2 mt-1 border border-gray-400"
            placeholder="Input your phone number"
            bind:value={answer.phoneNumber}
            type="tel"
            required />
        </div>

        <hr class="my-5" />

        <!-- QUESTION -->
        <div>
          {#each form.questions as question, index}
            {#if question.type === 'selection'}
              <SelectionView bind:answer={answer.answers[index]} disabled={false} {question} number={index + 1} />
            {:else if question.type === 'essay'}
              <TextView bind:answer={answer.answers[index]} disabled={false} {question} number={index + 1} />
            {/if}
          {/each}
        </div>

        <div class="flex p-3">
          <button aria-label="Send answer" type="submit" class="px-4 py-2 ml-auto font-bold btn btn--primary">
            {loading ? 'Sending your answer...' : 'Send'}
          </button>
        </div>
      </div>
    </form>
  {/if}
{:else}
  <div class="flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center w-full p-3 mx-5 my-10 bg-white shadow-md"
      style="max-width: 700px; min-height: 200px">
      <Icon path={mdiCheck} width="50px" height="50px" />
      <h1 class="text-xl">Your answer is successfully sent!</h1>
    </div>
  </div>
{/if}

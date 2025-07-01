<script>
  import Required from '../../Required.svelte';

  export let question;
  export let number;
  export let disabled = true;
  export let answer = null;
  export let preview = false;
</script>

<div class="flex p-5 question-date-type" class:preview>
  <div class="mr-1 text-lg">{number}.</div>
  <div class="flex-1">
    <p class="text-lg word-break-all">
      {question.text}
      {#if question.required}
        <Required />
      {/if}
    </p>
    <div class="flex flex-col mt-2">
      <input type="date" class="p-2 border border-gray-400" {disabled} bind:value={answer} required={question.required} />
    </div>
  </div>
</div>

<style>
  .question-date-type.preview input {
    pointer-events: none;
  }
</style>

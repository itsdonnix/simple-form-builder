<script>
  export let number;
  export let question;
  export let answer = '';
  export let disabled = true;
</script>

<div class="flex p-5 question-selection-type preview">
  <div class="mr-1 text-lg">{number}.</div>
  <div class="flex flex-col flex-1">
    <p class="text-lg whitespace-pre">
      {question.text}
      {#if question.required}
        <span class="text-red-600">*</span>
      {/if}
    </p>
    {#if question.multiline}
      <textarea
        class="p-2 mt-2 border border-gray-400"
        {disabled}
        placeholder="Input your answer"
        rows="3"
        required={question.required}
        bind:value={answer} />
    {:else}
      <input
        class="p-2 mt-2 border border-gray-400"
        {disabled}
        placeholder="Input your answer"
        type="text"
        required={question.required}
        bind:value={answer} />
    {/if}
  </div>
</div>

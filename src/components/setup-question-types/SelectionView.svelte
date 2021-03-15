<script>
  export let question;
  export let number;
</script>

<div class="flex p-5 question-selection-type preview">
  <div class="mr-1 text-lg">{number}.</div>
  <div class="flex-1">
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
        <div class="flex items-center mb-2">
          <input class="inline-block mr-2" type="radio" disabled />
          <input
            class="flex-1 p-2 border border-gray-400 "
            disabled
            placeholder="Lainnya"
            style="max-width: 300px"
            type="text" />
        </div>
      {/if}
    </div>
  </div>
</div>

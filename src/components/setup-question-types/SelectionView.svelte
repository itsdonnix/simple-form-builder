<script>
  export let question;
  export let number;
  export let disabled = true;
  export let answer = null;

  let otherOptionValue = '';

  const isSelecOtherOption = () => !question.options.includes(answer);

  $: if (question.hasOtherOption && null !== answer && isSelecOtherOption()) {
    answer = otherOptionValue;
  }
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
      {#each question.options as option, index}
        <label class="flex items-center mb-2">
          <input
            class="inline-block mr-2"
            type="radio"
            name={'option--' + number}
            {disabled}
            bind:group={answer}
            value={option}
            required={question.required} />
          <div>{option}</div>
        </label>
      {/each}
      {#if question.hasOtherOption}
        <label class="flex items-center mb-2">
          <input
            class="inline-block mr-2"
            type="radio"
            bind:group={answer}
            value={otherOptionValue}
            name={'option--' + number}
            {disabled}
            required={question.required} />
          <input
            class="flex-1 p-2 border border-gray-400 "
            {disabled}
            placeholder="Lainnya"
            style="max-width: 300px"
            bind:value={otherOptionValue}
            type="text" />
        </label>
      {/if}
    </div>
  </div>
</div>

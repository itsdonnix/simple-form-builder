<script>
  import Required from '../Required.svelte';

  export let question;
  export let number;
  export let disabled = true;
  export let answer = null;
  let otherOptionValue = '';

  if (question.multiple) {
    answer = [];
  }

  function onInput({ target }) {
    otherOptionValue = target.value;
    if (!disabled && question.hasOtherOption && !question.options.includes(answer)) {
      if (question.multiple) {
        if (!answer.includes(otherOptionValue) && !!otherOptionValue) {
          answer[question.options.length] = otherOptionValue;
        }
      } else {
        answer = otherOptionValue;
      }
    }
  }
</script>

<div class="flex p-5 question-selection-type preview">
  <div class="mr-1 text-lg">{number}.</div>
  <div class="flex-1">
    <p class="text-lg word-break-all">
      {question.text}
      {#if question.required}
        <Required />
      {/if}
    </p>
    <div class="flex flex-col mt-2">
      {#each question.options as option}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex items-center py-1 mb-2">
          {#if question.multiple}
            <input
              class="inline-block mr-2"
              type="checkbox"
              name={'option--' + number}
              {disabled}
              bind:group={answer}
              value={option}
            />
          {:else}
            <input
              class="inline-block mr-2"
              type="radio"
              name={'option--' + number}
              {disabled}
              bind:group={answer}
              value={option}
              required={question.required}
            />
          {/if}
          <div>{option}</div>
        </label>
      {/each}
      {#if question.hasOtherOption}
        <label class="flex items-center mb-2">
          {#if question.multiple}
            <input
              class="inline-block mr-2"
              type="checkbox"
              bind:group={answer}
              value={otherOptionValue}
              name={'option--' + number}
              {disabled}
              required={question.required}
            />
          {:else}
            <input
              class="inline-block mr-2"
              type="radio"
              bind:group={answer}
              value={otherOptionValue}
              name={'option--' + number}
              {disabled}
              required={question.required}
            />
          {/if}
          <input
            class="flex-1 p-2 border border-gray-400 "
            {disabled}
            on:input={onInput}
            placeholder="Other"
            style="max-width: 300px"
            required={question.multiple ? answer.includes(otherOptionValue) : !question.options.includes(answer)}
            type="text"
          />
        </label>
      {/if}
    </div>
  </div>
</div>

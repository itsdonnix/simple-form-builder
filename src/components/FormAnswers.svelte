<script lang="ts">
  export const questions = [];
  export const respondents = [];

  $: hasAnswers = respondents.length > 0;
  $: info = respondents.length > 0 ? `Answers from (${respondents.length} respondents)` : 'No answers yet';
</script>

<div class="p-5" tabindex="0">
  <h2 class="text-xl" class:text-center={!hasAnswers} class:text-gray-500={!hasAnswers}>
    {info}
  </h2>
  {#if hasAnswers}
    <hr class="my-2" />
    <div class="flex flex-col">
      {#each respondents as respondent}
        <details class="mb-3 ml-1">
          <summary class="py-1 text-lg">{respondent.name} ({respondent.phoneNumber})</summary>
          {#each respondent.answers as _answer, index}
            <div class="flex p-1 font-bold">
              <div class="mr-1">
                {index + 1}.
              </div>
              <div class="whitespace-pre">
                {questions[index].text}
              </div>
            </div>
            <div class="p-1 ml-4 whitespace-pre">
              {questions[index].multiple ? _answer.filter((_answer_) => !!_answer_).join(', ') : _answer}
            </div>
          {/each}
        </details>
      {/each}
    </div>
  {/if}
</div>

<script>
  export let number;
  export let question;
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
      <textarea class="p-2 mt-2 border" disabled placeholder="Masukkan jawaban Anda" rows="3" />
    {:else}
      <input disabled class="p-2 mt-2 border" placeholder="Masukkan jawaban Anda" type="text" />
    {/if}
  </div>
</div>

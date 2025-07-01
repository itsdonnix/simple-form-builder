<script>
  import SelectionView from './selection/SelectionView.svelte';
  import TextView from './text/TextView.svelte';
  import DateView from './date/DateView.svelte';

  export let number;
  export let question;
  export let answer = '';

  export let disabled = true;
  export let preview = false;

  const TypeToComponent = {
    selection: SelectionView,
    essay: TextView,
    date: DateView,
  };
</script>

<svelte:component this={TypeToComponent[question.type]} bind:answer {disabled} bind:preview {question} {number} />

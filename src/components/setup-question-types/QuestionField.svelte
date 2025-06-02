<script>
  import { createEventDispatcher } from 'svelte';
  import Selection from './selection/Selection.svelte';
  import Text from './text/Text.svelte';

  export let index;
  export let question;

  const emit = createEventDispatcher();

  const TypeToComponent = {
    selection: Selection,
    essay: Text,
  };
</script>

<svelte:component
  this={TypeToComponent[question.type]}
  bind:preview={question.preview}
  bind:question
  {index}
  on:delete={() => emit('delete', index)} />

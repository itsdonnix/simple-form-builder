<script>
  import { mdiContentCopy, mdiTrashCanOutline } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  const emit = createEventDispatcher();

  // export let id = '';
  let loading = false;

  $: formURL = location.toString().replace('/edit', '');

  function copyToClipboard() {
    navigator.clipboard.writeText(formURL);
  }

  function send() {
    loading = true;
    setTimeout(() => (loading = false), 2000);
  }
</script>

<div class="p-2 bg-white form-actions">
  <div class="flex margin-page">
    <button
      aria-label="Delete form"
      class="flex items-center p-1 mx-2"
      on:click={() => confirm('Are you sure want to delete this form?') && emit('delete-form-clicked')}
      title="Delete this form">
      <Icon path={mdiTrashCanOutline} />
      <!-- <span class="hidden mx-2 sm:inline-block">Delete Form</span> -->
    </button>
    <input
      aria-label="Form link"
      on:dblclick={(e) => e.target?.select()}
      class="hidden px-2 py-2 border sm:inline-block"
      type="text"
      value={formURL}
      title={formURL}
      readonly />
    <button aria-label="Copy form link" on:click={copyToClipboard} class="p-1 mx-2" title="Copy form link">
      <Icon path={mdiContentCopy} />
    </button>
    <button
      aria-label="Send the form"
      class="px-4 py-2 ml-auto font-bold btn btn--primary"
      on:click={send}
      title="Send form">
      {loading ? 'Sending...' : 'Send'}
    </button>
  </div>
</div>

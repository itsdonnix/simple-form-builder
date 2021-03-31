<script>
  import { mdiContentCopy, mdiTrashCanOutline } from '@mdi/js';
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  const emit = createEventDispatcher();

  export let id = '';
  let loading = false;

  $: formURL = (import.meta.env.MODE === 'development' ? location.host : import.meta.env.BASE_URL) + '/#/form/' + id;

  function copyToClipboard() {
    navigator.clipboard.writeText(formURL);
  }

  function send() {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 2000);
  }
</script>

<div class="p-2 bg-white form-actions">
  <div class="flex margin-page">
    <button
      class="flex items-center p-1 mx-2"
      on:click={() => confirm('Are you sure want to delete this form?') && emit('delete-form-clicked')}
      title="Delete this form">
      <Icon path={mdiTrashCanOutline} />
      <span class="mx-2">Delete Form</span>
    </button>
    <input
      on:click={copyToClipboard}
      class="px-4 py-2 border"
      type="text"
      class:hidden={!!!id}
      value={formURL}
      title={formURL} />
    <button on:click={copyToClipboard} class="p-1" title="Copy form link">
      <Icon path={mdiContentCopy} />
    </button>
    <button class="px-4 py-2 ml-auto font-bold btn btn--primary" on:click={send} title="Send form">
      {loading ? 'Sending...' : 'Send'}
    </button>
  </div>
</div>

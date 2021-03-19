<script>
  import { mdiContentCopy } from '@mdi/js';
  import Icon from './Icon.svelte';

  export let id = '';
  let loading = false;

  $: formURL = 'https://' + location.host + '/#/form/' + id;

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
    <input
      on:click={copyToClipboard}
      class="px-4 py-2 border"
      type="text"
      class:hidden={!!!id}
      value={formURL}
      title={formURL} />
    <button on:click={copyToClipboard} class="p-1" title="Salin alamat formulir">
      <Icon path={mdiContentCopy} />
    </button>
    <button class="px-4 py-2 ml-auto font-bold btn btn--primary" on:click={send} title="Kirim formulir">
      {loading ? 'Mengirimkan...' : 'Kirim'}
    </button>
  </div>
</div>

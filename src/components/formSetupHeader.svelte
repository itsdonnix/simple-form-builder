<script>
  let loading = false;

  function send() {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 2000);
  }
</script>

<div class="p-2 bg-white form-actions">
  <div class="flex margin-page">
    <button class="px-4 py-2 ml-auto font-bold btn btn--primary" on:click={send}>
      {loading ? 'Mengirimkan...' : 'Kirim'}
    </button>
  </div>
</div>

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.body.classList.add('bg-color-2');
    return () => document.body.classList.remove('bg-color-2');
  });
</script>

<div class="p-2 bg-white form-actions">
  <div class="flex margin-page">
    <button class="px-4 py-2 ml-auto font-bold btn btn--primary">
      Kirim
    </button>
  </div>
</div>

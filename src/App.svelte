<script lang="ts">
  let count: number = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }
</script>

<style>
  button {
    @apply bg-blue-900;
    @apply text-white;
    @apply px-4;
    @apply py-2;
    @apply text-lg;
  }
</style>

<div class="flex h-screen w-screen">
  <div class="mx-auto my-auto">
    <button on:click={decrement}>-</button>
    <button>{count}</button>
    <button on:click={increment}>+</button>
  </div>
</div>

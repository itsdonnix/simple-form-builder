<script>
  export let size = '24px';
  export let width = size;
  export let height = size;
  export let viewWidth = '24';
  export let viewHeight = '24';
  export let path = null;
  export let label = null;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 {viewWidth} {viewHeight}">
  <path d={path}>
    {#if label}
      <title>{label}</title>
    {/if}
  </path>
</svg>

<script>
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <slot />
</button>

<style>
  button {
    background: #f9f1f1;
    border: none;
    border-radius: 0;
    margin: 0;
    color: #585f66;
    text-align: center;
    width: 100%;
    padding: 0.8em;
    padding-top: 0.5em;
    border-top: 0.3em solid;
    border-color: transparent;
  }

  .selected {
    border-color: var(--main-bg-color);
    color: #000;
    font-weight: bold;
    background-color: #fff;
    position: relative;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import Tab from '../../components/Tab.svelte';
  import TabList from '../../components/TabList.svelte';
  import TabPanel from '../../components/TabPanel.svelte';
  import Tabs from '../../components/Tabs.svelte';

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

<div class="w-full mx-5 my-10 bg-white md:mx-auto" style="max-width: 700px">
  <Tabs>
    <TabList>
      <Tab>Pertanyaan</Tab>
      <Tab>Hasil</Tab>
    </TabList>

    <TabPanel>
      <div class="min-h-screen p-5">
        <h2>Pertanyaan</h2>
      </div>
    </TabPanel>

    <TabPanel>
      <div class="min-h-screen p-5">
        <h2>Hasil</h2>
      </div>
    </TabPanel>
  </Tabs>
</div>

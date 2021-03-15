<script>
  import { onMount, tick } from 'svelte';
  import ButtonAddQuestion from '../../components/ButtonAddQuestion.svelte';
  import FormMeta from '../../components/FormMeta.svelte';
  import Tab from '../../components/Tab.svelte';
  import TabList from '../../components/TabList.svelte';
  import TabPanel from '../../components/TabPanel.svelte';
  import Tabs from '../../components/Tabs.svelte';
  import Selection from '../../components/setup-question-types/Selection.svelte';
  import Text from '../../components/setup-question-types/Text.svelte';

  const defaultForm = {
    title: 'Formulir tanpa judul',
    description: 'Deskripsi formulir',
    questions: [],
  };

  const question = {
    text: 'Pertanyaan',
    required: false,
  };

  const questionTypeEssay = {
    ...question,
    multiline: false,
  };

  const questionTypeSelection = {
    ...question,
    options: [],
    hasOtherOption: false,
    multiple: false,
  };

  let form = { ...defaultForm };

  // DOM Bindings
  let questionPanel;

  function addQuestion(newQuestion) {
    form.questions = [...form.questions, newQuestion];
  }

  function deleteQuestion({ detail: index }) {
    const _questions = form.questions;
    _questions.splice(index, 1);
    form.questions = _questions;
  }

  function onSelectQuestionType({ detail: questionType }) {
    let newQuestion = { type: questionType };
    switch (questionType) {
      case 'selection':
        newQuestion = { ...newQuestion, ...questionTypeSelection };
        break;
      case 'essay':
        newQuestion = { ...newQuestion, ...questionTypeEssay };
        break;
    }
    addQuestion(newQuestion);
    focusOnNewCreatedQuestion();
  }

  async function focusOnNewCreatedQuestion() {
    await tick();
    document.activeElement.blur();
    questionPanel.querySelector('.setup--question-text').focus();
  }

  onMount(() => {
    document.body.classList.add('bg-color-2');
    return () => document.body.classList.remove('bg-color-2');
  });
</script>

<div class="p-2 bg-white form-actions">
  <div class="flex margin-page">
    <button class="px-4 py-2 ml-auto font-bold btn btn--primary"> Kirim </button>
  </div>
</div>

<div class="flex flex-col items-center">
  <div class="w-full mx-5 my-10 bg-white shadow-md" style="max-width: 700px">
    <Tabs>
      <TabList>
        <Tab>Pertanyaan</Tab>
        <Tab>Hasil</Tab>
      </TabList>

      <TabPanel>
        <div class="p-5 " tabindex="0" bind:this={questionPanel}>
          <FormMeta bind:title={form.title} bind:description={form.description} />

          {#each form.questions as question, index}
            {#if question.type === 'selection'}
              <Selection bind:question {index} on:delete={deleteQuestion} />
            {:else if question.type === 'essay'}
              <Text bind:question {index} on:delete={deleteQuestion} />
            {/if}
          {/each}
          <div class="p-5">
            <ButtonAddQuestion on:onSelectQuestionType={onSelectQuestionType} />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="min-h-screen p-5" tabindex="0">
          <h2>Hasil</h2>
        </div>
      </TabPanel>
    </Tabs>
  </div>
</div>

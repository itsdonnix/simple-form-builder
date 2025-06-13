<script>
  import { onMount, tick } from 'svelte';
  import ButtonAddQuestion from '../../components/ButtonAddQuestion.svelte';
  import FormMeta from '../../components/FormMeta.svelte';
  import Tab from '../../components/tabs/Tab.svelte';
  import TabList from '../../components/tabs/TabList.svelte';
  import TabPanel from '../../components/tabs/TabPanel.svelte';
  import Tabs from '../../components/tabs/Tabs.svelte';
  import * as store from '../../store.js';
  import { answers } from '../../store.js';
  import FormSetupHeader from '../../components/FormSetupHeader.svelte';
  import { DefaultForm } from '../../shared';
  import { replace } from 'svelte-spa-router';
  import FormAnswers from '../../components/FormAnswers.svelte';
  import QuestionField from '../../components/setup-question-types/QuestionField.svelte';

  export let params;
  export let id;

  let mounted = false;

  const question = {
    text: 'Question',
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

  let form = { ...DefaultForm };

  if (params?.id) {
    id = params.id;
    form.id = id;
  }

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

  function onCreateNewQuestionClicked({ detail: questionType }) {
    const questionDefaults = {
      selection: questionTypeSelection,
      essay: questionTypeEssay,
    };

    const newQuestion = {
      type: questionType,
      ...questionDefaults[questionType || {}],
    };
    addQuestion(newQuestion);
    focusOnNewCreatedQuestion();
  }

  async function focusOnNewCreatedQuestion() {
    await tick();
    document.activeElement.blur();
    questionPanel.querySelector('.setup--question-text').focus();
  }

  function removeForm() {
    store.removeForm(form.id);
    replace('/');
  }

  let lastDocumentTitle;

  onMount(() => {
    const existingForm = store.getForm(id);
    form = existingForm || form;
    if (!existingForm) {
      store.addForm(form);
    }

    lastDocumentTitle = document.title;
    document.title = form.name; // Update document title

    document.body.classList.add('bg-color-2');
    mounted = true;

    return () => {
      document.title = lastDocumentTitle;
      document.body.classList.remove('bg-color-2');
    };
  });

  // Update document title when form name changes
  $: document.title = `${form.title} - Simple Form Builder`;
  // Auto update when form changes
  $: mounted && form && id && store.updateForm(id, form);
  // Get the answers of this form
  $: respondents = $answers.filter((answer) => answer.id === id);
</script>

<FormSetupHeader on:delete-form-clicked={removeForm} />

<div class="flex flex-col items-center">
  <div class="mx-5 my-10 w-full bg-transparent bg-white shadow-md" style="max-width: 700px">
    <Tabs>
      <TabList>
        <Tab>Questions</Tab>
        <Tab>Answers</Tab>
      </TabList>

      <TabPanel>
        <div class="p-5 form-setup-panel" tabindex="0" bind:this={questionPanel}>
          <FormMeta bind:title={form.title} bind:description={form.description} />

          {#each form.questions as question, index}
            <QuestionField {question} {index} on:delete={deleteQuestion} />
          {/each}

          <div class="p-5">
            <ButtonAddQuestion on:onSelectQuestionType={onCreateNewQuestionClicked} />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <FormAnswers questions={form.questions} {respondents} />
      </TabPanel>
    </Tabs>
  </div>
</div>

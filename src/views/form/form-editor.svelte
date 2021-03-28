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
  import * as store from '../../store.js';
  import { answers } from '../../store.js';
  import FormSetupHeader from '../../components/formSetupHeader.svelte';
  import { DefaultForm } from '../../shared';

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

  if (params && params.id) {
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
    if (!store.isFormExist(form.id)) {
      store.addForm(form);
    } else {
      form = store.getForm(id);
    }
    document.body.classList.add('bg-color-2');
    mounted = true;
    return () => document.body.classList.remove('bg-color-2');
  });

  $: mounted && form && !!id && store.updateForm(id, form);
  $: formAnswers = $answers.filter((answer) => answer.id === id);
</script>

<FormSetupHeader id={form.id} />

<div class="flex flex-col items-center">
  <div class="w-full mx-5 my-10 bg-white shadow-md" style="max-width: 700px">
    <Tabs>
      <TabList>
        <Tab>Questions</Tab>
        <Tab>Answers</Tab>
      </TabList>

      <TabPanel>
        <div class="p-5 form-setup-panel" tabindex="0" bind:this={questionPanel}>
          <FormMeta bind:title={form.title} bind:description={form.description} />

          {#each form.questions as question, index}
            {#if question.type === 'selection'}
              <Selection bind:preview={question.preview} bind:question {index} on:delete={deleteQuestion} />
            {:else if question.type === 'essay'}
              <Text bind:preview={question.preview} bind:question {index} on:delete={deleteQuestion} />
            {/if}
          {/each}
          <div class="p-5">
            <ButtonAddQuestion on:onSelectQuestionType={onCreateNewQuestionClicked} />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div class="p-5" tabindex="0">
          <h2 class="text-xl">
            Answers from ({formAnswers.length} respondents)
          </h2>
          <hr class="my-2" />
          <div class="flex flex-col">
            {#each formAnswers as answer}
              <details class="mb-3 ml-1">
                <summary class="py-1 text-lg">{answer.name} ({answer.phoneNumber})</summary>
                {#each answer.answers as _answer, index}
                  <div class="flex p-1 font-bold">
                    <div class="mr-1">
                      {index + 1}.
                    </div>
                    <div class="whitespace-pre">
                      {form.questions[index].text}
                    </div>
                  </div>
                  <div class="p-1 ml-4 whitespace-pre">
                    {form.questions[index].multiple ? _answer.filter((_answer_) => !!_answer_).join(', ') : _answer}
                  </div>
                {/each}
              </details>
            {/each}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  </div>
</div>

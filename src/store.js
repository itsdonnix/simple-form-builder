import { writable } from 'svelte/store';
import LocalStorage from './storage';

export let forms = writable([]);
export let answers = writable([]);
export let formsLocalStorage = new LocalStorage('forms');
export let answersLocalStorage = new LocalStorage('answers');

// Load data from localStorage to store if any
{
  const formsFromLocalStorage = formsLocalStorage.getData();
  if (formsFromLocalStorage) forms.set(formsFromLocalStorage);

  const answersFromLocalStorage = answersLocalStorage.getData();
  if (answersFromLocalStorage) answers.set(answersFromLocalStorage);
}

forms.subscribe((_forms) => {
  formsLocalStorage.setData(_forms);
});

answers.subscribe((_answers) => {
  answersLocalStorage.setData(_answers);
});

export function addForm(newForm) {
  forms.update((_forms) => [..._forms, newForm]);
}

export function getAllForms() {
  let theForms;
  forms.subscribe((_forms) => (theForms = _forms))();
  return theForms;
}

export function getForm(id) {
  return getAllForms().find((_form) => _form.id === id);
}

export function removeForm(id) {
  const formsCopy = getAllForms();
  const index = formsCopy.findIndex((form) => form.id === id);
  formsCopy.splice(index, 1);
  forms.set(formsCopy);
}

export function isFormExist(id) {
  return !!getForm(id);
}

export function updateForm(id, form) {
  forms.update((_forms) => {
    const targetIndex = _forms.findIndex((_form) => _form.id === id);
    _forms[targetIndex] = form;
    return _forms;
  });
}

export function getAllAnsers() {
  let theAnswers;
  answers.subscribe((_answers) => (theAnswers = _answers))();
  return theAnswers;
}

export function addAnswer(newAnswer) {
  answers.update((_answer) => [..._answer, newAnswer]);
}

export function getAnswersByFormIdAndPhoneNumber(id, phoneNumber) {
  return getAllAnsers().filter((_answer) => _answer.id === id && _answer.phoneNumber === phoneNumber);
}

export function getAnswerByFormIdAndSessionId(formId, sessionId) {
  const theAnswers = getAllAnsers().filter((_answers) => _answers.id === formId && _answers.sessionId === sessionId);
  return theAnswers.length ? theAnswers[0] : null;
}

export function isAnswerExist(id, phoneNumber) {
  return !!(getAnswersByFormIdAndPhoneNumber(id, phoneNumber) || []).length;
}

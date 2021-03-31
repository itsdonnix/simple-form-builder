import { writable } from 'svelte/store';
import LocalStorage from './storage';

export let forms = writable([]);
export let answers = writable([]);
export let formsLocalStorage = new LocalStorage('forms');
export let answersLocalStorage = new LocalStorage('answers');

forms.update(() => formsLocalStorage.getData() || []);
answers.update(() => answersLocalStorage.getData() || []);

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
  const unsubsribe = forms.subscribe((_forms) => {
    theForms = _forms;
  });
  unsubsribe();
  return theForms;
}

export function getForm(id) {
  return getAllForms().find((_form) => _form.id === id);
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
  const unsubsribe = answers.subscribe((_answers) => {
    theAnswers = _answers;
  });
  unsubsribe();
  return theAnswers;
}

export function addAnswer(newAnswer) {
  answers.update((_answer) => [..._answer, newAnswer]);
}

export function getAnswersByFormIdAndPhoneNumber(id, phoneNumber) {
  let theAnswers;
  const unsubsribe = answers.subscribe(
    (_answer) => (theAnswers = _answer.filter((_answer) => _answer.id === id && _answer.phoneNumber === phoneNumber))
  );
  unsubsribe();
  return theAnswers;
}

export function getAnswerByFormIdAndSessionId(formId, sessionId) {
  let theAnswers;
  const unsubsribe = answers.subscribe(
    (_answer) => (theAnswers = _answer.filter((_answers) => _answers.id === formId && _answers.sessionId === sessionId))
  );
  unsubsribe();
  return theAnswers.length ? theAnswers[0] : null;
}

export function isAnswerExist(id, phoneNumber) {
  return !!(getAnswersByFormIdAndPhoneNumber(id, phoneNumber) || []).length;
}

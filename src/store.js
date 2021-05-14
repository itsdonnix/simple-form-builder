import { writable } from 'svelte/store';
import LocalStorage from './storage';

export const forms = writable([]);
export const answers = writable([]);

// Initialize local storage for forms and answers
const formsLocalStorage = new LocalStorage('forms');
const answersLocalStorage = new LocalStorage('answers');

// Load data from local storage to store if any
{
  const formsFromLocalStorage = formsLocalStorage.getData();
  if (formsFromLocalStorage) forms.set(formsFromLocalStorage);

  const answersFromLocalStorage = answersLocalStorage.getData();
  if (answersFromLocalStorage) answers.set(answersFromLocalStorage);
}

// Subscribe forms and answers to auto-save to local storage
forms.subscribe((_forms) => formsLocalStorage.setData(_forms));
answers.subscribe((_answers) => answersLocalStorage.setData(_answers));

/**
 * Adds new form
 * @param {*} newForm The new form
 */
export function addForm(newForm) {
  forms.update((existingForms) => [...existingForms, newForm]);
}

/**
 * Get all forms
 * @returns {Array}
 */
export function getAllForms() {
  let theForms;
  forms.subscribe((_forms) => (theForms = _forms))();
  return theForms;
}

/**
 * Get form by form id
 * @param {number} id
 * @returns {Array}
 */
export function getForm(id) {
  return getAllForms().find((_form) => _form.id === id);
}

/**
 * Remove form by form id
 * @param {number} id
 */
export function removeForm(id) {
  const formsCopy = getAllForms();
  const index = formsCopy.findIndex((form) => form.id === id);
  formsCopy.splice(index, 1);
  forms.set(formsCopy);
}

/**
 * Check if form is exist
 * @param {number} id
 * @returns {boolean}
 */
export function isFormExist(id) {
  return !!getForm(id);
}

/**
 * @param {number} id The `id` of the form to update
 * @param {*} form The new form
 */
export function updateForm(id, form) {
  forms.update((existingForms) => {
    const targetIndex = existingForms.findIndex((existingForm) => existingForm.id === id);
    existingForms[targetIndex] = form;
    return existingForms;
  });
}

/**
 * Get all answers
 * @returns {Array}
 */
export function getAllAnsers() {
  let theAnswers;
  answers.subscribe((_answers) => (theAnswers = _answers))();
  return theAnswers;
}

/**
 * Adds new answer
 * @param {*} newAnswer The new answer
 */
export function addAnswer(newAnswer) {
  answers.update((existingAnswers) => [...existingAnswers, newAnswer]);
}

/**
 * Get answers by answer id and phone number
 * @param {number} id The `id` of the answer
 * @param {string|number} phoneNumber The phone number of respondent
 * @returns {Array}
 */
export function getAnswersByFormIdAndPhoneNumber(id, phoneNumber) {
  return getAllAnsers().filter((answer) => answer.id === id && answer.phoneNumber === phoneNumber);
}

/**
 * Get answer by form id and session id
 * @param {number} formId The id of form that the answer belongs to
 * @param {string} sessionId The session id
 * @returns {Array|null}
 */
export function getAnswerByFormIdAndSessionId(formId, sessionId) {
  const answers = getAllAnsers().filter((answer) => answer.id === formId && answer.sessionId === sessionId);
  return answers.length ? answers[0] : null;
}

/**
 * Check wether an answer is exist or not by id and phone number
 * @param {number} id The id of answer
 * @param {number} phoneNumber The number phone of respondent
 * @returns {boolean}
 */
export function isAnswerExist(id, phoneNumber) {
  return !!(getAnswersByFormIdAndPhoneNumber(id, phoneNumber) || []).length;
}

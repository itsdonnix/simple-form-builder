import { writable } from 'svelte/store';
import LocalStorage from './storage';

export let forms = writable([]);
export let formsLocalStorage = new LocalStorage('forms');

forms.update(() => formsLocalStorage.getData() || []);

forms.subscribe((_forms) => {
  formsLocalStorage.setData(_forms);
});

export function addForm(newForm) {
  forms.update((_forms) => [..._forms, newForm]);
}

export function getForm(id) {
  let theForm;
  const unsubsribe = forms.subscribe((_forms) => (theForm = _forms.find((_form) => _form.id === id)));
  unsubsribe();
  return theForm;
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

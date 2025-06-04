export default class LocalStorage {
  namespace = '';

  constructor(namespace, initialData = []) {
    this.namespace = namespace;
    if (!localStorage.getItem(namespace)) {
      localStorage.setItem(namespace, JSON.stringify(initialData));
    }
  }

  getData() {
    const data = localStorage.getItem(this.namespace);
    return JSON.parse(data);
  }

  setData(data) {
    if (data) {
      localStorage.setItem(this.namespace, JSON.stringify(data));
    }
  }
}

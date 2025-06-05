import App from './App.svelte';
import './index.css';

window.__simpleFormBuilder_initialDocumentTitle = document.title;

const app = new App({
  target: document.body,
});

export default app;

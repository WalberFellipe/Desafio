import 'whatwg-fetch';
import App from './lib/App.svelte';

const app = new App({
  target: document.getElementById('svelte') as HTMLElement,
});

export default app;

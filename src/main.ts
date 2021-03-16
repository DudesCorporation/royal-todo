import { createApp } from 'vue';
import App from './App.vue';
import Icon from '@/components/Icon.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import auth from '@/plugins/auth';
import 'tailwindcss/dist/tailwind.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

app
  .component('Icon', Icon);

app
  .use(store)
  .use(router)
  .use(auth);

app.mount('#app');

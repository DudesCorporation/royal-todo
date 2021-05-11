import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Icon from '@/components/Icon.vue';
import auth from '@/plugins/auth';
import middleware from '@/middleware';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import '@/assets/styles/tailwind.scss';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

app
  .component('Icon', Icon);

app
  .use(store)
  .use(router)
  .use(auth)
  .use(middleware)
  .use(VueAxios, axios);

app.mount('#app');

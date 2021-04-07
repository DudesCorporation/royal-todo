<template>
  <div class="App">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const BasicLayout = defineAsyncComponent(() => import('@/views/layouts/BasicLayout.vue'));
    const LoginLayout = defineAsyncComponent(() => import('@/views/layouts/LoginLayout.vue'));

    const app = getCurrentInstance();
    const $auth = app?.appContext.config.globalProperties.$auth;
    const layout = computed(() => $auth.loggedIn ? BasicLayout : LoginLayout);

    return { layout };
  },
});
</script>

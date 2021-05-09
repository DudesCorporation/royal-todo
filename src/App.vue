<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useAuth } from '@/plugins/auth/Auth';

export default defineComponent({
  name: 'App',
  setup() {
    const BasicLayout = defineAsyncComponent(() => import('@/views/layouts/BasicLayout.vue'));
    const LoginLayout = defineAsyncComponent(() => import('@/views/layouts/LoginLayout.vue'));

    const $auth = useAuth();
    const layout = computed(() => $auth.loggedIn ? BasicLayout : LoginLayout);

    return { layout };
  },
});
</script>

<template>
  <div>
    <h1>Login layout</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginLayout',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const loginPath = '/login';

    if (route.path !== loginPath) {
      router.push(loginPath);
    }
  },
});
</script>

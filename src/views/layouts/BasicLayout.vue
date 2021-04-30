<template>
  <div class="BasicLayout">
    <BasicHeader class="fixed w-full" />
    <NavigationDrawer class="fixed w-64 top-16" />
    <main class="pt-16 pl-64">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicHeader from '@/components/basic/BasicHeader.vue';
import NavigationDrawer from '@/components/basic/NavigationDrawer.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    BasicHeader,
    NavigationDrawer,
  },
});
</script>

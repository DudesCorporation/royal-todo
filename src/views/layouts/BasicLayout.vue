<template>
  <div class="BasicLayout">
    <BasicHeader />
    <div class="flex">
      <NavigationDrawer />
      <slot />
    </div>
  </div>
</template>

<script>
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

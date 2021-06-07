<template>
  <div class="BasicLayout">
    <NavigationDrawer class="fixed z-50 w-64" />
    <main class="min-h-screen max-h-screen pl-64 pr-80 max-w-full flex flex-1">
      <div class="relative flex-1" :class="`overflow-${pageOverflow || 'auto'}`">
        <slot />
      </div>
    </main>
    <FastBuffer class="fixed w-80 min-h-screen top-0 right-0 z-50" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavigationDrawer from '@/components/basic/NavigationDrawer.vue';
import FastBuffer from '@/components/buffer/FastBuffer.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    NavigationDrawer,
    FastBuffer,
  },
  setup() {
    const route = useRoute();
    const pageOverflow = computed(() => route.meta.pageOverflow);

    return {
      pageOverflow,
    };
  },
});
</script>

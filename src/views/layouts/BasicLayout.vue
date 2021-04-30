<template>
  <div class="BasicLayout">
    <BasicHeader class="fixed z-50" />
    <NavigationDrawer class="fixed z-50 w-64 top-16" />
    <main class="min-h-screen max-h-screen pt-16 pl-64 pr-80 max-w-full flex flex-1">
      <div class="relative max-w-full flex-1 shadow-2xl overflow-auto">
        <slot />
      </div>
    </main>
    <FastBuffer class="fixed w-80 min-h-screen top-0 right-0 z-50" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicHeader from '@/components/basic/BasicHeader.vue';
import NavigationDrawer from '@/components/basic/NavigationDrawer.vue';
import FastBuffer from '@/components/buffer/FastBuffer.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    BasicHeader,
    NavigationDrawer,
    FastBuffer,
  },
});
</script>

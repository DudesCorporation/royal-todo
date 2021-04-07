<template>
  <i :class="`mdi mdi-${icon}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  computed: {
    icon() {
      return this.$slots.default?.().map(v => v.children).join();
    },
  },
});
</script>

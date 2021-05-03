<template>
  <i :class="`mdi${getIcon()}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  methods: {
    getIcon() {
      const icon = this.$slots.default?.().map(v => v.children).join();
      return icon ? ` mdi-${icon}` : '';
    },
  },
});
</script>

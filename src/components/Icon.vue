<template>
  <i :class="`mdi mdi-${getIcon()}`" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  methods: {
    getIcon() {
      return this.$slots.default?.().map(v => v.children).join();
    },
  },
});
</script>

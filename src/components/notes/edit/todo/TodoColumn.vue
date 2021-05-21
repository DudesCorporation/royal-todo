<template>
  <div class="TodoColumn">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoColumn',
});
</script>

<style lang="scss" scoped>
  .TodoColumn {
    @apply flex-1;

    &:not(:last-child) {
      @apply border-r border-gray-200;
    }
  }
</style>

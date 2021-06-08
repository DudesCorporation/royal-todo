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
    @apply flex-1 border-r;

    &:not(:last-child) {
      @apply border-gray-200;
    }

    &:last-child {
      @apply border-transparent;
    }
  }
</style>

<template>
  <div
    class="ListItem"
    :class="{ 'hover:bg-gray-100 select-none cursor-pointer': hasClickListener }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { SetupContext } from 'vue';

export default defineComponent({
  name: 'ListItem',
  setup(props, context: SetupContext) {
    const hasClickListener = computed(() => !!context.attrs.onClick);

    return {
      hasClickListener,
    };
  },
});
</script>

<style lang="scss" scoped>
  .ListItem {
    @apply px-2 py-1;
  }
</style>

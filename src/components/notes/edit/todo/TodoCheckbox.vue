<template>
  <input
    class="TodoCheckbox"
    type="checkbox"
    :checked="value"
    @change="$emit('change', $event.target.checked)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
});
</script>

<style lang="scss" scoped>
  .TodoCheckbox {
    @apply w-5 h-5;
  }
</style>

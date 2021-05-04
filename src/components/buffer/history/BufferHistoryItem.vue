<template>
  <div class="BufferHistoryItem bg-gray-50 shadow py-1 px-2 rounded-sm">
    <div class="text-xs text-gray-600">Created {{ createdDateTime }}</div>

    <div class="mt-1">{{ item.title }}</div>

    <div class="pt-1 flex gap-x-1">
      <button class="item-action">Restore</button>
      <button class="delete-item-action">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'BufferHistoryItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const buildDateTime = () => {
      const date = props.item.createdDate.toLocaleDateString().split('/').join('.');
      const time = props.item.createdDate.toLocaleTimeString();
      return `${date} at ${time}`;
    };

    const createdDateTime = computed(buildDateTime);

    return {
      createdDateTime,
    };
  },
});
</script>

<style scoped>
  .item-action {
    @apply text-xs text-gray-500 hover:text-gray-900 cursor-pointer focus:outline-none
      transition-none;
  }
  .delete-item-action {
    @apply item-action hover:text-red-700 !important;
  }
</style>

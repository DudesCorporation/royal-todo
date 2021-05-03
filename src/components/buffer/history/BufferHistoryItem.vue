<template>
  <div class="BufferHistoryItem bg-gray-50 shadow py-1 px-2 rounded-sm">
    <div class="text-xs text-gray-600">Created {{ createdDateTime }}</div>
    <div>{{ item.title }}</div>
    <div class="font-bold">hello</div>
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

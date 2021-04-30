<template>
  <div>
    <span>Item: {{ item }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BufferHistoryItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <div
    :tabindex="note.id"
    class="OneNote mb-4 px-4 py-2 cursor-pointer border-2 rounded-md hover:bg-gray-100
     hover:border-blue-300"
  >
    <b>{{ note.id }}</b>
    <div>{{ note }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OneNote',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
});
</script>

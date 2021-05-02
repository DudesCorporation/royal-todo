<template>
  <router-link
    class="OneNote border-2 rounded-md hover:bg-gray-100 hover:border-gray-400 focus:outline-none
     focus:bg-gray-100 focus:border-gray-400 mb-4 px-4 py-2 flex"
    :to="`/notes/${note.id}`"
  >
    <b>{{ note.id }}</b>
    <div>{{ note }}</div>
  </router-link>
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

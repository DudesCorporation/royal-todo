<template>
  <div class="OneNote">
    <pre>{{ note }}</pre>
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

<template>
  <div class="relative flex-grow mb-0.5">
    <div
      contenteditable="true"
      class="absolute flex-grow w-full focus:outline-none min-h-full max-h-full overflow-y-auto
       border-transparent bg-gray-200 focus:bg-white border-2 rounded-sm"
    >
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BufferEditorContent',
});
</script>

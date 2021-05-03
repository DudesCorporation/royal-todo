<template>
  <div class="relative flex-grow mb-0.5">
    <div
      contenteditable="true"
      class="absolute flex-grow w-full min-h-full max-h-full overflow-y-auto
       focus:outline-none rounded-sm"
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

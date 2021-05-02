<template>
  <div class="flex flex-col flex-grow-2">
    <BufferEditorHeader />
    <BufferEditorContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BufferEditorHeader from '@/components/buffer/editor/BufferEditorHeader.vue';
import BufferEditorContent from '@/components/buffer/editor/BufferEditorContent.vue';

export default defineComponent({
  name: 'BufferEditor',
  components: {
    BufferEditorHeader,
    BufferEditorContent,
  },
});
</script>

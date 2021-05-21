<template>
  <aside class="FastBuffer flex flex-col border-l border-black">
    <BufferEditor />
    <BufferHistory />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BufferHistory from '@/components/buffer/history/BufferHistory.vue';
import BufferEditor from '@/components/buffer/editor/BufferEditor.vue';

export default defineComponent({
  name: 'FastBuffer',
  components: {
    BufferHistory,
    BufferEditor,
  },
});
</script>

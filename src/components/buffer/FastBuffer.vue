<template>
  <aside
    tabindex="0"
    class="flex flex-col border-2 border-separate border-transparent bg-gray-400
     focus:border-blue-400"
  >
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

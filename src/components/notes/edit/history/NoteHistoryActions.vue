<template>
  <div class="NoteHistoryActions">
    <IconBtn
      icon="undo"
      title="Undo"
      tile
      class="side-action-btn"
    />

    <IconBtn
      icon="backup-restore"
      class="text-xl w-8 h-8 m-auto"
    />

    <IconBtn
      icon="redo"
      title="Redo"
      tile
      class="side-action-btn"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBtn from '@/components/root/IconBtn.vue';

export default defineComponent({
  name: 'NoteHistoryActions',
  components: {
    IconBtn,
  },
});
</script>

<style lang="scss" scoped>
  .NoteHistoryActions {
    @apply flex justify-between bg-white px-2 py-1 border-t border-gray-300;
  }

  .side-action-btn {
    @apply rounded text-xl px-8 py-2;
  }
</style>

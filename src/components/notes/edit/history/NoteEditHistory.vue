<template>
  <section class="NoteEditHistory">
    <div class="flex-1 px-1 overflow-y-auto">
      <div class="mx-2 my-1 text-lg font-bold">Note history</div>
      <NoteHistoryItem
        v-for="item in 105"
        :key="item"
      />
    </div>

    <NoteHistoryActions class="sticky bottom-0" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteHistoryItem from '@/components/notes/edit/history/NoteHistoryItem.vue';
import NoteHistoryActions from '@/components/notes/edit/history/NoteHistoryActions.vue';

export default defineComponent({
  name: 'NoteEditHistory',
  components: {
    NoteHistoryItem,
    NoteHistoryActions,
  },
});
</script>

<style lang="scss" scoped>
  .NoteEditHistory {
    @apply flex flex-col h-full w-full bg-white;
  }
</style>

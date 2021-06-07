<template>
  <section class="NoteEditHistory">
    <div class="px-2 py-1 border-b border-gray-400">
      <span class="text-lg font-bold">Note history</span>
    </div>

    <div class="flex flex-col flex-1 px-2 py-4 gap-y-3 overflow-y-auto">
      <NoteHistoryItemsGroup
        v-for="(group, index) in itemsGroups"
        :key="index"
        :group="group"
      />
    </div>

    <NoteHistoryActions class="sticky bottom-0" />
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NoteHistoryItemsGroup from '@/components/notes/edit/history/NoteHistoryItemsGroup.vue';
import NoteHistoryActions from '@/components/notes/edit/history/NoteHistoryActions.vue';
import { HistoryItems } from '@/collections/HistoryItems';
import { applyHistoryGroupsTitles, HistoryItemsGroup } from '@/helpers/history-items/items-groups';
import { tempNoteHistoryItems as noteHistoryItems } from '@/helpers/temp/fake-note-history';

export default defineComponent({
  name: 'NoteEditHistory',
  components: {
    NoteHistoryItemsGroup,
    NoteHistoryActions,
  },
  setup() {
    const collectedItemsGroups = new HistoryItems(noteHistoryItems).groupBySessionId().toArray();
    const itemsGroups = reactive(collectedItemsGroups) as HistoryItemsGroup[];

    applyHistoryGroupsTitles(itemsGroups);

    return {
      itemsGroups,
    };
  },
});
</script>

<style lang="scss" scoped>
  .NoteEditHistory {
    @apply flex flex-col h-full w-full bg-white;
  }
</style>

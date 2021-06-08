<template>
  <div class="NoteHistoryItemsGroup">
    <div class="mb-2">
      <div class="mb-0.5">{{ group.title }}</div>
      <hr />
    </div>

    <NoteHistoryItem
      v-for="item in group.items"
      :key="item.sessionId + item.eventDate"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteHistoryItem from '@/components/notes/edit/history/NoteHistoryItem.vue';

export default defineComponent({
  name: 'NoteHistoryItemsGroup',
  components: {
    NoteHistoryItem,
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <section class="NoteEditHistory">
    <div class="ml-2 my-1 text-lg font-bold">Note history</div>

    <div class="px-1">
      <NoteHistoryItem
        v-for="item in 5"
        :key="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteHistoryItem from '@/components/notes/edit/history/NoteHistoryItem.vue';

export default defineComponent({
  name: 'NoteEditHistory',
  components: {
    NoteHistoryItem,
  },
});
</script>

<style lang="scss" scoped>
  .NoteEditHistory {
    @apply h-full w-full bg-white overflow-y-auto;
  }
</style>

<template>
  <div class="NotesList">
    <OneNote
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import OneNote from '@/components/notes/OneNote.vue';
import { Notes } from '@/collections/Notes';
import type { Note } from '@/models/Note';

export default defineComponent({
  name: 'NotesList',
  components: {
    OneNote,
  },
  async setup() {
    const notes = reactive(new Notes());
    await notes.many();

    return {
      notes: notes.items as Note[],
    };
  },
});
</script>

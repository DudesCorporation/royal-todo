<template>
  <div class="EditNote h-full max-h-full flex flex-col">
    <EditNoteHeader />
    <div class="overflow-y-auto flex-1 px-3 py-4">
      <NoteEditCard />
    </div>
    <EditNoteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteEditCard from '@/components/notes/edit/NoteEditCard.vue';
import EditNoteHeader from '@/components/notes/edit/EditNoteHeader.vue';
import EditNoteFooter from '@/components/notes/edit/EditNoteFooter.vue';

export default defineComponent({
  name: 'EditNote',
  components: {
    NoteEditCard,
    EditNoteHeader,
    EditNoteFooter,
  },
});
</script>

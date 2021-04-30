<template>
  <div class="Home px-4 pt-5 pb-2">
    <Suspense>
      <NotesList />
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotesList from '@/components/notes/NotesList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    NotesList,
  },
});
</script>

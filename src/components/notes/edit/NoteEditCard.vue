<template>
  <div class="NoteEditCard mx-auto rounded-md min-h-full">
    <Suspense>
      <TodoList />

      <template #fallback>
        <div class="p-5">Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/notes/edit/todo/TodoList.vue';

export default defineComponent({
  name: 'NoteEditCard',
  components: {
    TodoList,
  },
});
</script>

<style lang="scss" scoped>
  .NoteEditCard {
    box-shadow: 0 3px 9px 1px rgb(0 0 0 / 30%), 0 5px 10px 0 rgb(0 0 0 / 6%);
  }
</style>

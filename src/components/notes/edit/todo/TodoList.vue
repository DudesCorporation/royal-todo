<template>
  <div class="TodoList">
    <OneTodo
      v-for="(todo, index) in todoList"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import OneTodo from '@/components/notes/edit/todo/OneTodo.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    OneTodo,
  },
  async setup() {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20').then(r => r.json());
    const todoList: unknown[] = reactive(todos);

    return {
      todoList,
    };
  },
});
</script>

<template>
  <div class="TodoList">
    <TodoTemplateRow
      :columns="tempColumns"
      @column-add="addNewColumn"
      @column-delete="deleteOneColumn"
    />

    <OneTodo
      v-for="(todo, index) in todoList"
      :key="index"
      :todo="todo"
      :columns="tempColumns"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import OneTodo from '@/components/notes/edit/todo/OneTodo.vue';
import TodoTemplateRow from '@/components/notes/edit/todo/TodoTemplateRow.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    OneTodo,
    TodoTemplateRow,
  },
  async setup() {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20').then(r => r.json());
    const todoList: unknown[] = reactive(todos);

    const tempColumns = reactive(['Title', 'Title', 'Title']);

    const addNewColumn = () => {
      tempColumns.push('Hello world');
    };

    const deleteOneColumn = (item, index) => {
      console.log('Column:', item, 'index:', index);
      tempColumns.splice(index, 1);
    };

    return {
      todoList,
      tempColumns,
      addNewColumn,
      deleteOneColumn,
    };
  },
});
</script>

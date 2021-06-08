<template>
  <div class="OneTodo">
    <TodoColumn
      class="flex justify-center p-3"
      style="max-width: 46px; min-width: 46px"
    >
      <TodoCheckbox
        :value="checked"
        @change="toggleChecked"
      />
    </TodoColumn>

    <TodoColumn
      v-for="(column, index) in columns"
      :key="index"
      class="p-2"
    >
      <div>{{ todo }}</div>
      <div>{{ todo }}</div>
    </TodoColumn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoColumn from '@/components/notes/edit/todo/TodoColumn.vue';
import TodoCheckbox from '@/components/notes/edit/todo/TodoCheckbox.vue';

export default defineComponent({
  name: 'OneTodo',

  components: {
    TodoColumn,
    TodoCheckbox,
  },

  props: {
    todo: {
      type: Object,
      default: null,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const checked = props.todo ? ref(props.todo.completed) : false;
    const toggleChecked = value => checked.value = value ?? !checked.value;

    return {
      checked,
      toggleChecked,
    };
  },
});
</script>

<style lang="scss" scoped>
  .OneTodo {
    @apply flex flex-1 hover:bg-gray-100;

    &:not(:last-child) {
      @apply border-b border-gray-200;
    }
  }
</style>

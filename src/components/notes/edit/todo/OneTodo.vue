<template>
  <div class="OneTodo">
    <div class="border-r border-gray-200 p-3">
      <TodoCheckbox :value="checked" @change="toggleChecked" />
    </div>

    <div class="flex-1 p-2">
      <div>{{ todo }}</div>
      <div>{{ todo }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoCheckbox from '@/components/notes/edit/todo/TodoCheckbox.vue';

export default defineComponent({
  name: 'OneTodo',
  components: {
    TodoCheckbox,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const checked = ref(props.todo.completed);
    // @ts-ignore
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

    &:not(:last-child) > div {
      @apply border-b border-gray-200;
    }
  }
</style>

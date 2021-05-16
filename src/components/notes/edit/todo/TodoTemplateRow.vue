<template>
  <div class="TodoTemplateRow">
    <TodoColumn
      class="flex justify-center py-2"
      style="max-width: 46px; min-width: 46px"
    >
      <IconBtn
        title="Add column"
        icon="plus"
        class="w-10 h-10 text-xl"
      />
    </TodoColumn>

    <DraggableList
      class="flex flex-1"
      :items="columns"
    >
      <template #item="props">
        <TodoColumn
          v-bind="props"
          class="flex items-center font-medium px-3 py-2"
        >
          <div>{{ props.item }}</div>
        </TodoColumn>
      </template>
    </DraggableList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoColumn from '@/components/notes/edit/todo/TodoColumn.vue';
import DraggableList from '@/components/drag-and-drop/DraggableList.vue';
import IconBtn from '@/components/root/IconBtn.vue';

export default defineComponent({
  name: 'TodoTemplateRow',
  components: {
    TodoColumn,
    DraggableList,
    IconBtn,
  },
  props: {
    // columns: {
    //   type: Array,
    //   required: true,
    // },
  },
  setup() {
    return {
      columns: ['Title', 'Title', 'Title'],
    };
  },
});
</script>

<style lang="scss" scoped>
  .TodoTemplateRow {
    @apply flex flex-1 border-b border-gray-200;
  }
</style>

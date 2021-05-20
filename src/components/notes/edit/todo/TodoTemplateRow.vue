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

    <ColumnOptionsMenu
      v-for="(column, index) in columns"
      :key="index"
    >
      <template #activator="{ on, active }">
        <TodoColumn
          class="flex items-center font-medium px-3 py-2 hover:bg-gray-50 cursor-pointer"
          v-on="on"
        >
          <span>{{ column }}</span>
          <div class="ml-auto">
            <Icon class="text-xl">{{ active ? 'chevron-up' : 'chevron-down' }}</Icon>
          </div>
        </TodoColumn>
      </template>
    </ColumnOptionsMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoColumn from '@/components/notes/edit/todo/TodoColumn.vue';
import IconBtn from '@/components/root/IconBtn.vue';
import Icon from '@/components/root/Icon.vue';
import ColumnOptionsMenu from '@/components/notes/edit/todo/ColumnOptionsMenu.vue';

export default defineComponent({
  name: 'TodoTemplateRow',
  components: {
    Icon,
    TodoColumn,
    IconBtn,
    ColumnOptionsMenu,
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

<style scoped>
  .TodoTemplateRow {
    @apply flex flex-1 border-b border-gray-200;
  }

  .ColumnOptionsMenu:last-child .TodoColumn {
    @apply border-none !important;
  }

  .ColumnOptionsMenu:not(:last-child) .TodoColumn {
    @apply border-r border-gray-200;
  }
</style>

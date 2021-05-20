<template>
  <BasicMenu
    class="ColumnOptionsMenu"
    lazy-content
    outlined
  >
    <template #activator="props">
      <slot name="activator" v-bind="props"></slot>
    </template>

    <BasicList>
      <ListItem
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
        v-on="item.handlers"
      >
        <label>
          <span>{{ item.name }}</span>

          <select v-if="item.inputType === OptionsInputType.Select">
            <option
              v-for="option in item.options"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <input
            v-else
            :type="item.inputType"
            class="menu-item__input"
          />
        </label>
      </ListItem>
    </BasicList>
  </BasicMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicMenu from '@/components/menu/BasicMenu.vue';
import BasicList from '@/components/lists/BasicList.vue';
import ListItem from '@/components/lists/ListItem.vue';
import { OptionsInputType, columnOptionsMenuItems } from '@/helpers/notes/column-menu-options';

export default defineComponent({
  name: 'ColumnOptionsMenu',
  components: {
    BasicMenu,
    BasicList,
    ListItem,
  },
  setup() {
    return {
      menuItems: columnOptionsMenuItems,
      OptionsInputType,
    };
  },
});
</script>

<style lang="scss" scoped>
  .ColumnOptionsMenu {
    @apply flex;

    .menu-item {
      &:not(:last-child) {
        @apply border-b border-gray-200;
      }

      &__input {
        @apply max-w-full;

        &[type=text] {
          @apply border border-blue-400;
        }
      }
    }
  }
</style>

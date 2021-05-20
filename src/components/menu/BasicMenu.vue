<template>
  <div ref="menuComponent" class="relative flex-1 select-none">
    <slot name="activator" :on="onEvent" :active="active"></slot>

    <transition
      enter-active-class="animated slideMenuInDown"
      leave-active-class="animated slideMenuOutUp"
    >
      <div
        v-if="lazyContent ? active : true"
        v-show="active"
        class="menu-content"
        :class="[
          {
            'border border-gray-200': outlined,
            'shadow-md': !outlined,
          },
          menuClass,
        ]"
      >
        <slot>{{ noItemsText }}</slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

export default defineComponent({
  name: 'OptionsMenu',
  props: {
    lazyContent: {
      type: Boolean,
      default: false,
    },
    noItemsText: {
      type: String,
      default: 'No items',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    menuClass: {
      type: [String, Object],
      default: '',
    },
  },
  setup() {
    const menuComponent = ref(null);
    const active = ref(false);

    const onEvent = {
      click: () => active.value = !active.value,
    };

    onClickOutside(menuComponent, () => active.value = false);

    return {
      menuComponent,
      active,
      onEvent,
    };
  },
});
</script>

<style scoped>
  .menu-content {
    @apply absolute top-full bg-white w-full;

    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%);
  }
</style>

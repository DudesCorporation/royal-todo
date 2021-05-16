<template>
  <div class="DraggableList">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <slot
        :ref="el => { if (el) draggableItems[index] = el }"
        name="item"
        :class="DRAGGABLE_ITEM_CLASS"
        class="relative"
        :item="item"
        :draggable="true"
        @dragstart="onDragStart"
        @dragend="onDragEnd"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
      >
        {{ item }}
      </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DraggableList',
  props: {
    items: {
      type: [Array, Number],
      required: true,
    },
  },
  setup() {
    const DRAGGABLE_ITEM_CLASS = 'DraggableItem';
    const draggableItems = ref([]);
    const currentDraggableItem = ref(null);

    const isDraggableItemOrChild = (
      target: HTMLElement
    ): boolean => target.classList.contains(DRAGGABLE_ITEM_CLASS);

    const onDragStart = $event => {
      currentDraggableItem.value = $event.target;
    };

    const onDragEnd = () => {
      currentDraggableItem.value = null;
    };

    const onDragEnter = $event => {
      if (!currentDraggableItem.value) return;

      console.log('Enter');

      if (isDraggableItemOrChild($event.target)) {
        $event.target.style.backgroundColor = '#80808045';
      }
    };

    const onDragLeave = $event => {
      if (!currentDraggableItem.value) return;

      console.log('Leave');

      if (isDraggableItemOrChild($event.target)) {
        $event.target.style.backgroundColor = '';
      }
    };

    return {
      DRAGGABLE_ITEM_CLASS,
      draggableItems,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragLeave,
    };
  },
});
</script>

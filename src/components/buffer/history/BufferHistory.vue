<template>
  <div
    class="BufferHistory flex flex-col flex-grow bg-gray-100 border border-gray-300"
    :class="{
      'minimized': minimized && !maximized,
      'flex-grow-2 max-h-screen-60': itemsScrolled && !pinned && !maximized,
      'absolute max-h-screen h-screen': maximized,
      'rounded-t-lg max-h-screen-40 transition-all': !maximized,
    }"
    @mouseleave="itemsScrolled = false"
  >
    <BufferHistoryHeader :actions="toolbarActions" />

    <div
      v-if="!minimized || maximized"
      class="flex-1 overflow-y-scroll py-4 px-2 flex flex-col gap-y-2"
      @scroll="onItemsScroll"
    >
      <BufferHistoryItem
        v-for="(historyItem, index) in fastBufferItems"
        :key="index"
        :item="historyItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { mapGetters } from 'vuex';
import BufferHistoryItem from '@/components/buffer/history/BufferHistoryItem.vue';
import BufferHistoryHeader from '@/components/buffer/history/BufferHistoryHeader.vue';

export default defineComponent({
  name: 'BufferHistory',
  components: {
    BufferHistoryItem,
    BufferHistoryHeader,
  },
  setup() {
    const minimized = ref(false);
    const toggleMinimized = () => minimized.value = !minimized.value;

    const pinned = ref(false);
    const togglePinned = () => pinned.value = !pinned.value;

    const maximized = ref(false);
    const toggleMaximize = () => maximized.value = !maximized.value;

    const itemsScrolled = ref(false);
    const onItemsScroll = () => itemsScrolled.value = true;

    const toolbarActions = computed(() => [
      {
        title: pinned.value ? 'Unpin' : 'Pin',
        icon: pinned.value ? 'pin-off' : 'pin',
        action: togglePinned,
      },
      {
        title: minimized.value ? 'Maximize' : 'Minimize',
        icon: minimized.value ? 'window-maximize' : 'window-minimize',
        action: toggleMinimized,
      },
      {
        title: maximized.value ? 'Collapse window' : 'Expand window',
        icon: maximized.value ? 'arrow-collapse-vertical' : 'arrow-expand-vertical',
        action: toggleMaximize,
      },
    ]);

    return {
      toolbarActions,
      minimized,
      pinned,
      maximized,
      itemsScrolled,
      onItemsScroll,
    };
  },
  computed: {
    ...mapGetters([
      'fastBufferItems',
    ]),
  },
});
</script>

<style lang="scss" scoped>
  .BufferHistory.minimized {
    max-height: 42px;
  }
</style>

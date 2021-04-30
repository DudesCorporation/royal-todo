<template>
  <div
    class="BufferHistory flex flex-col flex-grow bg-gray-300
     rounded-t transition-all duration-500"
    :class="{ 'minimized': minimized, 'hover:flex-grow-2': !pinned }"
  >
    <BufferHistoryHeader :actions="toolbarActions" />

    <div class="flex-1 overflow-y-scroll pt-4 pl-2">
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

    const toolbarActions = computed(() => [
      {
        title: pinned.value ? 'Unpin' : 'Pin',
        icon: pinned.value ? 'pin-off' : 'pin',
        action: togglePinned,
      },
      { title: minimized.value ? 'Maximize' : 'Minimize', icon: 'window-minimize', action: toggleMinimized },
      { title: '', icon: 'close', action: () => 0 },
    ]);

    return {
      toolbarActions,
      minimized,
      pinned,
      toggleMinimized,
      togglePinned,
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
    max-height: 38px;
  }
</style>

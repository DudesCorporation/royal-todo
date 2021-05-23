<template>
  <div class="NoteHistoryItem group">
    <div class="flex justify-between mb-0.5">
      <div class="font-medium">History event</div>

      <div class="flex gap-1">
        <IconBtn
          icon="restore"
          title="Restore version"
          class="w-6 h-6 opacity-0 group-hover:opacity-100"
          @click="onRestoreClick"
        />
        <IconBtn
          icon="close"
          title="Delete item"
          class="w-6 h-6 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
    <div class="text-sm">Super big new change</div>
    <div class="text-sm">Previous value</div>
    <div class="text-gray-500 text-xs mt-1">Created {{ createdDateTime }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import IconBtn from '@/components/root/IconBtn.vue';

export default defineComponent({
  name: 'NoteHistoryItem',
  components: {
    IconBtn,
  },
  setup() {
    const date = new Date();
    const createdDateTime = computed(
      () => date.toLocaleDateString().split('/').join('.') + ' at ' + date.toLocaleTimeString()
    );

    const onRestoreClick = () => {
      // TODO actions: restore to this version / apply this old changes to current version
    };

    return {
      createdDateTime,
      onRestoreClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.NoteHistoryItem {
  @apply mb-1 p-1 border border-gray-400 rounded;
}
</style>

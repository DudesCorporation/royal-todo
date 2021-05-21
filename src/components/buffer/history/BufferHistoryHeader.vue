<template>
  <div class="pl-3 pr-5 pt-2">
    <div class="flex justify-between items-center border-b border-gray-500 pb-2">
      <div class="pl-0.5">Buffer history</div>

      <div class="px-2 flex">
        <IconBtn
          v-for="(item, index) in actions"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          class="ml-1 px-1 py-0.5 w-7 hover:bg-gray-300 hover:border-gray-600 active:bg-gray-400"
          @click="item.action"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBtn from '@/components/root/IconBtn.vue';

export default defineComponent({
  name: 'BufferHistoryHeader',
  components: {
    IconBtn,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
});
</script>

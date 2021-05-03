<template>
  <div class="pl-3 pr-5 pt-2">
    <div class="flex justify-between items-center border-b border-gray-500 pb-2">
      <div class="pl-0.5">Buffer history</div>

      <div class="px-2 flex">
        <button
          v-for="(item, index) in actions"
          :key="index"
          :title="item.title"
          class="flex justify-center items-center cursor-pointer ml-1 px-1 py-0.5
             rounded-full w-7 hover:bg-gray-300 hover:border-gray-600 active:bg-gray-400
              transition-all ease-linear focus:outline-none outline-none"
          @click="item.action"
        >
          <Icon>{{ item.icon }}</Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BufferHistoryHeader',
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
});
</script>

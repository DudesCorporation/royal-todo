<template>
  <div class="flex justify-between items-center">
    <div class="pl-1 text-2xl text-black">Fast buffer</div>

    <div class="py-1 pr-3">
      <button
        class="text-white bg-gray-600 px-3 py-1 mr-2 focus:outline-none rounded active:bg-gray-500"
      >
        <Icon>cancel</Icon>
      </button>
      <button
        class="text-white bg-gray-600 px-3 py-1 mr-2 focus:outline-none rounded active:bg-gray-500"
      >
        <Icon>content-copy</Icon>
      </button>
      <button
        class="text-white bg-gray-600 px-3 py-1 focus:outline-none rounded active:bg-gray-500"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BufferEditorHeader',
});
</script>

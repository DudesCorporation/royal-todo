<template>
  <header class="BasicHeader flex justify-between items-center pl-6 pr-6 border-b border-black">
    <router-link
      class="text-2xl"
      to="/"
    >
      Royal ToDo
    </router-link>

    <button
      class="px-4 py-2 text-white bg-blue-500 border-2 border-blue-600
        rounded-md focus:outline-none active:bg-blue-600"
    >
      Create new
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicHeader',
});
</script>

<style lang="scss">
.BasicHeader {
  height: $toolbar-height;
  width: calc(100% - 20rem);
}
</style>

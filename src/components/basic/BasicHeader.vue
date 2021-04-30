<template>
  <header class="BasicHeader flex justify-between items-center pl-6 pr-6 shadow-xl">
    <router-link
      class="text-white text-2xl hover:text-yellow-300"
      to="/"
    >
      Royal ToDo
    </router-link>

    <button
      class="px-4 py-2 text-white bg-green-500 border-2 border-green-600
        rounded-md focus:outline-none active:bg-green-400"
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
  background-color: #02112b;
  height: $toolbar-height;
}
</style>

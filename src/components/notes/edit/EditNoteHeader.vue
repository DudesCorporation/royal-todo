<template>
  <header
    class="EditNoteHeader min-h-3 lg:min-h-4 flex items-center px-3 bg-white
     border-b border-gray-400"
  >
    <router-link
      tag="button"
      class="w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-200 text-2xl
       transition-all duration-200 active:bg-gray-300"
      to="/notes"
    >
      <Icon>arrow-left</Icon>
    </router-link>

    <div class="pl-3">
      <span class="font-bold">Note title</span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditNoteHeader',
});
</script>

<style lang="scss" scoped>
 .EditNoteHeader {
   //box-shadow: 0 3px 9px 1px rgb(0 0 0 / 30%), 0 5px 10px 0 rgb(0 0 0 / 6%);
 }
</style>

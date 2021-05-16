<template>
  <header
    class="EditNoteHeader min-h-3 lg:min-h-4 flex items-center px-3 bg-white
     border-b border-gray-400"
  >
    <IconBtn
      class="w-12 h-12 text-2xl"
      icon="arrow-left"
      to="/notes"
    />

    <div class="pl-3">
      <span class="font-bold">Note title</span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconBtn from '@/components/root/IconBtn.vue';

export default defineComponent({
  name: 'EditNoteHeader',
  components: {
    IconBtn,
  },
});
</script>

<style lang="scss" scoped>
 .EditNoteHeader {
   //box-shadow: 0 3px 9px 1px rgb(0 0 0 / 30%), 0 5px 10px 0 rgb(0 0 0 / 6%);
 }
</style>

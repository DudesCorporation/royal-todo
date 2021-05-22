<template>
  <section class="NoteEditHistory">
    <div class="text-lg font-bold">Note history</div>
    <div>hello</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteEditHistory',
});
</script>

<style lang="scss" scoped>
  .NoteEditHistory {
    @apply h-full w-full bg-white overflow-y-auto;
  }
</style>

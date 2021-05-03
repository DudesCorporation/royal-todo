<template>
  <div class="flex bg-gray-100 border-b border-gray-300">
    <button
      v-for="(mode, index) in editorModes"
      :key="index"
      class="editor-mode"
      :class="{ 'active': mode === active }"
      @click="setActive(mode)"
    >
      {{ mode }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BufferEditorModes',
  setup() {
    const editorModes = ['plain', 'rich', 'code', 'any'];
    const active = ref('plain');
    const setActive = newActive => {
      active.value = newActive;
    };

    return {
      editorModes,
      active,
      setActive,
    };
  },
});
</script>

<style lang="scss" scoped>
  .editor-mode {
    @apply focus:outline-none flex-grow w-1/4;

    &.active {
      @apply bg-gray-300;
    }
  }
</style>

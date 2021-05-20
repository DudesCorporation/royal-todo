<template>
  <div class="BasicList py-1">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicList',
});
</script>

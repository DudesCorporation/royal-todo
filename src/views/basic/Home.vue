<template>
  <div class="Home">
    <BasicHeader />
    <div class="p-2">Home page</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicHeader from '@/components/basic/BasicHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BasicHeader,
  },
});
</script>

<template>
  <div class="home">
    <MainHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from '@/components/MainHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHeader,
  },
});
</script>

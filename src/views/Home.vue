<template>
  <div class="Home flex flex-col">
    <MainHeader />
    <NavigationDrawer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import NavigationDrawer from '@/components/base/NavigationDrawer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MainHeader,
    NavigationDrawer,
  },
});
</script>

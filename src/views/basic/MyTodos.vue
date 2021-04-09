<template>
  <main class="MyTodos">
    <div class="content">
      <Loader v-if="loading" />
      <div v-else>No Todos!</div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loader from '@/components/Loader.vue';

export default defineComponent({
  name: 'MyTodos',
  components: {
    Loader,
  },
  data() {
    return { loading: true };
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
    }, 4000);
  },
});
</script>

<style lang="scss">
.content {
  position: relative;
  width: 100%;
}
</style>

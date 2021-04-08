<template>
  <main class="MyTodos">
    <MainHeader />
    <section class="wrapper">
      <NavigationDrawer />

      <div class="content">
        <Loader v-if="loading" />
        <div v-else>
          No Todos!
        </div>
        <div class="todo-block">
          <ul>
            <li class="todo-block__item">
              I should make something usless
            </li>
            <li class="todo-block__item">
              I should make something usless
            </li>
            <li class="todo-block__item ">
              I should make something usless
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loader from '@/components/Loader.vue';
import MainHeader from '@/components/basic/BasicHeader.vue';
import NavigationDrawer from '@/components/basic/NavigationDrawer.vue';

export default defineComponent({
  name: 'MyTodos',
  components: {
    Loader,
    MainHeader,
    NavigationDrawer,
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
.wrapper {
  display: flex;
}
.content {
  position: relative;
  width: 100%;
}
</style>

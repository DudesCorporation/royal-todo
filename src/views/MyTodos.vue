<template>
  <main class="MyTodos ">
    <MainHeader class="main-header" />
    <section class="wrapper">
      <NavigationDrawer />

      <div class="content">
        <Loader v-if="loading" />
        <div v-else>No Todos!</div>
        <h2>
          My Todos
          <router-link to="/completed">Go to view completed Todo</router-link>
        </h2>
        <div class="todo-block">
          <ul>
            <li class="todo-block__item">I should make something usless</li>
            <li class="todo-block__item">I should make something usless</li>
            <li class="todo-block__item ">I should make something usless</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loader from '@/components/Loader.vue'
import MainHeader from '@/components/MainHeader.vue'
import NavigationDrawer from '@/components/base/NavigationDrawer.vue'

export default defineComponent({
  name: 'MyTodos',
  components: {
    Loader,
    MainHeader,
    NavigationDrawer,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true
    }, 4000)
  },
})
</script>

<style lang="scss">
$bgClr: #08090c;
$fontClr: #cfd6db;

.wrapper {
  display: flex;
}
.content {
  position: relative;
  width: 100%;
}
.MyTodos {
  height: 100vh;
  background-color: $bgClr;
  color: $fontClr;
}
</style>

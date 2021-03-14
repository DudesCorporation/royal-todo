<template>
  <main class="MyTodos">
    <MainHeader />
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
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loader from '@/components/Loader.vue'
import MainHeader from '@/components/MainHeader.vue'

export default defineComponent({
  name: 'MyTodos',
  components: {
    Loader,
    MainHeader,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  },
})
</script>

<style lang="scss"></style>

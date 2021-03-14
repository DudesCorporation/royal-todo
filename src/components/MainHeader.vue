<template>
  <header class="MainHeader flex bg-gray-800 text-white h-16 items-center text-2xl p-4">
    <router-link to="/" class="logo">Royal ToDo</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

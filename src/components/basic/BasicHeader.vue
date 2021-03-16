<template>
  <header class="BasicHeader flex text-white h-16 items-center text-2xl p-6 shadow-lg">
    <router-link to="/" class="logo hover:text-yellow-300">Royal ToDo</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BasicHeader',
});
</script>

<style lang="scss">
.BasicHeader {
  background-color: #02112b;
}
</style>

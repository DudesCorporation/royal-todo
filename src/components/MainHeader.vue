<template>
  <header class="MainHeader flex text-white items-center text-2xl p-6 shadow-lg">
    <router-link to="/" class="logo hover:text-yellow-300">Royal ToDo</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainHeader',
})
</script>

<style lang="scss">
.MainHeader {
  background-color: #02112b;
  height: $toolbar-height;
}
</style>

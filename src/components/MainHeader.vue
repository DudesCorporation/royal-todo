<template>
  <header class="MainHeader flex text-white h-16 items-center text-2xl p-6">
    <router-link to="/" class="logo">Royal ToDo</router-link>
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
}
</style>

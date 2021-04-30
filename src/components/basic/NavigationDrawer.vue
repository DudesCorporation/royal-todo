<template>
  <nav class="NavigationDrawer flex flex-col pt-0.5">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      v-slot="{ isExactActive }"
      class="mx-1 mt-1"
      :to="item.link"
    >
      <div
        class="p-3 rounded cursor-pointer hover:bg-gray-200
          active:bg-gray-400 hover:text-black"
        :class="{ 'bg-gray-300': isExactActive }"
      >
        <Icon class="text-2xl">{{ item.icon }}</Icon>
        <span class="text-xl pl-2">{{ item.title }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'NavigationDrawer',
  computed: {
    ...mapGetters({
      items: 'navigationDrawerItems',
    }),
  },
});
</script>

<style lang="scss" scoped>
  .NavigationDrawer {
    height: calc(100vh - #{$toolbar-height});
  }
</style>

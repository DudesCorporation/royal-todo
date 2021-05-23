<template>
  <nav class="NavigationDrawer">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      v-slot="{ isExactActive }"
      class="mx-2 mt-1"
      :to="item.link"
    >
      <div
        class="nav-btn"
        :class="{ 'bg-gray-300': isExactActive }"
      >
        <Icon class="text-xl">{{ item.icon }}</Icon>
        <span class="text-lg pl-4">{{ item.title }}</span>
      </div>
    </router-link>

    <div class="p-2 mt-auto">
      <div class="nav-btn flex items-center">
        <div class="rounded-full w-10 h-10 bg-gray-500"></div>
        <div class="font-bold ml-4">John Doe</div>
        <Icon class="ml-auto text-2xl">chevron-right</Icon>
      </div>
    </div>
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
    @apply flex flex-col border-r border-gray-400 h-screen;
  }

  .nav-btn {
    @apply p-3 rounded cursor-pointer hover:bg-gray-200 active:bg-gray-300;
  }
</style>

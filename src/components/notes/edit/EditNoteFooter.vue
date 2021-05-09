<template>
  <footer class="EditNoteFooter min-h-4 bg-white border-t border-gray-300">
    <span class="text-2xl">footer</span>
    <button
      class="ml-2 bg-blue-600"
      @click="logout"
    >
      Logout
    </button>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditNoteFooter',
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
});
</script>

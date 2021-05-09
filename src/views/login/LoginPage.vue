<template>
  <div class="LoginPage">
    <h1>Hello from login page</h1>
    <br />
    <button
      class="focus:outline-none bg-blue-400"
      @click="signIn"
    >
      Sign in
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  methods: {
    signIn() {
      this.$auth.signIn();
      this.$router.push('/');
    },
  },
});
</script>

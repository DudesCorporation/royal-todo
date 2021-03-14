<template>
  <svg>
    <path :d="mdiMenu"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="'25'"
    :height="'25'"
    :viewBox="mdiMenu"
    role="presentation"
  >
    <title
      :id="'iconName'"
      lang="en"
    >{{iconName}} icon</title>
    <g :fill="'white'">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mdiMenu } from '@mdi/js';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      mdiMenu,
    };
  },
});
</script>

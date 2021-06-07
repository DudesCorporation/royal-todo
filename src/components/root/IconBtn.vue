<template>
  <component
    :is="to ? 'router-link' : 'button'"
    tag="button"
    class="flex justify-center items-center hover:bg-gray-200 cursor-pointer
       transition-all duration-200 active:bg-gray-300 ease-linear focus:outline-none outline-none"
    :class="{ 'rounded-full': !tile }"
    :to="to"
  >
    <slot>
      <Icon>{{ icon }}</Icon>
    </slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconBtn',
  props: {
    to: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    tile: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

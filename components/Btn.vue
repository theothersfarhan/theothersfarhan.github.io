<template>
  <button
    :class="{
      'px-5 py-3 text-center transition-all border-2 border-primary font-semibold': true,
      'bg-primary hover:bg-transparent hover:text-primary  text-gray-900':
        variant === 'solid',
      ' text-primary hover:bg-primary hover:text-gray-900 ':
        variant === 'outlined',
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<"solid" | "outlined">,
    default: "solid",
  },
});
</script>

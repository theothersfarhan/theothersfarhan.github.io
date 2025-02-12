<template>
  <div
    :class="{
      'relative w-full': true,
      'mb-8': !cls.includes('mb-'),
    }"
  >
    <h2 :class="`${sizeCls} relative z-20 bg-secondary max-w-max pr-20`">
      <slot />
    </h2>

    <span
      class="absolute left-0 top-1/2 -translate-y-1/2 min-w-[100vw] min-h-1 bg-primary"
    ></span>
  </div>
</template>

<script setup lang="ts">
const cls = useClass();

defineProps({
  sizeCls: {
    type: String,
    default: "h1c",
  },
});
</script>

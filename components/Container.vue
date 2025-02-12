<template>
  <div class="mx-auto max-w-[1536px] relative container">
    <div
      :class="{
        'w-full': true,
        [innerClass]: true,
        '2xl:mr-28 xl:mr-10 lg:mr-8 mr-4': !innerClass.includes('mr-'),
        '2xl:ml-28 xl:ml-10 lg:ml-8 ml-4': !innerClass.includes('ml-'),
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  innerClass: {
    type: String,
    default: "",
  },
});
</script>

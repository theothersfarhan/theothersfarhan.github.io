<template>
  <Hero :content="content" class="section-border" />
</template>

<script setup lang="ts">
const content = await useSiteContent();
</script>

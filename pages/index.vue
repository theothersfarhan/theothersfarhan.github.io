<template>
  <Hero :content="content" />
</template>

<script setup lang="ts">
const content = await useSiteContent();
</script>

<style>
body * {
  font-family: Montserrat;
}
</style>

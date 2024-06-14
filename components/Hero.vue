<template>
  <div class="min-h-screen w-full hero-gradient">
    <Container class="pt-10">
      <Navbar :content="content" />
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { SiteContent } from "~/types";

const props = defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
});
</script>

<style>
.hero-gradient {
  @apply bg-gradient-to-r from-secondary from-70% to-primary to-70%;
}
</style>

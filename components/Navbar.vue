<template>
  <div class="w-full flex justify-between">
    <p class="font-bold text-xl text-white">PORTFOLIO.</p>

    <div class="flex items-center">
      <a href="#contact" class="text-secondary font-bold mr-8">Contact Me</a>

      <div class="flex items-center gap-3">
        <!-- Social links -->
        <a
          :href="l.link"
          v-for="l in content.allSocialLinks"
          :key="l.link"
          target="_blank"
          class="block rounded-full bg-secondary p-1"
        >
          <img :src="l.icon.url" class="w-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SiteContent } from "~/types";

defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
});
</script>

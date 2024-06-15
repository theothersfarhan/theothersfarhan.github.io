<template>
  <div class="w-full hero-gradient-center relative overflow-hidden">
    <div class="hero-gradient container relative mx-auto p-14 min-h-[800px]">
      <Navbar :content="content" />

      <div class="text-xl absolute top-1/2 -translate-y-1/2 ml-28">
        <p class="text-primary font-medium mb-4">Hello Everyone.</p>
        <h1 class="text-7xl font-bold text-white flex flex-col gap-3">
          <span>I'M FARHAN</span>
          <span>ABBAS</span>
        </h1>
        <div class="bg-primary p-1 flex items-stretch max-w-max mt-14">
          <p class="font-bold text-white bg-secondary px-8 py-2 max-w-[300px]">
            {{ content.mainSection.designation }}
          </p>
          <div class="p-5">
            <ArrowRightIcon class="textsecondary w-8" />
          </div>
        </div>
      </div>

      <img
        :src="content.mainSection.heroImage.url"
        class="absolute right-[19%] bottom-0 w-[400px]"
      />
    </div>
    <DottedBox class="absolute bottom-0 left-0" />
  </div>
</template>

<script setup lang="ts">
import type { SiteContent } from "~/types";
import { ArrowRightIcon } from "heroicons-vue3/solid";

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
.hero-gradient-center {
  @apply bg-gradient-to-r from-secondary from-50% to-primary to-50%;
}
</style>

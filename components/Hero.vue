<template>
  <div class="w-full hero-gradient relative overflow-hidden">
    <Container class="bg-secondary p-14 min-h-[100vh] xl:min-h-[700px]">
      <div
        class="absolute right-0 top-0 h-full bg-primary lg:w-[350px] xl:w-[450px]"
      ></div>
      <Navbar
        :content="content"
        class="absolute top-0 z-10 w-full left-0 p-14"
      />

      <div class="absolute top-1/2 -translate-y-1/2 ml-28">
        <p class="text-primary font-medium mb-4 lg:text-sm xl:text-xl">
          Hello Everyone.
        </p>
        <h1
          class="lg:text-5xl xl:text-6xl font-bold text-white flex flex-col gap-3"
        >
          <span>I'M FARHAN</span>
          <span>ABBAS</span>
        </h1>
        <div
          class="bg-primary p-1 flex items-stretch max-w-max lg:mt-8 xl:mt-14"
        >
          <p
            class="flex items-center font-bold text-white bg-secondary lg:px-2 xl:px-4 py-2 lg:text-xs xl:text-base"
          >
            {{ content.mainSection.designation }}
          </p>
          <div class="lg:p-2 xl:p-3 flex items-center">
            <ArrowRightIcon class="text-secondary lg:w-5 xl:w-6" />
          </div>
        </div>
      </div>

      <img
        :src="content.mainSection.heroImage.url"
        class="absolute lg:right-[220px] xl:right-[280px] bottom-0 lg:w-[300px] xl:w-[400px]"
      />
    </Container>
    <DottedBox class="absolute bottom-0 left-0 -ml-3 -mb-3" />
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
  @apply bg-gradient-to-r from-secondary from-50% to-primary to-50%;
}
</style>

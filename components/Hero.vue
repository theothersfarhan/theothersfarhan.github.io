<template>
  <div class="w-full hero hero-gradient relative overflow-hidden"> 
    <Blob class="left-1/4 top-1/4" />

    <div>
      <Container class="bg-secondary">
      <div
        class="absolute right-0 top-0 h-full bg-primary lg:w-[350px] xl:w-[450px]"
      ></div>
      <Navbar
        :content="content"
        class="absolute top-0 z-10 w-full left-0 p-14"
      />

      <div class="absolute top-1/2 -translate-y-1/2 z-10">
        <p class="text-primary font-medium mb-4 lg:text-sm xl:text-xl">
            <ClientOnly fallback="Hello">
              <GreetingRotator />
            </ClientOnly>
        </p>
        <h1
          class="lg:text-5xl xl:text-6xl font-bold text-white flex flex-col gap-3"
        >
          <span>I'M FARHAN</span>
          <span>ABBAS</span>
        </h1>
        <a
          class="bg-primary p-1 rounded flex items-stretch max-w-max lg:mt-8 xl:mt-14 cta-cont"
          target="_blank"
          href="https://www.google.com"
        >
          <p
            class="flex items-center font-bold rounded text-white bg-secondary lg:px-2 xl:px-4 py-2 lg:text-xs xl:text-base designation overflow-hidden whitespace-nowrap relative"
            ref="designation"
          >
              <div
                class="absolute left-0 top-0 lg:px-2 xl:px-4 w-full h-full bg-secondary rounded flex items-center justify-start"
                v-if="showLink"
              >
                www.upwork.com
              </div>
            {{ content.mainSection.designation }}
          </p>
          <div
            class="lg:p-2 xl:p-3 flex items-center hover:pl-8 transition-all"
            @mouseenter="showLink = true"
            @mouseleave="showLink = false"
          >
            <p class="text-secondary text-base uppercase font-bold mr-2">
              hire me
            </p>
            <ArrowRightIcon class="text-secondary lg:w-5" />
          </div>
        </a>
      </div>

      <div
        class="absolute lg:right-[220px] xl:right-[260px] 3xl:right-[230px] bottom-0"
      >
        <Image
          preload
          :src="content.mainSection.heroImage.url"
          class="lg:w-[300px] xl:w-[425px] 3xl:w-[500px] absolute bottom-0 left-0 mousereact heroimage"
        />
      </div>
      </Container>
    <DottedBox class="absolute bottom-0 left-0 -ml-3 -mb-3" />
  </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp } from "#app";
import type { SiteContent } from "~/types";
import { ArrowRightIcon } from "heroicons-vue3/solid";

const props = defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
});

onMounted(() => {
  const { $gsap } = useNuxtApp();

  $gsap.to(".cta-cont", {
    opacity: 1,
    y: 20,
    duration:1,
  });

  $gsap.to(".heroimage", {
    x: 0,
    opacity: 1,
    duration: 1,
  });
});

const showLink = ref(false);
</script>

<style lang="scss">
.hero-gradient {
  @apply bg-gradient-to-r from-secondary from-50% to-primary to-50%;
}

.cta-cont {
  @apply opacity-0 transform -translate-y-10;
}

.heroimage {
  @apply translate-x-[10%] opacity-0;
}
</style>

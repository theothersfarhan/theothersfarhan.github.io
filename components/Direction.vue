<template>
  <div class="direction text-white">
    <div class="bg-primary w-1/2 h-1/2 absolute bottom-0 left-0"></div>

    <Container class="center">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-7">
          <div class="flex items-start gap-10">
            <img
              :src="content.directionSection.imageLeft.url"
              :class="imageClass"
            />
            <img
              :src="content.directionSection.imageRight.url"
              :class="imageClass"
            />
          </div>
        </div>

        <div class="col-span-5">
          <SectionHeading>Direction</SectionHeading>
          <h3 class="text-xl font-medium text-primary uppercase mb-20">
            Videography career
          </h3>

          <p class="opacity-70">{{ content.directionSection.description }}</p>
        </div>
      </div>
    </Container>

    <DottedBox class="absolute bottom-0 right-0 -ml-3 -mb-3" />
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

const imageClass = "w-5/12";
</script>

<template>
  <div class="about-me text-white">
    <Container class="center">
      <div class="flex w-full justify-start gap-32">
        <div>
          <img
            :src="content.mainSection.aboutImage.url"
            class="lg:w-[400px] object-cover object-center aspect-[3.3/4] w-full"
            :style="{
              boxShadow: '-20px 20px var(--color-primary)',
            }"
          />
        </div>

        <div class="max-w-[600px]">
          <SectionHeading>About Me</SectionHeading>
          <p>{{ content.mainSection.about }}</p>
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
</script>

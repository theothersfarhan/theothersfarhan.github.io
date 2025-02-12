<template>
  <div class="skills-section text-white">
    <Container class="center" inner-class="mr-0">
      <div class="w-full grid grid-cols-12 gap-20">
        <div class="col-span-6">
          <Image
            :src="content.skillsSection.image.url"
            class="w-full aspect-[3.3/4] lg:w-[400px]"
            :style="{
              boxShadow: '40px 40px #2ad882',
            }"
          />
        </div>
        <div class="col-span-6">
          <SectionHeading class="mb-24">Skills</SectionHeading>
          <p class="mb-8">{{ content.skillsSection.description }}</p>

          <div
            v-for="skill in content.skillsSection.skill"
            :key="skill.name"
            class="mb-8 max-w-full w-full lg:w-[400px]"
          >
            <p class="font-bold mb-4">{{ skill.name }}</p>
            <ProgressBar :progress="skill.precentage" />
          </div>
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

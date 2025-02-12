<template>
  <div class="skills-section text-white">
    <div class="absolute left-0 top-0 w-4/12 h-full bg-primary"></div>

    <Container class="center" inner-class="mr-0">
      <div class="w-full">
        <h2 class="text-7xl text-center font-black mb-24">Academics</h2>

        <div class="flex items-start justify-center gap-20">
          <Image
            :src="content.academicsSection.image.url"
            class="aspect-square max-w-full w-[400px]"
            img-cls="object-top"
          />

          <div>
            <div v-for="ed in items" :key="ed.name" class="mb-8">
              <p class="font-medium text-primary text-2xl mb-2">
                {{ ed.name }}
              </p>
              <p class="max-w-[500px]">{{ ed.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <DottedBox class="absolute top-0 right-0 -ml-3 -mb-3" />
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

const items = computed(() =>
  props.content.academicsSection.academicInstituions.filter((b) => !b.hide)
);
</script>

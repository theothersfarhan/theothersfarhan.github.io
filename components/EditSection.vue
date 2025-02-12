<template>
  <div class="edit-section text-white">
    <Container class="center" inner-class="mr-0">
      <div class="w-full">
        <SectionHeading class="mb-24">How do we edit?</SectionHeading>

        <div class="grid grid-cols-12 gap-20">
          <div class="col-span-4">
            <div
              v-for="item in content.howDoWeEditSection.editingSoftware"
              :key="item.name"
              class="mb-6"
            >
              <h3 class="text-primary font-semibold mb-3 text-5xl">
                {{ item.name }}
              </h3>
            </div>
          </div>

          <div class="col-span-8 center">
            <div class="flex flex-1 gap-10">
              <img
                :src="content.howDoWeEditSection.image.url"
                alt="Camera"
                class="w-full"
              />
            </div>
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

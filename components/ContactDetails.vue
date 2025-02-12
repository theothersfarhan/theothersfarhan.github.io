<template>
  <div class="skills-section text-white">
    <Container class="center" inner-class="mr-0">
      <div class="w-full">
        <div class="w-full flex items-center justify-center gap-20">
          <Image
            :style="{
              boxShadow: '-20px 20px #2ad882',
            }"
            :src="content.contactSection.image.url"
            class="w-[400px] aspect-square max-w-full"
          />

          <div>
            <SectionHeading>Contact Details</SectionHeading>

            <div
              v-for="item in content.contactSection.contactInformation"
              :key="item.id"
            >
              <p class="mb-5">
                <span class="text-primary font-semibold mr-3"
                  >{{ item.title }}:</span
                ><span class="italic">{{ item.value }}</span>
              </p>
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
</script>

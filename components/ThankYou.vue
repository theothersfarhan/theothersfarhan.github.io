<template>
  <div class="skills-section text-white">
    <div class="absolute left-0 top-0 w-4/12 h-full bg-primary"></div>

    <Container class="center" inner-class="mr-0">
      <div class="w-full">
        <div class="w-full flex items-center justify-center gap-20">
          <Image
            :src="content.footer.image.url"
            class="w-[400px] aspect-square max-w-full"
          />

          <div>
            <SectionHeading size-cls="text-7xl font-bold"
              >THANK YOU</SectionHeading
            >

            <p class="max-w-[600px] mb-10">{{ content.footer.description }}</p>

            <div class="flex items-center gap-6">
              <a
                :href="content.footer.buttonLink"
                target="_blank"
                class="flex-1 inline-block"
              >
                <Btn variant="outlined" class="w-full">{{
                  content.footer.buttonText
                }}</Btn>
              </a>
              <Btn class="flex-1">Contact Me</Btn>
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

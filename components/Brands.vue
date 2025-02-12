<template>
  <div class="skills-section text-white">
    <Container class="center" inner-class="mr-0">
      <SectionHeading class="ml-[550px] mb-24">Brands</SectionHeading>
      <div class="flex items-center justify-between">
        <div v-for="brand in brands" :key="brand.name">
          <Image
            :src="brand.logo.url"
            class="w-full aspect-sqaure lg:w-[200px]"
          />
          <p class="text-center mt-4 font-medium text-primary">
            {{ brand.name }}
          </p>
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

const brands = computed(() => props.content.allBrands.filter((b) => !b.hide));
</script>

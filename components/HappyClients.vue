<template>
  <div class="direction text-white">
    <Container class="center">
      <div class="w-full">
        <SectionHeading class="mb-32"> Happy Clients Say </SectionHeading>
        <div class="grid grid-cols-2 gap-16">
          <div
            v-for="client in content.allHappyClients"
            :key="client.message"
            class="border-4 w-full rounded border-primary p-7 relative"
          >
            <span
              class="absolute right-10 -top-8 bg-primary rounded-full p-5 aspect-square center"
            >
              <IconsQuotesIcon class="w-8 text-white" />
            </span>

            <div class="flex items-center gap-4">
              <img
                :src="client.client.image.url"
                class="rounded border-4 border-primary aspect-square w-[180px] object-cover object-center"
              />

              <div class="-mt-5">
                <p class="text-xl font-bold">{{ client.client.name }}</p>
                <p class="text-sm">{{ client.client.designation }}</p>
              </div>
            </div>

            <p class="text-base mt-5">{{ client.message }}</p>
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

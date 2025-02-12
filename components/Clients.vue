<template>
  <div class="clients text-white">
    <Container class="center">
      <div>
        <SectionHeading class=""> Best Clients </SectionHeading>
        <div class="grid grid-cols-3 gap-10">
          <div
            v-for="client in content.allClients"
            :key="client.id"
            class="mb-20"
          >
            <img
              :src="client.image.url"
              class="object-cover object-center w-full aspect-square mb-6 rounded"
            />

            <h3 class="h2c mb-2">{{ client.name }}</h3>
            <span class="text-primary font-medium">{{
              client.designation
            }}</span>
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

<template>
  <Hero :content="content" class="section-border" />
  <AboutMe :content="content" class="section-border" />
  <Clients :content="content" class="section-border" />
  <Direction :content="content" class="section-border" />
  <HappyClients :content="content" class="section-border" />
  <ShootSection :content="content" class="section-border" />
  <EditSection :content="content" class="section-border" />
  <SkillsSection :content="content" class="section-border" />
  <Brands :content="content" class="section-border" />
  <Academics :content="content" class="section-border" />
  <ContactDetails :content="content" class="section-border" />
  <ThankYou :content="content" class="section-border" />
</template>

<script setup lang="ts">
const content = await useSiteContent();
</script>

<style lang="scss">
.section-border .container {
  @apply p-14 min-h-[100vh] 3xl:min-h-[800px];
}
.section-border {
  @apply bg-secondary border-b-4 border-gray-700 relative overflow-hidden;
}
</style>

<template>
  <div :key="forceRenderKey">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const content = ref(await useSiteContent());
const forceRenderKey = ref(0);

onMounted(() => {
  if (process.env.NODE_ENV !== "production") {
    document.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        forceRenderKey.value++;
      }
    });
  }

  const { $gsap } = useNuxtApp();
  const elements = document.querySelectorAll(".mousereact");

  if (!elements.length) return;

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    elements.forEach((el) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = -(clientX - (left + width / 2)) * 0.01;
      const y = -(clientY - (top + height / 2)) * 0.01;

      $gsap.to(el, {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });

  document.addEventListener("mouseleave", () => {
    $gsap.to(elements, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.section-border {
  @apply bg-secondary border-b-4 border-gray-700 relative overflow-hidden;
}

.section-border .container {
  @apply p-14 min-h-[100vh];
}
</style>

<template>
  <ClientOnly>
    <div
      ref="cont"
      class="flex flex-wrap gap-4 h-[150px] w-[270px]"
      v-bind="$attrs"
    >
      <span
        v-for="(_, i) in circleCount"
        :key="i"
        class="circle block w-2 h-2 rounded-full bg-white bg-opacity-10"
        :class="Math.random() > 0.5 ? 'group-a' : 'group-b'"
      ></span>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const { $gsap } = useNuxtApp();
const cont = ref<HTMLElement | null>(null);
const circleCount = ref(55);

watchEffect(() => {
  if (!cont.value) return;

  const groupA = cont.value.querySelectorAll(".group-a");
  const groupB = cont.value.querySelectorAll(".group-b");
  const animated = (circles) => {
    $gsap.to(circles, {
      opacity: $gsap.utils.random(0.1, 0.5),
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  };

  animated(groupA);
  animated(groupB);
});
</script>

<style scoped>
.circle {
  transition: opacity 0.1s ease-in-out;
}
</style>

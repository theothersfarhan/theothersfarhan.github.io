<!-- components/GreetingRotator.vue -->
<template>
  <div class="relative h-8 overflow-hidden">
    <p
      v-for="(greeting, index) in greetings"
      :key="index"
      class="absolute inset-0 opacity-0 transition-opacity duration-1000"
      :class="{ 'opacity-100': index === currentIndex }"
    >
      {{ greeting }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Olá",
  "你好",
  "नमस्ते",
  "مرحبًا",
  "Привет",
];

const currentIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % greetings.length;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
p {
  @apply left-0 top-0 w-full;
}
</style>

<template>
  <div class="progress-bar flex items-center gap-4" ref="progressBar">
    <div class="w-full bg-gray-700 overflow-hidden h-7">
      <div
        class="bg-primary transition-all ease-linear h-7"
        :style="{ width: currentProgress + '%' }"
      ></div>
    </div>
    <span class="text-3xl">{{ displayedProgress }}%</span>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100,
    },
  },
  data() {
    return {
      currentProgress: 0,
      displayedProgress: 0,
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateProgress();
          this.observer.disconnect();
        }
      });
    });
    this.observer.observe(this.$refs.progressBar);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    animateProgress() {
      const increment = this.progress / 100;
      const interval = setInterval(() => {
        if (this.currentProgress < this.progress) {
          this.currentProgress += increment;
          this.displayedProgress = Math.round(this.currentProgress);
        } else {
          clearInterval(interval);
          this.currentProgress = this.progress;
          this.displayedProgress = this.progress;
        }
      }, 10);
    },
  },
};
</script>

<template>
  <div ref="backgroundRef" class="relative">
    <picture class="w-full h-full left-0 top-0" v-if="defaultSrc">
      <source
        v-if="desktopSize"
        :srcset="updateQueryParams(defaultSrc, { h: desktopSize.toString() })"
        :media="`(min-width: ${desktopBreakpoint}px)`"
      />
      <source
        v-if="desktopSize"
        :srcset="defaultSrc"
        :media="`(max-width: ${desktopBreakpoint - 1}px)`"
      />

      <img
        :src="desktopSize ? undefined : defaultSrc"
        :class="{
          'w-full h-full left-0 top-0 object-cover': true,
          [imgCls || '']: true,
          'object-center': !imgCls?.includes('object-'),
        }"
        :alt="alt"
      />
    </picture>

    <SkeletonLoader
      class="absolute left-0 top-0 w-full h-full"
      v-show="loading && !preload"
    />

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  loadWhenVisible: {
    type: [String, Boolean],
    default: false,
  },
  preload: {
    type: Boolean,
    default: false,
  },
  alt: {
    type: String,
    default: "",
  },
  desktopSize: {
    type: Number,
  },
  desktopBreakpoint: {
    type: Number,
    default: 1024,
  },
  imgCls: String,
});

const loading = ref(true);
const backgroundRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const defaultSrc = ref("");

const loadBackground = () => {
  const load = () => {
    loading.value = false;
    defaultSrc.value = props.src;
  };

  if (props.preload) {
    load();
    return;
  }

  try {
    const img = new Image();
    img.src = props.src;
    img.onload = load;
  } catch (error) {
    load();
  }
};

const observeElement = (element: HTMLElement) => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadBackground();
        observer?.disconnect();
      }
    },
    { rootMargin: "300px 0px" }
  );

  observer.observe(element);
};

if (props.preload) {
  const linkTags: any[] = [];

  if (props.desktopSize) {
    linkTags.push(
      {
        rel: "preload",
        as: "image",
        href: updateQueryParams(props.src, {
          h: props.desktopSize.toString(),
        }),
        fetchpriority: "high",
        media: `(min-width: ${props.desktopBreakpoint}px)`,
      },
      {
        rel: "preload",
        as: "image",
        href: props.src,
        fetchpriority: "high",
        media: `(max-width: ${props.desktopBreakpoint - 1}px)`,
      }
    );
  } else {
    linkTags.push({
      rel: "preload",
      as: "image",
      href: props.src,
      fetchpriority: "high",
    });
  }

  useHeadSafe({ link: linkTags });
  loadBackground();
}

onMounted(() => {
  if (props.preload) {
    return;
  }

  const el: HTMLElement | null = props.loadWhenVisible
    ? document.querySelector(props.loadWhenVisible as string)
    : backgroundRef.value;

  if (props.lazy && el) {
    observeElement(el);
  } else {
    loadBackground();
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

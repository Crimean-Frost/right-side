<template>
  <div class="blog__carousel">
    <ul class="blog__carousel-list">
      <BlockHomeBlogCard
          :home-blog-card-data="data"
          :button="button"
          :is-animating-prev="isAnimatingPrev"
          :is-animating-next="isAnimatingNext"
          :current-index="currentIndex"
      />
    </ul>
    <div class="blog__carousel-buttons" v-if="showButtons">
      <SvgArrowCardBack
          :class="['blog__carousel-button-back blog__carousel-button', {'blog__carousel-button-disabled': currentIndex === 0}]"
          :fill="currentIndex === 0 ?'#BABABA': '#FF3B26'"
          @click="prev"
      />
      <SvgArrowCardNext
          :class="['blog__carousel-button', {'blog__carousel-button-disabled': currentIndex + visibleItems >= data.length}]"
          :fill="currentIndex + visibleItems >= data.length ?'#BABABA': '#FF3B26'"
          @click="next"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {BlogsBase} from "~/types/responses/collections/blogs";
import {computed, ref} from "vue";

type BlockHomeBlogCarouselProps = {
  data: BlogsBase[];
  button: string;
};

const props = defineProps<BlockHomeBlogCarouselProps>();

const currentIndex = ref(0);
const visibleItems = ref(3);

const updateVisibleItems = () => {
  const width = window.innerWidth;
  if (width >= 1920) {
    visibleItems.value = 4;
  } else if (width >= 1440) {
    visibleItems.value = 3;
  } else if (width >= 970) {
    visibleItems.value = 2;
  } else if (width > 768) {
    visibleItems.value = 1;
  }
};

const isAnimatingNext = ref(false);
const isAnimatingPrev = ref(false);

const next = () => {
  if (currentIndex.value < props.data.length - visibleItems.value) {
    currentIndex.value += visibleItems.value;
    isAnimatingNext.value = true;
    setTimeout(() => {
      isAnimatingNext.value = false;
    }, 700);
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= visibleItems.value;
    isAnimatingPrev.value = true;
    setTimeout(() => {
      isAnimatingPrev.value = false;
    }, 700);
  }
};

const showButtons = computed(() => props.data.length > visibleItems.value);

onMounted(() => {
  updateVisibleItems();
});
</script>

<style scoped>
.blog__carousel {
  @apply md:mt-[65px] sm:mt-[44px] sm:mr-[-10px]
}

.blog__carousel-list {
  @apply flex overflow-hidden md:overflow-x-auto
}

.blog__carousel-list {
  scrollbar-width: none;
}

.blog__carousel-list::-webkit-scrollbar {
  display: none;
}

.blog__carousel-buttons {
  @apply flex items-center justify-end mt-[39px] md:hidden
}

.blog__carousel-button {
  @apply cursor-pointer
}

.blog__carousel-button-disabled {
  @apply cursor-auto
}

.blog__carousel-button-back {
  @apply mr-[20px]
}
</style>
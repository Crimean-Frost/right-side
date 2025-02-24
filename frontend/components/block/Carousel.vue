<template>
  <div class="carousel">
    <ul class="carousel__container">
      <li class="carousel__item"
          v-for="(item, index) in data"
          :key="index"
          :style="{
            transform: isAnimatingNext
              ? `translateX(calc(-${currentIndex * (101.9)}% - 5%))`
              : isAnimatingPrev
              ? `translateX(calc(-${currentIndex * (101.9)}% + 5%))`
              : `translateX(-${currentIndex * 101.9}%)`
          }"
      >
        <h3 class="carousel__title">
          {{ typograf.execute(item.shortTitle) }}
        </h3>
        <ButtonSecondary
            class="carousel__container-button"
            :to="`${linkToCase}${item.slug}`"
        >
          {{ button }}
        </ButtonSecondary>
      </li>
    </ul>
    <div class="carousel_buttons" v-if="showButtons">
      <SvgArrowCardBack
          :class="['carousel_button carousel_button-back', {'carousel_button-disabled': currentIndex === 0}]"
          :fill="currentIndex === 0 ?'#BABABA': '#FF3B26'"
          @click="prev"
      />
      <SvgArrowCardNext
          :class="['carousel_button carousel_button-back', {'carousel_button-disabled': currentIndex + visibleItems >= data.length}]"
          :fill="currentIndex + visibleItems >= data.length ?'#BABABA': '#FF3B26'"
          @click="next"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import type {CasesBase} from '~/types/responses/collections/cases';

type BlockCarouselProps = {
  data: CasesBase[];
  button: string;
};

const props = defineProps<BlockCarouselProps>();

const linkToCase = '/cases/';

const currentIndex = ref(0);
const visibleItems = ref(3);

const updateVisibleItems = () => {
  const width = window.innerWidth;
  if (width >= 1630) {
    visibleItems.value = 3;
  } else if (width >= 1085) {
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
.carousel__container {
  @apply flex overflow-hidden mr-[-10px] scroll-m-0 scroll-p-0 md:overflow-x-auto
}

.carousel__container {
  scrollbar-width: none;
}

.carousel__container::-webkit-scrollbar {
  display: none;
}

.carousel__item {
  @apply flex flex-col items-start justify-between w-[530px] min-w-[530px] h-[285px] mr-[10px] py-[48px] pb-[72px] pl-[23px] pr-[41px] border-2 border-orange rounded-[15px]
  md:w-[504px] md:min-w-[504px] md:h-[270px] md:pb-[67px]
  sm:w-[336px] sm:min-w-[336px] sm:h-[245px] sm:pt-[59px] sm:pb-[57px] sm:px-[32.5px]
}

.carousel__item {
  transition: transform 0.7s ease-in-out;
}

.carousel__title {
  @apply max-w-[423px] max-h-[93px] text-black text-[26px] font-medium leading-[118%] tracking-[0.85px] overflow-hidden
  sm:max-w-[90%] sm:max-h-[66px] sm:text-[18px] sm:tracking-[0.36px]
}

.carousel__container-button {
  @apply xl:w-[200px] xl:h-[60px] md:h-[51px]
}

.carousel_buttons {
  @apply flex items-center justify-end mt-[40px] md:hidden
}

.carousel_button {
  @apply cursor-pointer
}

.carousel_button-disabled {
  @apply cursor-auto
}

.carousel_button-back {
  @apply mr-[20px] last:mr-0
}
</style>
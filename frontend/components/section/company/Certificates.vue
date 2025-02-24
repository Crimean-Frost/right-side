<template>
  <section class="certificates__section">
    <TitleSection class="certificates__title">{{ title }}</TitleSection>
    <div class="certificates__carousel">
      <ul class="certificates__list">
        <li class="certificates__item"
            v-for="(certificate, index) in certificatesList"
            :key="index"
            :style="{
            transform: isAnimatingNext
              ? `translateX(calc(-${currentIndex * (102.1)}% - 5%))`
              : isAnimatingPrev
              ? `translateX(calc(-${currentIndex * (102.1)}% + 5%))`
              : `translateX(-${currentIndex * 102.1}%)`
          }"
        >
          <picture>
            <source :srcset="`${config.public.apiBase}${certificate.imageMobile?.url}`" media="(max-width: 900px)">
            <img :src="`${config.public.apiBase}${certificate.image?.url}`" :alt="certificate.image?.alternativeText ? certificate.image?.alternativeText : 'Изображение'"
                 class="certificates__item-image">
          </picture>
        </li>
      </ul>
      <div class="carousel_buttons" v-if="showButtons">
        <SvgArrowCardBack
            :class="['carousel_button carousel_button-back', {'carousel_button-disabled': currentIndex === 0}]"
            :fill="currentIndex === 0 ?'#BABABA': '#FF3B26'"
            @click="prev"
        />
        <SvgArrowCardNext
            :class="['carousel_button carousel_button-back', {'carousel_button-disabled': currentIndex + visibleItems >= certificatesList.length}]"
            :fill="currentIndex + visibleItems >= certificatesList.length ?'#BABABA': '#FF3B26'"
            @click="next"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {Images} from "~/types/responses/components/section-components/images";
import ArrowCardBack from "~/components/svg/arrowCardBack.vue";
import ArrowCardNext from "~/components/svg/arrowCardNext.vue";
import {computed, ref} from "vue";

export type SectionCompanyCertificatesProps = {
  title: string
  certificatesList: Images[]
}
const props = defineProps<SectionCompanyCertificatesProps>();

const config = useRuntimeConfig();

const currentIndex = ref(0);
const visibleItems = ref(4);

const next = () => {
  if (currentIndex.value < props.certificatesList.length - visibleItems.value) {
    currentIndex.value += visibleItems.value;
    isAnimatingNext.value = true;
    setTimeout(() => {
      isAnimatingNext.value = false;
    }, 700);
  }
};

const updateVisibleItems = () => {
  const width = window.innerWidth;
  if (width >= 1920) {
    visibleItems.value = 4;
  } else if (width >= 1440) {
    visibleItems.value = 3;
  } else if (width >= 960) {
    visibleItems.value = 2;
  } else if (width > 768) {
    visibleItems.value = 1;
  }
};

const isAnimatingNext = ref(false);
const isAnimatingPrev = ref(false);

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= visibleItems.value;
    isAnimatingPrev.value = true;
    setTimeout(() => {
      isAnimatingPrev.value = false;
    }, 700);
  }
};

const showButtons = computed(() => props.certificatesList.length > visibleItems.value);

onMounted(() => {
  updateVisibleItems();
});
</script>

<style scoped>
.certificates__section {
  @apply mt-[150px] md:mt-[117px] sm:mt-[98px]
}

.certificates__title {
  @apply mb-[60px] md:mb-[38px] sm:mb-[42px]
}

.certificates__carousel {
  @apply mr-[-10px]
}

.certificates__list {
  @apply w-full flex items-center gap-[10px] mb-[40px] overflow-hidden scroll-p-0 scroll-m-0
  md:overflow-x-auto;
}

.certificates__list {
  scrollbar-width: none;
}

.certificates__list::-webkit-scrollbar {
  display: none;
}

.certificates__item {
  @apply w-[467px] h-[327px] min-w-[467px] min-h-[327px]
  md:w-[366px] md:min-w-[366px] md:min-h-[256px] md:h-[256px]
  sm:w-[336px] sm:min-w-[336px] sm:min-h-[235px] sm:h-[235px];
  transition: transform 0.7s ease-in-out;
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

.certificates__item-image {
  @apply w-full h-full rounded-[15px]
}
</style>
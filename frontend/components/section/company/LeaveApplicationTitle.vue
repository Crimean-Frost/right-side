<template>
  <section class="leave_application__section">
    <TitleSection class="leave_application__title">
      {{ headingTitle }}
    </TitleSection>
    <div
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['leave_application__promo', {'leave_application__promo-visible': isImageIntersectionVisible}]"
    >
      <picture>
        <img src="/img/webp/drawing.webp" alt="Круг с полосками" class="leave_application__promo-drawing">
      </picture>
      <picture>
        <source :srcset="`${config.public.apiBase}${card.coverMobile.url}`" media="(max-width: 900px)">
        <img :src="`${config.public.apiBase}${card.cover.url}`" :alt="card.cover.alternativeText ? card.cover.alternativeText : 'Изображение'"
             class="leave_application__promo-img">
      </picture>
      <div class="leave_application__inner">
        <p class="leave_application__inner-text" v-html="typograf.execute(card.title)"></p>
        <ButtonSecondary
            :class="['leave_application__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
            :to="card.link"
        >
          {{ card.button }}
        </ButtonSecondary>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {TitleCard} from "~/types/responses/components/section-components/title-card";

type SectionCompanyApplicationTitle = {
  headingTitle: string,
  card: TitleCard,
}
const props = defineProps<SectionCompanyApplicationTitle>();
const config = useRuntimeConfig();

const pageWidth = ref(0);
const isButtonIntersectionVisible = ref(false);
const isImageIntersectionVisible = ref(false);

function onIntersectionImageObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting && !isImageIntersectionVisible.value) {
    isImageIntersectionVisible.value = true;
    setTimeout(() => {
      isButtonIntersectionVisible.value = true;
    }, 2000);
  }
}

onMounted(() => {
  pageWidth.value = window.innerWidth;
})
</script>

<style scoped>
.leave_application__section {
  @apply mt-[151px] xl:mt-[151px] md:mt-[112.5px] sm:mt-[97px]
}

.leave_application__title {
  @apply mb-[61px] xl:mb-[63px] md:mb-[41.5px] sm:mb-[41px]
}

.leave_application__promo {
  @apply relative overflow-hidden h-0 transition-all duration-[2s]
}

.leave_application__promo-visible {
  @apply h-[748px] xl:h-[561px] sm:h-[278px]
}

.leave_application__promo-img {
  @apply absolute w-full h-full rounded-[16px] object-cover
}

.leave_application__promo-drawing {
  @apply absolute z-[1] bottom-[52px] right-[-5px] w-[389px] h-[323px] opacity-0 transition-all duration-[2s]
  xl:bottom-[20px] xl:w-[280px] xl:h-[232px]
  md:bottom-[40px] md:right-[-5px] md:w-[204px] md:h-[169px]
  sm:top-auto sm:bottom-[10px] sm:right-[10px] sm:left-auto sm:w-[80px] sm:h-[66px]
}

.leave_application__promo-visible .leave_application__promo-drawing {
  @apply opacity-100
}

.leave_application__inner {
  @apply relative z-[1] flex flex-col items-start justify-end py-[39px] px-[41px] w-full h-full md:p-[30px] sm:px-[18px] sm:py-[18px]
}

.leave_application__inner-text {
  @apply max-w-[491px] mb-[35px] text-white text-[22px] font-golos font-medium leading-[116%] opacity-0 transition-all duration-[2s]
  xl:max-w-[451px] xl:mb-[23px]
  md:max-w-[391px] md:mb-[21px]
  sm:max-w-full sm:text-[16px] sm:mb-[14px]
}

.leave_application__promo-visible .leave_application__inner-text {
  @apply opacity-100
}

.leave_application__button {
  @apply opacity-0 xl:w-[200px] xl:h-[50px]
  md:w-[250px] md:h-[60px]
  sm:w-[170px] sm:h-[46px]
}
</style>
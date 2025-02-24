<template>
  <section class="request__section">
    <TitleSection class="request__title">
      {{ section.title }}
    </TitleSection>
    <div
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['request__promo', {'request__promo-is-visible': isImageIntersectionVisible}]"
    >
      <picture>
        <img src="/img/webp/drawing.webp" alt="Круг с полосками" class="request__promo-drawing">
      </picture>
      <picture>
        <source :srcset="`${config.public.apiBase}${section.card.coverMobile.url}`" media="(max-width: 900px)">
        <img :src="`${config.public.apiBase}${section.card.cover.url}`"
             :alt="section.card.cover.alternativeText ? section.card.cover.alternativeText : 'Изображение'"
             class="request__promo-img">
      </picture>
      <div class="request__inner">
        <p class="request__inner-text" v-html="typograf.execute(section.card.title)"></p>
        <ButtonPrimary
            :class="['request__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
            :text="section.card.button"
            :to="section.card.link"
        />
      </div>
    </div>
    <ButtonPrimary
        v-intersection-observer="value => onIntersectionButtonVisible(value)"
        :class="['request__button-mobile', {'fade-up__text-500': isButtonMobileIntersectionVisible}]"
        :text="section.card.button"
        :to="section.card.link"
    />
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {LeaveApplication} from "~/types/responses/components/sections/leave-application";

type SectionRequestPromoProps = {
  section: LeaveApplication
}
const props = defineProps<SectionRequestPromoProps>();
const config = useRuntimeConfig();

const pageWidth = ref(0);
const isButtonIntersectionVisible = ref(false);
const isButtonMobileIntersectionVisible = ref(false);
const isImageIntersectionVisible = ref(false);

function onIntersectionButtonVisible([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isButtonMobileIntersectionVisible.value = true;
  }
}

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
.request__section {
  @apply mt-[151px] xl:mt-[151px] md:mt-[117px] sm:mt-[98px]
}

.request__title {
  @apply mb-[65px] xl:mb-[63px] md:mb-[61px] sm:mb-[39px]
}

.request__promo {
  @apply relative block h-0 overflow-hidden transition-all duration-[2s]
}

.request__promo-is-visible {
  @apply h-[748px] xl:h-[561px] sm:h-[278px]
}

.request__promo-img {
  @apply absolute w-full h-full rounded-[16px] object-cover
}

.request__promo-drawing {
  @apply absolute z-[1] top-[19px] right-0 opacity-0 transition-opacity duration-[2s]
  xl:top-[15px] xl:right-[-14px] xl:w-[282px] xl:h-[232px]
  lg:w-[204px] lg:h-[169px]
  md:top-[24px] md:right-[214px]
  sm:block sm:w-[70px] sm:h-[60px] sm:top-[10px] sm:right-[3px]
}

.request__promo-is-visible .request__promo-drawing {
  @apply opacity-100
}

.request__inner {
  @apply p-[40px] w-full h-full
  md:flex md:flex-col md:items-start md:justify-end md:p-[30px]
  sm:px-[18px] sm:py-[24px]
}

.request__inner-text {
  @apply relative z-[1] max-w-[479px] text-white text-[26px] font-golos font-medium leading-[119%]
  opacity-0 transition-opacity duration-[2s]
  xl:max-w-[375px] xl:text-[22px] xl:leading-[117%]
  md:max-w-[421px]
  sm:max-w-[281px] sm:text-[16px] sm:leading-[118%]
}

.request__promo-is-visible .request__inner-text {
  @apply opacity-100
}

.request__button {
  @apply absolute left-[40px] bottom-[40px] opacity-0
  md:left-auto md:right-[30px] md:bottom-[30px]
  sm:hidden
}

.request__button-mobile {
  @apply hidden opacity-0 sm:block sm:mx-auto sm:mt-[29px]
}
</style>
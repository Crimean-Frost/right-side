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
        <p class="request__inner-text-secondary" v-html="typograf.execute(section.card.description)"></p>
        <ButtonPrimary
            :class="['request__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
            :text="section.card.button"
            :to="section.card.link"
        />
      </div>
    </div>
    <ButtonPrimary
        v-intersection-observer="value => onIntersectionButtonObserver(value)"
        :class="['request__button-mobile', {'fade-up__text-500': isButtonMobileIntersectionVisible}]"
        :text="section.card.button"
        :to="section.card.link"
    />
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {LeaveApplicationDescription} from "~/types/responses/components/sections/leave-application-description";

type SectionRequestPromoProps = {
  section: LeaveApplicationDescription
}

const props = defineProps<SectionRequestPromoProps>();
const config = useRuntimeConfig();

const pageWidth = ref(0);
const isButtonIntersectionVisible = ref(false);
const isButtonMobileIntersectionVisible = ref(false);
const isImageIntersectionVisible = ref(false);

function onIntersectionButtonObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
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
  @apply mt-[151px] xl:mt-[153px] md:mt-[117px] sm:mt-[98px]
}

.request__title {
  @apply mb-[65px] xl:mb-[63px] md:mb-[42px] sm:mb-[41px]
}

.request__promo {
  @apply relative h-0 transition-all duration-[2s]
}

.request__promo-is-visible {
  @apply h-[748px] xl:h-[561px] sm:h-[278px]
}

.request__promo-img {
  @apply absolute w-full h-full rounded-[16px] object-cover
}

.request__promo-drawing {
  @apply absolute z-[1] bottom-[45px] right-0 opacity-0 transition-all duration-[2s]
  xl:bottom-[30px] xl:right-[4px] xl:w-[334px] xl:h-[277px]
  md:w-[204px] md:h-[169px] md:top-[30px] md:bottom-auto md:right-[3px]
  sm:block sm:w-[70px] sm:h-[60px] sm:top-[10px] sm:right-[3px]
}

.request__promo-is-visible .request__promo-drawing {
  @apply opacity-100
}

.request__inner {
  @apply py-[39px] px-[41px] w-full h-full
  xl:py-[40px]
  md:flex md:flex-col md:items-start justify-end md:py-[35px] md:px-[30px]
  sm:px-[18px] sm:py-[22px] sm:pt-[115px]
}

.request__inner-text {
  @apply relative z-[1] max-w-[479px] text-white text-[26px] font-golos font-medium leading-[31.2px] mb-[21px]
  opacity-0 transition-all duration-[2s]
  xl:max-w-[440px] xl:mb-[19px] xl:text-[22px] xl:leading-[119%]
  md:max-w-[421px] md:mb-[12px]
  sm:max-w-[289px] sm:mb-[8px] sm:text-[16px] sm:leading-[121%]
}

.request__promo-is-visible .request__inner-text {
  @apply opacity-100
}

.request__inner-text-secondary {
  @apply relative max-w-[358px] text-white text-[18px] font-light font-onest leading-[114%] z-[1] tracking-[-0.7px]
  md:leading-[108%]
  sm:w-full sm:text-[16px] sm:leading-[18.4px] sm:tracking-[-0.6px]
}

.request__button {
  @apply absolute left-[40px] bottom-[40px] opacity-0
  md:left-auto md:right-[30px] md:bottom-[30px] sm:hidden
}

.request__button-mobile {
  @apply hidden opacity-0 sm:block sm:mx-auto sm:mt-[29px]
}
</style>
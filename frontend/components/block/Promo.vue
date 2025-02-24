<template>
  <div
      v-intersection-observer="value => onIntersectionImageObserver(value)"
      :class="['promo', {'promo-is-visible': isImageIntersectionVisible}]"
  >
    <picture>
      <img src="/img/webp/drawing.webp" alt="Круг с полосками" class="promo__drawing">
    </picture>
    <picture>
      <source :srcset="`${config.public.apiBase}${card.coverMobile.url}`" media="(max-width: 900px)">
      <img :src="`${config.public.apiBase}${card.cover.url}`" :alt="card.cover.alternativeText"
           class="promo__bg-img">
    </picture>
    <div class="promo__content">
      <p class="promo__text" v-html="typograf.execute(card.title)"></p>
      <ButtonSecondary
          :to="card.link"
          :class="['promo__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
      >
        {{ card.button }}
      </ButtonSecondary>
    </div>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {TitleCard} from "~/types/responses/components/section-components/title-card";

export type BlockPromoProps = {
  card: TitleCard
}

const props = defineProps<BlockPromoProps>();
const config = useRuntimeConfig();

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
</script>

<style scoped>
.promo {
  @apply relative flex justify-start items-end w-full h-0 object-cover rounded-[16px] overflow-hidden
  transition-all duration-[2s]
}

.promo-is-visible {
  @apply h-[750px] p-[40px]
  xl:h-[560px]
  md:p-[30px]
  sm:h-[278px] sm:py-[25px] sm:px-[18px]
}

.promo__drawing {
  @apply absolute bottom-[52px] right-0 w-[379px] h-[323px] opacity-0 transition-opacity duration-[2s]
  xl:bottom-[31px] xl:right-[9px] xl:w-[324px] xl:h-[277px]
  md:bottom-[40px] md:right-[-4px] md:w-[204px] md:h-[169px]
  sm:bottom-[10px] sm:right-[-3px] sm:w-[80px] sm:h-[66px]
}

.promo-is-visible .promo__drawing {
  @apply opacity-100
}

.promo__bg-img {
  @apply absolute top-0 right-0 w-full h-full z-[-1] object-cover rounded-[16px]
}

.promo__text {
  @apply max-w-[449px] mb-[21px] text-white text-[26px] font-golos font-medium leading-[120%]
  opacity-0 transition-all duration-[2s]
  xl:max-w-[380px] xl:mb-[22px] xl:text-[22px]
  md:mb-[17px] sm:text-[16px]
  sm:max-w-[275px] sm:mb-[12px]
}

.promo-is-visible .promo__text {
  @apply opacity-100
}

.promo__button {
  @apply w-[200px] h-[60px] opacity-0
  xl:h-[50px] md:w-[250px] md:h-[60px] sm:w-[170px] sm:h-[46px]
}
</style>
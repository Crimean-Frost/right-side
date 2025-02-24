<template>
  <section class="hero__section">
    <span class="vertical-line"></span>
    <span class="horizontal-line"></span>
    <div class="hero__content">
      <div class="hero__block-img hero__block-img-mobile">
        <picture>
          <source v-if="imageMobile" :srcset="`${config.public.apiBase}${imageMobile?.url}`" media="(max-width: 900px)">
          <img :src="`${config.public.apiBase}${image?.url}`"
               :alt="image?.alternativeText ? image?.alternativeText : 'Иконка'" class="hero__content-img">
        </picture>
      </div>
      <TitlePage
          v-intersection-observer="value => onIntersectionObserver(value, 'title')"
          :class="['hero__content-title', {'fade-up__text-500': isIntersectingVisible.title}]"
          :title="typograf.execute(titlePage)"
      />
      <ButtonPrimary
          v-intersection-observer="value => onIntersectionObserver(value, 'button')"
          :class="['hero__content-button hero__content-button-desktop', {'fade-up__text-1500': isIntersectingVisible.button}]"
          :text="button"
      />
      <div class="hero__footer">
        <span
            v-intersection-observer="value => onIntersectionObserver(value, 'description')"
            :class="['hero__footer-text', {'fade-up__text-1000': isIntersectingVisible.description}]"
            v-html="typograf.execute(descriptionPage)"
        />
        <div class="hero__block-img hero__block-img-desktop">
          <picture>
            <img :src="`${config.public.apiBase}${image?.url}`"
                 :alt="image?.alternativeText ? image?.alternativeText : 'Иконка'" class="hero__footer-img">
          </picture>
        </div>
      </div>
      <ButtonPrimary
          v-intersection-observer="value => onIntersectionObserver(value, 'button')"
          :class="['hero__content-button hero__content-button-mobile', {'fade-up__text-1500': isIntersectingVisible.button}]"
          :text="button"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Image} from "~/types/responses/components/default-components/image";
import type {IntersectingHeroElements} from "~/components/section/home/Hero.vue";

const config = useRuntimeConfig();

export type CareerHeroProps = {
  titlePage: string
  descriptionPage: string
  button: string
  image: Image
  imageMobile: Image
}

const props = defineProps<CareerHeroProps>();

const isIntersectingVisible = reactive<IntersectingHeroElements>({
  title: false,
  description: false,
  button: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectingHeroElements) {
  if (isIntersecting) {
    isIntersectingVisible[elem] = true;
  }
}
</script>

<style scoped>
.hero__section {
  @apply relative pb-[1px] xl:pb-[33px] md:pb-[65px] sm:pb-[80px]
}

.vertical-line {
  @apply absolute z-[1] top-0 left-[50%] h-[655px] border-r-[1px] border-[#204C4F80] border-dashed
  xl:h-[574px]
  md:hidden md:h-[861px] sm:h-[711px]
}

.horizontal-line {
  @apply absolute z-[1] top-[365px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[330px]
  md:hidden md:top-[492px] sm:top-[396px]
}

.hero__content {
  @apply relative z-[2] pt-[277px] xl:pt-[252px] md:pt-[214px] sm:pt-[135px]
}

.hero__content-title {
  @apply max-w-[1271px] mx-auto pr-[4px] leading-[95%] opacity-0
  xl:max-w-[1050px] xl:pr-[6px] xl:leading-[99%] xl:tracking-[-2.96px]
  md:md:max-w-[600px] md:mt-[88px] md:ml-0 md:pr-0 md:pl-0 md:leading-[104%] md:tracking-[-2.72px]
  sm:max-w-[325px] sm:mt-[53px] sm:tracking-[-1.84px]
}

.hero__content-button {
  @apply relative z-[1] mt-[70px] mx-auto opacity-0 xl:mt-[52px] md:mt-[67px] sm:mt-[63px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-center justify-between mt-[66px]
  xl:items-start xl:mt-[-11px] md:mt-[6px] sm:mr-[-2px] sm:mt-[7px]
}

.hero__footer-text {
  @apply max-w-[440px] mt-[48px] font-onest font-light text-black text-[24px] leading-[108%] tracking-[-0.88px] opacity-0
  xl:max-w-[380px] xl:mt-[51px] xl:text-[20px] xl:leading-[112%] xl:tracking-[-0.73px]
  md:mt-[17px] md:leading-[108%]
  sm:max-w-[280px] sm:mt-[5px] sm:text-[20px] sm:leading-[111%]
}

.hero__block-img {
  @apply relative z-[1] bg-white flex justify-center items-center w-[147px] h-[147px] rounded-[10px] xl:w-[138px] xl:h-[138px]
  md:w-[96px] md:h-[96px] md:mx-auto sm:w-[68px] sm:h-[68px]
}

.hero__block-img-desktop {
  @apply md:hidden
}

.hero__block-img-mobile {
  @apply hidden md:flex
}

.hero__footer-img {
  @apply w-[147px] h-[147px] xl:w-[138px] xl:h-[138px] md:w-[97px] md:h-[97px] sm:w-[68px] sm:h-[68px]
}

.hero__content-img {
  @apply hidden md:block md:w-[97px] md:h-[97px] sm:w-[68px] sm:h-[68px]
}
</style>
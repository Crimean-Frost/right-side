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

export type ServicesHeroProps = {
  titlePage: string;
  descriptionPage: string;
  image: Image,
  imageMobile: Image,
  button: string
}

const props = defineProps<ServicesHeroProps>();

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
  @apply relative pb-[1px] xl:pb-[39px] md:pb-[92px] sm:pb-[54px]
}

.vertical-line {
  @apply absolute z-[1] top-0 left-[50%] h-[1000px] border-r-[1px] border-[#204C4F80] border-dashed
  xl:h-[844px]
  md:hidden md:h-[1003px] sm:h-[816px]
}

.horizontal-line {
  @apply absolute z-[1] top-[450px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[361px]
  md:hidden md:top-[467px] sm:top-[413px]
}

.hero__content {
  @apply relative z-[2] pt-[360px] xl:pt-[285px] md:pt-[214px] sm:pt-[155px]
}

.hero__content-title {
  @apply leading-[97%] pr-[5px] opacity-0
  xl:tracking-[-2.96px]
  md:mt-[94px] md:pr-0 md:leading-[88%] md:tracking-[-2.72px]
  sm:mt-[97px] sm:leading-[41px] sm:tracking-[-1.84px]
}

.hero__content-button {
  @apply relative z-[1] mt-[73px] mx-auto opacity-0
  xl:mt-[49px] md:mt-[67px] sm:mt-[49px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-end justify-between mt-[48px] xl:mt-[20px] md:mt-[20px]
}

.hero__footer-text {
  @apply max-w-[450px] font-onest font-light text-black text-[24px] leading-[105%] tracking-[-0.9px] opacity-0
  xl:max-w-[370px] xl:text-[20px] xl:leading-[21.6px] xl:tracking-[-0.75px] xl:mb-[-2px]
  md:mt-[12px] md:leading-[111%]
  sm:max-w-[315px] sm:mt-[3px] sm:text-[20px] sm:leading-[110%]
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
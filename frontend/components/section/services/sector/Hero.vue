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
  titlePage: string
  descriptionPage: string
  image: Image
  imageMobile: Image
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
  @apply relative pb-[50px] xl:pb-[33px] md:pb-[95px] sm:pb-[81px]
}

.vertical-line {
  @apply absolute z-[1] top-0 left-[50%] h-[1000px] border-r-[1px] border-[#204C4F80] border-dashed
  xl:h-[844px]
  md:hidden md:h-[979px] sm:h-[799px]
}

.horizontal-line {
  @apply absolute z-[1] top-[450px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[362px]
  md:hidden md:top-[466px] sm:top-[382px]
}

.hero__content {
  @apply relative z-[2] pt-[372px] xl:pt-[297px] md:pt-[214px] sm:pt-[135px]
}

.hero__content-title {
  @apply pr-[4px] leading-[85px] tracking-[-3.52px] opacity-0
  xl:leading-[72px] xl:tracking-[-2.96px]
  md:mt-[94px] md:pr-0 md:leading-[61px] md:tracking-[-2.72px]
  sm:mt-[55px] sm:leading-[41px] sm:tracking-[-1.84px]
}

.hero__content-button {
  @apply relative z-[1] mt-[75px] mx-auto opacity-0
  xl:mt-[53px] md:mt-[61px] sm:mt-[48px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-end justify-between mt-[63px] xl:mt-[75px] md:mt-[18px] sm:mr-[-2px]
}

.hero__footer-text {
  @apply max-w-[510px] font-onest font-light text-black text-[24px] leading-[108%] tracking-[-0.9px] opacity-0
  xl:max-w-[425px] xl:mb-[-3px] xl:text-[20px] xl:leading-[110%] xl:tracking-[-0.75px]
  md:mt-[10px]
  sm:max-w-full sm:mt-[-1px] sm:text-[20px]
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
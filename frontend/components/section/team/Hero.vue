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

export type TeamDynamicHeroProps = {
  titlePage: string
  descriptionPage: string
  button: string
  image: Image
  imageMobile: Image
}

const props = defineProps<TeamDynamicHeroProps>();

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
  @apply absolute z-[1] top-0 left-[50%] h-[100%] border-r-[1px] border-[#204C4F80] border-dashed
  md:hidden
}

.horizontal-line {
  @apply absolute z-[1] top-[450px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[399px]
  md:hidden
}

.hero__content {
  @apply relative z-[2] pt-[281px] xl:pt-[257px] md:pt-[214px] sm:pt-[135px]
}

.hero__content-title {
  @apply leading-[90%] xl:tracking-[-2.96px] max-w-[1271px] mx-auto opacity-0
  xl:leading-[88%] xl:max-w-[1050px] xl:pr-[5px]
  md:mt-[94px] md:leading-[61px] md:tracking-[-2.72px] md:md:max-w-[600px] md:ml-0 md:pr-0
  sm:max-w-[325px] sm:mt-[55px] sm:leading-[41px] sm:tracking-[-1.84px]
}

.hero__content-button {
  @apply relative z-[1] mt-[71px] mx-auto opacity-0
  xl:mt-[54px] md:mt-[65px] sm:mt-[41px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-end justify-between mt-[68px]
  xl:items-start xl:mt-[-9px] md:mt-[6px] sm:mr-[-2px] sm:mt-[18px]
}

.hero__footer-text {
  @apply max-w-[500px] mt-[13px] font-onest font-light text-black text-[24px] leading-[108%] tracking-[-0.9px] opacity-0
  xl:max-w-[420px] xl:mt-[51px] xl:text-[20px] xl:tracking-[-0.75px]
  md:mt-[22px] md:leading-[112%]
  sm:max-w-full sm:mt-[2px] sm:text-[20px] sm:leading-[110%]
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
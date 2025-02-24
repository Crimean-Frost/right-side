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

type IntersectingElements = {
  title: boolean
  description: boolean
  button: boolean
}

export type SectionCompanyHeroProps = {
  titlePage: string;
  descriptionPage: string;
  button: string
  image: Image,
  imageMobile: Image
}

const props = defineProps<SectionCompanyHeroProps>();
const config = useRuntimeConfig();

const isIntersectingVisible = reactive<IntersectingElements>({
  title: false,
  description: false,
  button: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectingElements) {
  if (isIntersecting) {
    isIntersectingVisible[elem] = true;
  }
}
</script>

<style scoped>
.hero__section {
  @apply relative pb-[55px] xl:pb-[43px] md:pb-[78px] sm:pb-[114px]
}

.vertical-line {
  @apply absolute z-[1] top-0 left-[50%] h-[100%] border-r-[1px] border-[#204C4F80] border-dashed
  md:hidden
}

.horizontal-line {
  @apply absolute z-[1] top-[389px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[361px]
  md:hidden md:top-[464px] sm:top-[393px]
}

.hero__content {
  @apply relative z-[2] pt-[310px] xl:pt-[288px] md:pt-[214px] sm:pt-[145px]
}

.hero__content-title {
  @apply pl-[15px] text-[74px] leading-[89%] max-w-[1271px] mx-auto tracking-[-2.96px] opacity-0
  xl:pr-[5px]
  md:text-[68px] md:mt-[94px] md:leading-[85%] md:tracking-[-2.72px] md:md:max-w-full md:ml-0 md:pr-0 md:pl-0
  sm:text-[40px] sm:max-w-[325px] sm:mt-[55px] sm:leading-[89%] sm:tracking-[-1.84px]
}

.hero__content-button {
  @apply relative z-[1] w-[167px] h-[167px] mt-[74px] mx-auto opacity-0
  xl:mt-[75px]
  md:w-[200px] md:h-[200px] md:mt-[57px]
  sm:w-[180px] sm:h-[180px] sm:mt-[37px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-end justify-between mt-[3px]
  xl:items-start xl:mt-[2px]
  md:mt-[16px]
  sm:mr-[-2px] sm:mt-[18px]
}

.hero__footer-text {
  @apply max-w-[404px] mb-[-2px] font-onest font-light text-black text-[20px] leading-[110%] tracking-[-0.74px] opacity-0
  xl:max-w-[410px] xl:mt-[51px] xl:text-[20px] xl:tracking-[-0.8px]
  md:max-w-[425px] md:mt-[-2px]
  sm:max-w-full sm:mt-[-1px] sm:ml-[-1px] sm:text-[20px] sm:leading-[110%]
}

.hero__block-img {
  @apply relative z-[1] bg-white flex justify-center items-center w-[138px] h-[138px] rounded-[10px]
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
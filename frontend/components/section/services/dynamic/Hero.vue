<template>
  <section class="hero__section">
    <div class="hero__content">
      <div class="hero__block-img hero__block-img-mobile">
        <picture>
          <source v-if="imageMobile" :srcset="`${config.public.apiBase}${imageMobile?.url}`" media="(max-width: 650px)">
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
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Image} from "~/types/responses/components/default-components/image";
import type {IntersectingHeroElements} from "~/components/section/home/Hero.vue";

const config = useRuntimeConfig();

export type ServicesDynamicHeroProps = {
  titlePage: string,
  descriptionPage: string,
  image: Image,
  imageMobile: Image,
}

const props = defineProps<ServicesDynamicHeroProps>();

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

.hero__content {
  @apply relative z-[2] pt-[351px] xl:pt-[288px] md:pt-[214px] sm:pt-[135px]
}

.hero__content-title {
  @apply max-w-[1271px] mx-auto leading-[94%] tracking-[-3.52px] opacity-0
  xl:max-w-[1100px] xl:tracking-[-2.96px] xl:leading-[89%]
  md:md:max-w-[550px] md:mt-[94px] md:ml-0 md:leading-[61px] md:tracking-[-2.72px]
  sm:mt-[55px] sm:leading-[41px] sm:tracking-[-1.8px]
}

.hero__content-button {
  @apply relative z-[1] mt-[69px] mx-auto opacity-0
  xl:mt-[76px] md:mt-[61px] sm:mt-[39px]
}

.hero__content-button-desktop {
  @apply block md:hidden
}

.hero__content-button-mobile {
  @apply hidden md:block
}

.hero__footer {
  @apply flex items-end justify-between mt-[67px]
  xl:items-start xl:mt-[2px] md:mt-[6px] sm:mr-[-2px] sm:mt-[18px]
}

.hero__footer-text {
  @apply max-w-[535px] font-onest font-light text-black text-[24px] leading-[108%] tracking-[-0.88px] opacity-0
  xl:max-w-[427px] xl:mt-[30px] xl:text-[20px] xl:leading-[110%] xl:tracking-[-0.75px]
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
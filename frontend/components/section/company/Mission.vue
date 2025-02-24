<template>
  <section class="about-us__section">
    <BlockCompanyMissionHeading :title="headingTitle" :description="headingDescription"/>
    <div
        v-for="(item, index) in cards"
        :key="index"
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['about-us__promo', {'about-us__promo-visible': isImageIntersectionVisible}]"
    >
      <picture class="about-us__promo-picture">
        <source :srcset="`${config.public.apiBase}${item.coverMobile.url}`" media="(max-width: 900px)">
        <img :src="`${config.public.apiBase}${item.cover.url}`" :alt="item.cover.alternativeText"
             class="about-us__promo-image"/>
      </picture>
      <div class="about-us__inner">
        <ButtonSecondary
            :class="['about-us__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
            :to="item.link"
        >
          {{ item.button }}
        </ButtonSecondary>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {CleanCard} from "~/types/responses/components/section-components/clean-card";

export type SectionCompanyMissionProps = {
  headingTitle: string
  headingDescription: string
  cards: CleanCard[]
}

const props = defineProps<SectionCompanyMissionProps>();
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
.about-us__section {
  @apply mt-[103px] xl:mt-[116px] md:mt-[41.5px] md:ml-[-5px] md:mr-[5px] sm:mt-[-5px] sm:mx-0
}

.about-us__promo {
  @apply relative w-full h-0 mt-[60px] overflow-hidden rounded-[16px] transition-all duration-[2s]
  xl:mt-[63px]
  md:mt-[40px]
}

.about-us__promo-visible {
  @apply h-[749px] xl:h-[561px] sm:h-[278px]
}

.about-us__promo-picture {
  @apply overflow-hidden
}

.about-us__promo-image {
  @apply w-full h-full object-cover
}

.about-us__inner {
  @apply py-[39px] px-[41px] w-full h-full md:p-[30px] sm:px-[18px] sm:py-[25px] sm:pt-[115px]
}

.about-us__button {
  @apply absolute right-[40px] bottom-[40px] opacity-0
  xl:right-[40px] xl:bottom-[38px] xl:w-[200px] xl:h-[52px]
  md:w-[250px] md:h-[60px] md:right-auto md:left-[30px] md:bottom-[30px]
  sm:w-[170px] sm:h-[46px] sm:left-[18.5px] sm:bottom-[24px]
}

</style>
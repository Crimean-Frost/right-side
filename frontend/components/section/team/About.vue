<template>
  <section class="about-us__section">
    <BlockTeamAboutHeading
        :title="headingTitle"
        :heading-description="headingDescription"
        :section-descriptions="sectionDescriptions"
    />
    <div
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['about-us__promo', {'about-us-is-visible': isImageIntersectionVisible}]"
    >
      <picture>
        <img src="/img/webp/drawing.webp" alt="Круг с узорами" class="about-us__promo-drawing">
      </picture>
      <picture>
        <source :srcset="`${config.public.apiBase}${coverMobile.url}`" media="(max-width: 768px)">
        <img :src="`${config.public.apiBase}${cover.url}`"
             :alt="cover.alternativeText ? cover.alternativeText : 'Изображение'" class="about-us__promo-image"/>
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Image} from "~/types/responses/components/default-components/image";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";

export type SectionTeamAboutProps = {
  headingTitle: string
  headingDescription: string
  sectionDescriptions: Vacancy[]
  cover: Image
  coverMobile: Image
}

const props = defineProps<SectionTeamAboutProps>();
const config = useRuntimeConfig();

const isImageIntersectionVisible = ref(false);

function onIntersectionImageObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting && !isImageIntersectionVisible.value) {
    isImageIntersectionVisible.value = true;
  }
}
</script>

<style scoped>
.about-us__section {
  @apply mt-[157px] xl:mt-[125px] md:mt-[55px] sm:mt-[19px]
}

.about-us__promo {
  @apply relative w-full h-0 overflow-hidden rounded-[16px] transition-all duration-[2s]
}

.about-us-is-visible {
  @apply h-[749px] xl:h-[561px] sm:h-[278px]
}

.about-us__promo-image {
  @apply w-full h-full object-cover
}

.about-us__promo-drawing {
  @apply absolute top-[32px] right-[-10px] w-[389px] h-[323px] opacity-0 transition-opacity duration-[2s]
  xl:top-[34px] xl:right-0 xl:w-[334px] xl:h-[277px]
  md:top-[16px] md:right-[7px] md:w-[171px] md:h-[142px]
  sm:top-[9px] sm:right-[2px] sm:w-[103px] sm:h-[85px]
}

.about-us-is-visible .about-us__promo-drawing {
  @apply opacity-100
}
</style>
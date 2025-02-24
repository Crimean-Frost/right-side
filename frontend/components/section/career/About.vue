<template>
  <section class="about-us__section">
    <BlockCareerAboutHeading
        class="about-us__heading"
        :title="headingTitle"
        :heading-description="headingDescription"
        :section-descriptions="sectionDescriptions"
    />
    <div
      v-intersection-observer="value => onIntersectionImageObserver(value)"
      :class="['about-us__promo', {'about-us__promo-is-visible': isImageIntersectionVisible}]"
    >
      <picture v-if="cover.url">
        <source :srcset="`${config.public.apiBase}${coverMobile.url}`" media="(max-width: 900px)">
        <img
            :src="`${config.public.apiBase}${cover.url}`"
            :alt="cover.alternativeText ? cover.alternativeText : 'Изображение'"
            class="about-us__promo-image"
        />
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Image} from "~/types/responses/components/default-components/image";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";

export type SectionCareerAboutProps = {
  headingTitle: string
  headingDescription: string
  sectionDescriptions: Vacancy[]
  cover: Image
  coverMobile: Image
}

const props = defineProps<SectionCareerAboutProps>();
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
  @apply mt-[154px] xl:mt-[126.5px] md:mt-[57px] sm:mt-[21px]
}

.about-us__promo {
  @apply relative w-full h-0 mt-[35px] overflow-hidden rounded-[16px] transition-all duration-[2s]
  xl:mt-[36px] sm:mt-[36px]
}

.about-us__promo-is-visible {
  @apply h-[749px] xl:h-[561px] sm:h-[278px]
}

.about-us__promo-image {
  @apply w-full h-full object-cover
}
</style>
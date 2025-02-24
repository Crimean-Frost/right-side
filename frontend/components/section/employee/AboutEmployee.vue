<template>
  <section class="about-employee__section">
    <BlockEmployeeAboutEmplayeeHeading
        :title="headingTitle"
        :description="headingDescription"
        :section-description="sectionDescription"
    />
    <div
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['images__block', {'images__block-is-visible': isImageIntersectionVisible}]"
    >
      <div class="images__block-small">
        <picture>
          <img :src="`${config.public.apiBase}${smallImage}`"
               :alt="smallImageAlt ? smallImageAlt : 'Изображение сотрудника'" class="image__small">
        </picture>
      </div>
      <div class="images__block-main">
        <picture>
          <source :srcset="`${config.public.apiBase}${largeImageMobile}`" media="(max-width: 900px)">
          <img :src="`${config.public.apiBase}${largeImage}`"
               :alt="largeImageAlt ? largeImageAlt : 'Изображение сотрудника'" class="image__main">
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";

export type SectionEmployeeAboutProps = {
  headingTitle: string
  headingDescription: string
  sectionDescription: Vacancy[]
  largeImage?: string
  largeImageAlt?: string
  largeImageMobile?: string
  smallImage?: string
  smallImageAlt?: string
}

const props = defineProps<SectionEmployeeAboutProps>();
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
.about-employee__section {
  @apply relative z-[1] mt-[159px] xl:mt-[160px] lg:mt-[120px] sm:mt-[99px]
}

.images__block {
  @apply flex h-0 gap-[10px] transition-all duration-[2s]
}

.images__block-is-visible {
  @apply h-[677px] xl:h-[560px] lg:h-[466px] sm:h-[226px]
}

.images__block-small {
  @apply rounded-[16px] lg:hidden
}

.image__small {
  @apply min-w-[475px] h-full rounded-[16px] object-cover
  xl:min-w-[467px]
}

.images__block-main {
  @apply relative w-full rounded-[16px]
}

.image__main {
  @apply w-full h-full rounded-[16px] object-cover
}
</style>
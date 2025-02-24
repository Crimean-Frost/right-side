<template>
  <div class="title-block__container">
    <h1 class="section__title title-block__container-title">
      <span class="section__title-dot"></span>
      {{ typograf.execute(title) }}
    </h1>
    <h2
        v-intersection-observer="value => onIntersectionObserver(value)"
        :class="['text__section title-block__container-description', {'fade-up__text-500': isDescriptionVisible}]"
        v-html="typograf.execute(description)"
    />
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';

type BlockTitleContainerProps = {
  title?: string;
  description?: string;
}

const props = defineProps<BlockTitleContainerProps>();

const isDescriptionVisible = ref(false);

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}
</script>

<style scoped>
.section__title {
  @apply max-w-[232px] min-w-[232px] inline-flex items-start text-[16px] text-black font-onest leading-[108%] tracking-[-0.65px] text-wrap
  lg:flex lg:mb-[55px] sm:mb-[34px]
}

.section__title-dot {
  @apply block w-[8px] h-[8px] min-w-[8px] min-h-[8px] bg-orange rounded-[200px] mr-[6px] mt-[3.5px]
}

.text__section {
  @apply text-[68px] text-black font-golos font-normal leading-[94%] tracking-[-2.7px] indent-[118px]
  xl:text-[50px] xl:tracking-[-2px]
  md:text-[48px]
  sm:text-[28px] sm:font-normal sm:indent-0 sm:tracking-[-1.3px]
}

.title-block__container {
  @apply flex items-start justify-between lg:block
}

.title-block__container-title {
  @apply xl:ml-[2px] md:ml-0 md:mb-[57px] sm:mb-[37px]
}

.title-block__container-description {
  @apply block max-w-[1275px] mt-[2px] mr-[141px] opacity-0
  xl:max-w-[1013px] xl:mr-[53px] xl:mt-[3px]
  lg:w-[95%] lg:mr-0
  md:tracking-[-1.9px]
  sm:w-full sm:tracking-[-1.3px]
}
</style>
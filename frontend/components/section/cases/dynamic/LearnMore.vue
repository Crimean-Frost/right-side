<template>
  <div class="learn-more__section">
    <div class="learn-more__title-container">
      <div class="learn-more__title">
        <span class="learn-more__title-dot"></span>
        {{ section?.titleContainer?.title }}
      </div>
      <div
          v-intersection-observer="value => onIntersectionObserver(value)"
          :class="['learn-more__title-description', {'fade-up__text-500': isDescriptionVisible}]"
          v-html="typograf.execute(section?.titleContainer?.description)"
      />
    </div>
    <BlockCaseLearnMoreCard
        :cards="section?.cards"
    />
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {Advantages} from "~/types/responses/components/sections/advantages";

export type SectionCasesLearnMoreProps = {
  section?: Advantages,
}

const props = defineProps<SectionCasesLearnMoreProps>();

const isDescriptionVisible = ref(false);

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}
</script>

<style scoped>
.learn-more__section {
  @apply mt-[156px] md:mt-[117px] sm:mt-[96px]
}

.learn-more__title-container {
  @apply flex items-start justify-between mb-[67px]
  xl:mb-[66px]
  lg:block lg:mb-[51px]
  sm:mb-[47px]
}

.learn-more__title {
  @apply inline-flex items-start max-w-[232px] min-w-[232px] mt-[2px] text-[16px] text-black font-onest leading-[108%] tracking-[-0.65px] text-wrap
  lg:flex lg:mb-[56px]
  sm:mb-[37px]
}

.learn-more__title-dot {
  @apply block w-[8px] h-[8px] min-w-[8px] min-h-[8px] bg-orange rounded-[200px] mr-[6px] mt-[3.5px]
}

.learn-more__title-description {
  @apply block max-w-[1375px] pt-[5px] mr-[41px] text-[68px] text-black font-golos font-normal leading-[94%] tracking-[-2.7px] indent-[118px] opacity-0
  xl:max-w-[1072px] xl:mr-[26px] xl:pr-0 xl:pl-[36px] xl:text-[50px] xl:tracking-[-2px]
  md:max-w-[95%] md:mr-0 md:pl-0 md:text-[48px]
  sm:max-w-full sm:text-[28px] sm:font-normal sm:indent-0 sm:tracking-[-1.3px]
}
</style>
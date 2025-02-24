<template>
  <section class="learn-more__section">
    <div class="learn-more__title-container">
      <TitleSection class="learn-more__title">{{ section.titleContainer?.title }}</TitleSection>
      <TextSectionMain
        v-intersection-observer="value => onIntersectionObserver(value)"
        :class="['learn-more__title-description', {'fade-up__text-500': isDescriptionVisible}]"
        :text="typograf.execute(section.titleContainer?.description)"
      />
    </div>
    <BlockEmployeeLearnMoreCard
      :cards="section.cards"
    />
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {Advantages} from "~/types/responses/components/sections/advantages";

export type SectionEmployeeLearnMoreProps = {
  section: Advantages,
}
const props = defineProps<SectionEmployeeLearnMoreProps>();

const isDescriptionVisible = ref(false);

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}
</script>

<style scoped>
.learn-more__section {
  @apply mt-[159px] md:mt-[116px] sm:mt-[96px]
}

.learn-more__title-container {
  @apply flex items-start justify-between mb-[69px]
  xl:mb-[72px]
  lg:block lg:mb-[60px]
  md:mb-[50px]
  sm:mb-[46px]
}

.learn-more__title {
  @apply md:mb-[63px] sm:mb-[43px]
}

.learn-more__title-description {
  @apply max-w-[1375px] mt-[3px] mr-[41px] opacity-0
  xl:max-w-[1050px] xl:mr-[12px]
  md:block md:max-w-[710px] md:pl-0
  sm:mr-0
}
</style>
<template>
  <section class="learn-more__section">
    <div class="learn-more__title-container">
      <TitleSection class="learn-more__title">{{ section?.titleContainer?.title }}</TitleSection>
      <TextSectionMain
          v-intersection-observer="value => onIntersectionObserver(value)"
          :class="['learn-more__title-description', {'fade-up__text-500': isDescriptionVisible}]"
          :text="typograf.execute(section?.titleContainer?.description)"
      />
    </div>
    <BlockCasesLearnMoreCard
        :cards="section?.cards"
    />
  </section>
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
  @apply mt-[156px] xl:mt-[157px] md:mt-[118px] sm:mt-[98px]
}

.learn-more__title-container {
  @apply flex items-start justify-between mb-[60px]
  xl:mb-[72px]
  lg:block lg:mb-[60px]
  sm:mb-[41px]
}

.learn-more__title {
  @apply mt-[2px] md:mb-[56px] sm:mb-[37px]
}

.learn-more__title-description {
  @apply block max-w-[1380px] pt-[5px] mr-[37px] opacity-0
  xl:max-w-[1072px] xl:mr-[27px] xl:pr-0 xl:pl-[37px]
  md:max-w-[95%] md:mr-0 md:pl-0 md:leading-[95%]
  sm:max-w-full sm:leading-[94%]
}
</style>
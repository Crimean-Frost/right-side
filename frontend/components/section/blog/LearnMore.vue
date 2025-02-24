<template>
  <section class="learn-more">
    <div class="learn-more__title-container">
      <TitleSection class="learn-more__title">{{ section?.titleContainer?.title }}</TitleSection>
      <TextSectionMain
          v-intersection-observer="value => onIntersectionObserver(value)"
          :class="['learn-more__title-description', {'fade-up__text-500': isDescriptionVisible}]"
          :text="typograf.execute(section?.titleContainer?.description)"
      />
    </div>
    <BlockBlogLearnMoreCard
        :cards="section?.cards"
    />
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {Advantages} from "~/types/responses/components/sections/advantages";

export type SectionBlogLearnMoreProps = {
  section?: Advantages,
}

const props = defineProps<SectionBlogLearnMoreProps>();

const isDescriptionVisible = ref(false);

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}
</script>

<style scoped>
.learn-more__title-container {
  @apply flex items-start justify-between mb-[60px]
  xl:mb-[66px]
  lg:block lg:mb-[40px]
  sm:mb-[40px]
}

.learn-more__title {
  @apply mt-[2px] md:mb-[56px] sm:mb-[37px]
}

.learn-more__title-description {
  @apply block max-w-[1375px] pt-[5px] mr-[41px] opacity-0
  xl:max-w-[1072px] xl:mr-[26px] xl:pr-0 xl:pl-[36px]
  md:max-w-[95%] md:mr-0 md:pl-0
  sm:max-w-full
}
</style>
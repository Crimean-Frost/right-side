<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <div class="description__block">
      <TextSectionMain
          v-intersection-observer="value => onIntersectionVisible(value, 'title')"
          :class="['title-block__container-description', {'fade-up__text-500': isIntersectionVisible.title}]"
          :text="typograf.execute(description)"
      />
      <div
          v-intersection-observer="value => onIntersectionVisible(value, 'description')"
          :class="['about-us__description', {'fade-up__text-1000': isIntersectionVisible.description}]"
      >
        <template v-for="(text, index) in section.descriptions" :key="index">
          <p class="about-us__description-text" v-html="typograf.execute(text.description)"></p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {About} from "~/types/responses/components/sections/about";

export type IntersectionVisibleElements = {
  title: boolean;
  description: boolean;
}

type BlockTitleContainerProps = {
  title: string;
  description: string;
  section: About;
}

const props = defineProps<BlockTitleContainerProps>();

const isIntersectionVisible = reactive<IntersectionVisibleElements>({
  title: false,
  description: false,
});

function onIntersectionVisible([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectionVisibleElements) {
  if (isIntersecting) {
    isIntersectionVisible[elem] = true;
  }
}
</script>

<style scoped>
.title-block__container {
  @apply flex items-start justify-between lg:block
}

.title-block__container-title {
  @apply mt-[-1px] xl:ml-0 lg:ml-0 lg:mb-[61px] sm:mb-[42px]
}

.description__block {
  @apply max-w-[1340px] mt-[2px] mr-[76px]
  xl:max-w-[1013px] xl:mr-[53px] xl:mt-[0]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0
  sm:w-full
}

.title-block__container-description {
  @apply opacity-0 md:tracking-[-1.9px]
  sm:tracking-[-1.3px]
}

.about-us__description {
  @apply flex flex-col items-start justify-center gap-[14px] mt-[42px] mb-[39px] pl-[124px] opacity-0
  xl:mt-[34px] xl:mb-[44px]
  lg:pl-0
  md:justify-start md:items-start md:mt-[25px] md:mb-[45px]
  sm:mt-[21px]
}

.about-us__description-text {
  @apply block max-w-[515px] font-light text-[18px] text-black leading-[118%] font-onest tracking-[-0.65px]
  xl:leading-[116%]
  md:leading-[106%]
  sm:max-w-[335px] sm:text-[16px] sm:tracking-[-0.6px]
}
</style>
<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <div class="description__block">
      <TextSectionMain
          v-intersection-observer="value => onIntersectionVisible(value, 'title')"
          :class="['title-block__container-description', {'fade-up__text-500': isIntersectionVisible.title}]"
          :text="typograf.execute(headingDescription)"
      />
      <div
          v-intersection-observer="value => onIntersectionVisible(value, 'description')"
          :class="['about-us__description', {'fade-up__text-1000': isIntersectionVisible.description}]"
      >
        <template v-for="(text, index) in sectionDescriptions" :key="index">
          <p class="about-us__description-text" v-html="typograf.execute(text.description)"></p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";
import type {IntersectionVisibleElements} from "~/components/block/home/about-us/Heading.vue";

type BlockTitleContainerProps = {
  title: string;
  headingDescription: string;
  sectionDescriptions: Vacancy[];
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
  @apply mt-[-1px] xl:mt-[-4px] xl:ml-0 lg:ml-0 lg:mb-[57px] sm:mb-[37px]
}

.description__block {
  @apply block max-w-[1240px] mt-[2px] mr-[176px]
  xl:max-w-[900px] xl:mr-[166px] xl:mt-[0]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0 md:pr-[10px]
  sm:w-full
}

.title-block__container-description {
  @apply opacity-0 md:tracking-[-1.9px] sm:tracking-[-1.3px]
}

.about-us__description {
  @apply flex flex-col items-start justify-start gap-[9px] mt-[27px] pl-[124px] opacity-0
  lg:gap-[12px] lg:mt-[17px] lg:pl-0
  sm:gap-[15px] sm:mt-[18px]
}

.about-us__description-text {
  @apply max-w-[520px] mr-[168px] font-light text-[18px] text-black leading-[115%] font-onest tracking-[-0.67px]
  xl:max-w-[515px] xl:mr-[-49px]
  md:max-w-[501px] md:mr-0 md:leading-[108%]
  sm:text-[16px] sm:leading-[16.9px] sm:tracking-[-0.6px]
}
</style>
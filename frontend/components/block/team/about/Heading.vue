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
  sectionDescriptions: Vacancy[]
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
  @apply flex items-start justify-between lg:block md:mr-[-11px]
}

.title-block__container-title {
  @apply mt-[-1px] xl:mt-[-2px] xl:ml-0 lg:ml-0 lg:mb-[61px] sm:mb-[42px]
}

.description__block {
  @apply max-w-[1275px] mt-[2px] mr-[141px]
  xl:max-w-[980px] xl:mr-[86px] xl:mt-[0]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0
  sm:w-full
}

.title-block__container-description {
  @apply opacity-0 md:tracking-[-1.9px]
  sm:tracking-[-1.3px]
}


.about-us__description {
  @apply flex flex-col items-start justify-center gap-[14px] mt-[36px] mb-[45px] pl-[124px] opacity-0
  xl:mt-[40px] xl:mb-[45px]
  lg:pl-0
  md:items-start md:mt-[20px] md:mb-[42px] md:mr-0
  sm:mt-[23px] sm:mb-[41px]
}

.about-us__description-text {
  @apply max-w-[520px] font-light text-[18px] text-black leading-[115%] font-onest tracking-[-0.72px]
  xl:max-w-[445px] xl:leading-[117%] xl:tracking-[-0.65px]
  md:max-w-[501px] md:leading-[19px]
  sm:text-[16px] sm:leading-[16.9px]
}
</style>
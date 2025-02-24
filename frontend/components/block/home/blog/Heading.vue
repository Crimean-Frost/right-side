<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <div class="description__block">
      <TextSectionMain
          v-intersection-observer="value => onIntersectionVisible(value, 'title')"
          :class="['title-block__container-description', {'fade-up__text-500': isIntersectionVisible.title}]"
          :text="typograf.execute(descriptionHeading)"
      />
      <div
          v-intersection-observer="value => onIntersectionVisible(value, 'description')"
          :class="['blog__description', {'fade-up__text-1000': isIntersectionVisible.description}]"
      >
        <span class="blog__description-text" v-html="typograf.execute(descriptionSection)"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';

type IntersectionVisibleElements = {
  title: boolean;
  description: boolean;
}

type BlockTitleContainerProps = {
  title: string;
  descriptionHeading: string;
  descriptionSection: string;
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
  @apply max-w-[1390px] mt-[2px] mr-[26px]
  xl:max-w-[1013px] xl:mr-[53px] xl:mt-[0]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0
  sm:w-full
}

.title-block__container-description {
  @apply opacity-0 md:tracking-[-1.9px]
  sm:tracking-[-1.3px]
}

.blog__description {
  @apply flex flex-col items-start justify-center gap-[14px] mt-[36px] mb-[37px] pl-[124px] opacity-0
  xl:mt-[41px]
  lg:pl-0
  md:hidden md:justify-start md:items-start md:mt-[25px] md:mb-[45px]
  sm:mt-[21px]
}

.blog__description-text {
  @apply block max-w-[440px] font-light text-[18px] text-black leading-[118%] font-onest tracking-[-0.65px]
  md:ml-0 md:leading-[19px] sm:text-[16px] sm:leading-[16.9px]
  sm:tracking-[-0.6px]
}
</style>
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
          :class="['about-employee__description-block', {'fade-up__text-1000': isIntersectionVisible.description}]"
      >
        <p class="about-employee__description" v-if="sectionDescription.length > 0" v-for="text in sectionDescription"
           :key="text.id">
          {{ typograf.execute(text.description) }}
        </p>
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
  description: string;
  sectionDescription: Vacancy[]
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
  @apply mt-[-1px] xl:mt-[-2px] xl:ml-0 lg:ml-0 lg:mb-[61px] sm:mb-[42px]
}

.description__block {
  @apply max-w-[1390px] mt-[2px] mr-[295px]
  xl:max-w-[1013px] xl:mr-[123px] xl:mt-[0]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0
  sm:w-full
}

.title-block__container-description {
  @apply opacity-0 md:tracking-[-1.9px]
  sm:tracking-[-1.3px]
}

.about-employee__description-block {
  @apply flex flex-col items-start justify-center gap-[14px] mt-[33px] mb-[41px] pl-[122px] opacity-0
  xl:mb-[45px]
  lg:pl-0
  md:mt-[28px] md:mb-[40px]
  sm:mt-[20px]
}

.about-employee__description {
  @apply max-w-[515px] mr-[412px] font-light text-[18px] text-black leading-[118%] font-onest tracking-[-0.65px]
  xl:mr-[-50px] xl:leading-[116%]
  md:max-w-[453px] md:leading-[106%] md:mr-0
  sm:max-w-[290px] sm:text-[16px]
}

</style>
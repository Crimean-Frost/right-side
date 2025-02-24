<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__item">
        <TitleCasesHero
            v-intersection-observer="value => onIntersectionObserver(value, 'title')"
            :class="['hero__title', {'fade-up__text-500': isIntersectingVisible.title}]"
        >
          {{ typograf.execute(casesHeroTitle) }}
          <span
              :class="['hero__title-span', {'fade-up__text-1000': isIntersectingVisible.title}]"
          >
            {{ typograf.execute(casesHeroCompanyName) }}
          </span>
        </TitleCasesHero>
      </div>
      <div class="hero__item">
        <TextCasesHero
            v-intersection-observer="value => onIntersectionObserver(value, 'description')"
            :class="['hero__description', {'fade-up__text-1000': isIntersectingVisible.description}]"
            :text="typograf.execute(casesHeroDescription)"
        >
        </TextCasesHero>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';

type VisibleElements = {
  title: boolean,
  description: boolean
}

export type sectionCasesHeroProps = {
  casesHeroTitle?: string,
  casesHeroCompanyName?: string,
  casesHeroDescription?: string
}

const props = defineProps<sectionCasesHeroProps>();

const isIntersectingVisible = reactive<VisibleElements>({
  title: false,
  description: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof VisibleElements) {
  if (isIntersecting) {
    isIntersectingVisible[elem] = true;
  }
}
</script>

<style scoped>
.hero {
  @apply mb-[95.5px] flex xl:mb-[80px] md:block md:mb-[29px] sm:mb-[44px]
}

.hero__container {
  @apply w-full grid grid-cols-[59%_30%]
  lg:grid-cols-1
}

.hero__title {
  @apply mr-[18.7%] 2xl:mr-[13.5%] transition opacity-0
}

.hero__title-span {
  @apply inline-block mt-[11px] text-orange font-mulish font-medium italic opacity-0
  xl:mt-[18.5px] md:mt-[8px] md:mb-[21.5px] sm:mt-0 sm:tracking-[-1.4px]
}

.hero__description {
  @apply max-w-[490px] inline-block mt-[16px] ml-[1px] tracking-[-0.8px] opacity-0
  xl:w-[450px] xl:mt-[26.5px] xl:pt-0 xl:ml-[-3px] xl:leading-[110%]
  lg:mt-0 lg:ml-0 lg:max-w-[380px] lg:tracking-[-0.7px]
  sm:w-full
}
</style>
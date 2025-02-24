<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__item">
        <TitleBlogHero
            v-intersection-observer="value => onIntersectionObserver(value, 'title')"
            :class="['hero__title', {'fade-up__text-500': isIntersectingVisible.title}]"
        >
          {{ typograf.execute(blogHeroTitle) }}<br>
          <span
              :class="['hero__title-span', {'fade-up__text-1000': isIntersectingVisible.title}]"
          >
            {{ typograf.execute(blogHeroCompanyName) }}
          </span>
        </TitleBlogHero>
      </div>
      <div class="hero__item">
        <TextBlogHero
            v-intersection-observer="value => onIntersectionObserver(value, 'description')"
            :class="['hero__description', {'fade-up__text-1000': isIntersectingVisible.description}]"
            :text="typograf.execute(blogHeroDescription)"
        </TextBlogHero>
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

export type sectionBlogHeroProps = {
  blogHeroTitle?: string,
  blogHeroCompanyName?: string,
  blogHeroDescription?: string
}

const props = defineProps<sectionBlogHeroProps>();

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
  @apply mb-[94.5px] flex xl:mb-[77px] md:block md:mb-[51px] sm:mb-[40px]
}

.hero__container {
  @apply w-full grid grid-cols-[59%_30%]
  lg:grid-cols-1
}

.hero__title {
  @apply mr-[18.7%] transition opacity-0 2xl:mr-[13.5%]
}

.hero__title-span {
  @apply block mt-[11px] text-orange font-mulish font-medium italic opacity-0
  xl:mt-[18.5px] md:mt-[8px] md:mb-[21.5px] sm:mt-0 sm:not-italic sm:tracking-[-1.4px]
}

.hero__description {
  @apply inline-block max-w-[480px] mt-[-3px] ml-[2px] opacity-0
  xl:max-w-[390px] xl:mt-[-2.5px] xl:ml-[-3px]
  lg:mt-0  lg:ml-0 lg:max-w-[400px]
  sm:w-full
}
</style>
<template>
  <div class="hero">
    <div class="hero__top">
      <TitleHero
          v-intersection-observer="value => onIntersectionObserver(value, 'title')"
          :class="['title', {'fade-up__text-500': isIntersectionVisible.title}]"
          :title="typograf.execute(removeMetaCharsetTag(title)) || ''"
      />
      <div class="hero__info">
        <div class="hero__info">
          <div class="hero__data">{{ data }}</div>
          <template v-for="(category, index) in categories" :key="index">
            <div class="hero__category">#{{ category.label }}</div>
          </template>
        </div>
      </div>
    </div>
    <div
        v-intersection-observer="value => onIntersectionObserver(value, 'image')"
        :class="['hero__image', {'hero__image-visible': isIntersectionVisible.image}]"
    >
      <picture>
        <source :srcset="imgMobile.src" media="(max-width:900px)">
        <img :src="img.src" :alt="img.alt"/>
      </picture>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {vIntersectionObserver} from '@vueuse/components';
import type {CategoriesBase} from "~/types/responses/collections/categories";

type Image = {
  src?: string;
  alt?: string;
}

type IntersectionVisibleElements = {
  title: boolean;
  image: boolean;
}

export type CaseHeroProps = {
  title?: string;
  data?: string;
  categories?: CategoriesBase[];
  img: Image;
  imgMobile: Image,
};

defineProps<CaseHeroProps>();

const isIntersectionVisible = reactive<IntersectionVisibleElements>({
  title: false,
  image: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectionVisibleElements) {
  if (isIntersecting) {
    isIntersectionVisible[elem] = true;
  }
}
</script>

<style scoped>
.title.title__hero {
  @apply text-left max-w-[95%] b-md:max-w-[674px] sm:hyphens-auto sm:break-words;
}

.title {
  @apply opacity-0
}

@media (max-width: 640px) {
  .title.title__hero {
    word-break: auto-phrase;
  }
}

.hero {
  @apply mt-[40px] relative mb-[17px]
  b-xl:mb-[15px]
  b-md:mb-[-3px]
  b-sm:mb-[-15px]
}

.hero__top {
  @apply mb-[55px] flex flex-col gap-[40px]
  b-xl:gap-[56px]
  b-xl:mb-[57px]
  b-md:mb-[60.5px] b-md:gap-[46px]
  b-sm:mb-[31px] b-sm:gap-[37px]
}

.hero__info {
  @apply flex items-center flex-wrap gap-[14px]
  b-sm:gap-[12px] b-sm:flex-col b-sm:items-start
}

.hero__categories-list {
  @apply flex gap-[13px] flex-nowrap b-sm:gap-[12px]
}

.hero__data, .hero__devider, .hero__category {
  @apply font-golos text-[24px] leading-[110%] font-medium b-md:text-[22px] b-sm:text-[18px]
}

.hero__devider, .hero__category {
  @apply text-orange
}

.hero__devider {
  @apply translate-y-[-3px]
}

.hero__image {
  @apply relative max-w-full h-0 rounded-[16px] overflow-hidden transition-all duration-[2s]
}

.hero__image-visible {
  @apply h-[623px] b-xl:h-[525px] b-lg:h-[523px] b-sm:h-[525px]
}

.hero__image img {
  @apply w-full h-full object-cover b-md:absolute b-md:top-0 b-md:bottom-0 b-md:left-[50%] b-md:translate-x-[-50%]
}

</style>

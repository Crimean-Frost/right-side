<template>
  <div class="hero">
    <div class="hero__top">
      <TitleHero
          v-intersection-observer="value => onIntersectionObserver(value, 'title')"
          :class="['title', {'fade-up__text-500': isIntersectionVisible.title}]"
          :title="typograf.execute(removeMetaCharsetTag(title)) || ''"
      />
      <div class="hero__info">
        <div class="hero__data">{{ data }}</div>
        <div class="hero__category">#{{ category }}</div>
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

type Image = {
  src?: string;
  alt?: string;
}

type IntersectionVisibleElements = {
  title: boolean;
  image: boolean;
}

export type PostHeroProps = {
  title?: string;
  data?: string;
  category?: string;
  img: Image;
  imgMobile: Image,
};

defineProps<PostHeroProps>();

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
  @apply text-left sm:hyphens-auto sm:break-words;
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
  @apply mt-[39px] relative mb-[82px]
  b-md:mb-[40px]
  b-sm:mt-[40px] b-sm:mb-[64px]
}

.hero__top {
  @apply mb-[55px] flex flex-col gap-[41px]
  b-xl:gap-[45px] b-xl:mb-[60px]
  b-md:mb-[62px]
  b-sm:gap-[37px] b-sm:mb-[30px]
}

.hero__info {
  @apply flex items-center gap-[13px] flex-wrap
}

.hero__data, .hero__devider, .hero__category {
  @apply font-golos text-[24px] leading-[110%] font-medium b-xl:text-[22px]
  b-sm:text-[18px]
}

.hero__devider, .hero__category {
  @apply text-orange
}

.hero__devider {
  @apply translate-y-[-3px] b-md:hidden
}

.hero__image {
  @apply relative h-0 rounded-[16px] overflow-hidden transition-all duration-[2s]
}

.hero__image-visible {
  @apply h-[623px] b-xl:h-[526px] b-lg:h-[525px]
}

.hero__image img {
  @apply w-full h-full object-cover b-md:absolute b-md:top-0 b-md:bottom-0 b-md:left-[50%] b-md:translate-x-[-50%]
}

</style>

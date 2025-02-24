<template>
  <li
    class="card__item"
    v-for="(articleItem, index) in homeBlogCardData"
    :key="index"
    :style="{
      transform: isAnimatingNext
        ? `translateX(calc(-${currentIndex * (100)}% - 5%))`
        : isAnimatingPrev
        ? `translateX(calc(-${currentIndex * (100)}% + 5%))`
        : `translateX(-${currentIndex * 100}%)`
    }"
  >
    <article class="article">
      <span class="article__header"></span>
      <picture>
        <img :src="apiBase + articleItem.cover.url" :alt="articleItem.cover.alternativeText ? articleItem.cover.alternativeText : 'Изображение'" class="article__img">
      </picture>
      <div class="article__content">
        <h2 class="article__title" v-html="typograf.execute(articleItem.shortTitle)"></h2>
        <p class="article__description" v-html="typograf.execute(articleItem.shortDescription)"></p>
      </div>
      <ButtonSecondary
        class="article__button"
        :to="`${linkToBlog}${articleItem.slug}`"
      >
        {{ button }}
      </ButtonSecondary>
    </article>
  </li>
</template>

<script setup lang="ts">

import type {BlogsBase} from "~/types/responses/collections/blogs";

export type BlockBlogArticleProps = {
  homeBlogCardData: BlogsBase[]
  button: string
  isAnimatingPrev: boolean
  isAnimatingNext: boolean
  currentIndex: number
}

const props = defineProps<BlockBlogArticleProps>();

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const linkToBlog = '/blog/';
</script>

<style scoped>

.card__item {
  transition: transform 0.7s ease-in-out;
}

.article {
  @apply relative w-[466.5px] h-[535px] mr-[10px] mt-[35px] border-2 border-dark-green border-dashed py-[21.5px] px-[22px] rounded-[9px] rounded-tl-none
  xl:w-[467.5px] xl:mr-[9px] xl:py-[21.5px] xl:px-[22px] md:h-[519px] md:py-[23px] md:px-[22.5px]
  sm:h-[506px] sm:w-[336px] sm:py-[24px] sm:pl-[23px] sm:pr-[19px] sm:mr-[8px]
}

.article__header {
  @apply absolute top-[-35px] left-[-2px] w-[108px] h-[35px] border-2 border-dashed border-dark-green rounded-t-[6px]
  sm:w-[86px]
}

.article__header::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 4px;
  background-color: #F8FCFD;
}

.article__img {
  @apply object-cover w-full mb-[24px] rounded-[15px] lg:max-h-[250px] sm:max-h-[212px] sm:h-[212px]
}

.article__title {
  @apply mb-[11px] font-golos text-black text-[22px] leading-[118%] font-medium max-w-[401px]
  xl:mb-[11px] xl:text-[22px]
  md:mb-[12px]
  sm:text-[18px] sm:leading-[120%] sm:mb-[10px]
}

.article__description {
  @apply font-onest text-black font-light leading-[114%] tracking-[-0.55px] max-w-[371px] line-clamp-3
  xl:text-[16px]
  md:tracking-[-0.6px] sm:tracking-[-0.55px]
}

.article__button {
  @apply absolute bottom-[43.5px] left-[23px] w-[200px] h-[60px] inline-flex items-center justify-center text-black
  font-onest font-light tracking-[-0.6px] border border-orange rounded-[30px] pt-[1px] xl:bottom-[44px] xl:left-[22px]
  md:bottom-[38px] md:left-[23px] md:w-[250px]
  sm:w-[200px] sm:h-[50px] sm:bottom-[34.5px] sm:left-[23px]
}
</style>
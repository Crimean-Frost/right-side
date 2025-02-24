<template>
  <div class="content">
    <div class="content__sidebar">
      <div class="content__nav">
        <h2 class="nav__title">Содержание:</h2>
        <ul class="nav__list">
          <li
              class="nav__item"
              v-for="(paragraph, index) in chapters"
              :key="paragraph.id"
          >
            <a
                class="nav__link"
                :class="{'active': intersectingBlocksArr[0] === paragraph.id}"
                :href="`#paragraph-${paragraph.id}`"
                v-html="`<div class='nav__number block w-[10px] min-w-[10px] mr-[10px] flex-shrink-0'>${index + 1}.</div> ${paragraph.shortTitle}`"
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content__body">
      <div class="content__block">
        <span v-html="typograf.execute(description)" class="content__paragraph"></span>
      </div>
      <div
          class="content__block"
          v-for="paragraph in chapters"
          :key="paragraph.id"
      >
        <div v-intersection-observer="(value: IntersectionObserverEntry[]) => onIntersectionObserver(value, paragraph.id)"
             class="content__intersect-block"></div>
        <div :id="`paragraph-${paragraph.id}`" class="content__target"></div>
        <TextSectionMain class="content__title" :text="typograf.execute(paragraph.title)"></TextSectionMain>
        <span class="content__paragraph" v-html="typograf.execute(paragraph.description)"></span>
      </div>
      <ButtonSecondary to="/blog" class="content__back-button">
        ← Назад к статьям
      </ButtonSecondary>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {vIntersectionObserver} from '@vueuse/components'

export type PostContentProps = {
  chapters?: { id: number; title: string; description: string, shortTitle: string }[];
  description?: string;
};
const intersectingBlocksArr = reactive<number[]>([])

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], id: number) {
  if (isIntersecting) {
    intersectingBlocksArr.push(id)
  } else {
    const index = intersectingBlocksArr.indexOf(id)
    intersectingBlocksArr.splice(index, 1)
  }
}

defineProps<PostContentProps>();
</script>

<style scoped>
.content {
  @apply flex gap-[130px] mb-[155px]
  b-lg:gap-[50px]
  b-md:gap-[42px] b-md:mb-[117px] b-md:flex-col
  b-sm:mb-[97px] b-sm:gap-[33px];
}

.content__sidebar {
  @apply w-[350px] flex-shrink-0 b-xl:w-[226px] b-sm:w-full
}

.content__nav {
  @apply sticky top-[130px] b-lg:top-[100px] b-md:relative  b-md:top-0
}

.nav__title {
  @apply mb-[20px] text-black font-golos font-medium text-[24px] leading-[115%]
  b-xl:text-[22px]
  b-sm:text-[18px]
}

.nav__list {
  @apply flex flex-col gap-[10px] pl-[7px]
  b-sm:gap-[8px]
}

.nav__item {
}

.nav__link {
  @apply flex gap-[0px] font-onest text-[18px] font-light leading-[108%] tracking-[-0.68px]
  b-sm:text-[16px] b-sm:leading-[115%] b-sm:tracking-[-0.59px]
}

.nav__link.active {
  @apply text-orange
}

.content__body {
  @apply flex flex-col gap-[60px] pr-[200px]
  b-xl:pr-[160px] b-lg:pr-[0px]
  b-lg:gap-[63px]
  b-sm:gap-[62px]
}

.content__block {
  @apply relative
}

.content__block:nth-child(2) {
  @apply mt-[5px]
}

.content__target {
  @apply absolute top-[-130px] b-lg:top-[-100px] left-0
}

.content__title {
  @apply block mb-[24px] b-md:mb-[30px] b-sm:mb-[29px]
}

.content__paragraph {
  @apply font-onest font-light leading-[118%] tracking-[-0.72px] text-[18px] text-black
  b-xl:leading-[116%] b-xl:tracking-[-0.68px]
  b-md:leading-[111%]
  b-sm:text-[16px] b-sm:leading-[114%]
}

.content__paragraph * strong {
  @apply font-normal
}

.content__back-button {
  @apply mt-0 h-[50px] text-[16px] leading-[89%] tracking-[-0.64px]
  b-xl:mt-[-16px] b-xl:w-[200px]
  b-md:w-[250px] b-md:h-[60px] b-md:mt-[-18px]
  b-sm:w-full b-sm:h-[57px] b-sm:mt-[-25px] !important
}

.content__intersect-block {
  @apply absolute top-[200px] bottom-[300px] right-0 left-0 opacity-0;
}
</style>

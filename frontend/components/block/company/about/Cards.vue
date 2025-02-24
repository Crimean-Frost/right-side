<template>
  <div class="about__cards-container">
    <ul class="about__list">
      <li
          v-for="(item, index) in data"
          :key="index"
          v-intersection-observer="value => onIntersectionObserver(value, index)"
          :class="['about__item', {'show-up-500': intersectingCardsArr.includes(index)}]"
      >
        <BlockCardNumeration>{{ item.number }}</BlockCardNumeration>
        <div class="about__item-content">
          <p class="about__item-title">{{ typograf.execute(item.title) }}</p>
          <p class="about__item-description">{{ typograf.execute(item.description) }}</p>
        </div>
      </li>
    </ul>
    <ButtonPrimary
        class="about__button"
        :text="button"
        :to="link"
    />
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {CompetenceTitleCard} from "~/types/responses/components/section-components/competence-title-card";

type BlockCompanyAboutCardProps = {
  data: CompetenceTitleCard[]
  button: string
  link?: string
}

const props = defineProps<BlockCompanyAboutCardProps>();

const intersectingCardsArr = reactive<number[]>([]);
const cardQueue = reactive<number[]>([]);
const isProcessing = ref(false);

function processQueue() {
  if (isProcessing.value || cardQueue.length === 0) return;

  isProcessing.value = true;
  (async () => {
    while (cardQueue.length > 0) {
      const index = cardQueue.shift()!;
      if (!intersectingCardsArr.includes(index)) {
        intersectingCardsArr.push(index);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    isProcessing.value = false;
  })();
}

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], index: number) {
  if (isIntersecting && !intersectingCardsArr.includes(index) && !cardQueue.includes(index)) {
    cardQueue.push(index);
    cardQueue.sort((a, b) => a - b);
    processQueue();
  }
}
</script>

<style scoped>
.about__cards-container {
  @apply flex justify-between items-end flex-row-reverse mt-[59px]
  xl:mt-[72px]
  lg:flex-col
  md:mt-[39px] md:ml-0
  sm:mt-[41px]
}

.about__list {
  @apply w-[1292px] grid grid-cols-2 gap-[6px]
  xl:w-[945px] xl:mr-[118px] xl:gap-[8px]
  lg:w-full lg:mr-0
  md:w-full md:grid-cols-1
  sm:gap-[10px]
}

.about__item {
  @apply h-[327px] p-[27px] border-2 border-dashed border-dark-green rounded-[9px] rounded-tl-[15px] opacity-0
  xl:h-[326px] xl:p-[26px] xl:px-[28px]
  lg:h-[400px]
  md:h-[302px]
  sm:h-[300px] sm:p-[19px] sm:px-[17px] sm:rounded-[16px]
}

.about__item-content {
  @apply ml-[-2px] xl:ml-[-3px] md:ml-[-5px] sm:ml-[-2px]
}

.about__item:nth-child(2),
.about__item:nth-child(3) {
  @apply border-solid border-black
}

.about__item:nth-child(even) {
  @apply md:border-solid md:border-black
}

.about__item:nth-child(odd) {
  @apply md:border-dashed md:border-dark-green
}

.about__item-title {
  @apply max-w-[450px] mt-[39px] mb-[14px] text-[22px] text-black font-golos font-medium leading-[28.8px]
  xl:text-[22px] xl:leading-[26.4px] xl:mt-[41px] xl:mb-[14.5px]
  md:max-w-[550px] md:mt-[71px] md:mb-[14px]
  sm:max-w-full sm:text-[16px] sm:leading-[21.6px] sm:mt-[46px] sm:mb-[11px]
}

.about__item-description {
  @apply max-w-[408px] text-[18px] text-black font-onest font-normal leading-[117%]
  md:max-w-[422px] md:text-[16px] md:font-light md:leading-[113%] md:tracking-[-0.64px]
  sm:tracking-[-0.58px]
}

.about__button {
  @apply w-[167px] h-[167px] min-w-[167px] min-h-[167px] mr-[50px]
  lg:w-[200px] lg:h-[200px] lg:mx-auto lg:mt-[60px]
  sm:w-[180px] sm:h-[180px] sm:mt-[50px]
}
</style>
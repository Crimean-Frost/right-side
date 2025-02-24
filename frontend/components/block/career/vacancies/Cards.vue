<template>
  <div class="vacancies__cards-container">
    <ul class="vacancies__list">
      <li
          v-for="(item, index) in data"
          :key="index"
          v-intersection-observer="value => onIntersectionObserver(value, index)"
          :class="['vacancies__item', {'show-up-500': intersectingCardsArr.includes(index)}]"
      >
        <p class="vacancies__item-text" v-html="item.description"></p>
      </li>
      <li class="vacancies__button-block">
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionObserverButton(value)"
            :class="['vacancies__button', {'fade-up__text-1000': isButtonIntersection}]"
            :text="button"
            :to="link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";

type BlockCareerVacanciesCardProps = {
  data: Vacancy[]
  button: string
  link?: string
}

const props = defineProps<BlockCareerVacanciesCardProps>();

const intersectingCardsArr = reactive<number[]>([]);
const cardQueue = reactive<number[]>([]);
const isProcessing = ref(false);
const isButtonIntersection = ref(false);

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

function onIntersectionObserverButton([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isButtonIntersection.value = true;
  }
}
</script>

<style scoped>
.vacancies__cards-container {
  @apply mt-[61.5px] xl:mt-[58.5px] md:mt-[59.5px] sm:mt-[40px]
}

.vacancies__list {
  @apply w-[1256.26px] grid grid-cols-2 gap-[10px] ml-auto mr-[160px] md:grid-cols-1
  xl:w-[945px] xl:mr-[118px]
  lg:grid-cols-1 lg:max-w-full lg:mx-auto
  md:w-full
}

.vacancies__item {
  @apply flex items-center justify-start h-[342px] p-[30px] border-2 border-dashed border-dark-green rounded-[9px] rounded-tl-[15px]
  opacity-0
  xl:h-[302px] xl:p-[26px]
  sm:p-[25px] sm:pr-[23px]
}

.vacancies__item:nth-child(4n + 2),
.vacancies__item:nth-child(4n + 3) {
  @apply border-solid border-black
}

.vacancies__item:nth-child(even) {
  @apply md:border-solid md:border-black
}

.vacancies__item:nth-child(odd) {
  @apply md:border-dashed md:border-dark-green
}

.vacancies__item-text {
  @apply max-w-[400px] ml-[-2px] text-[24px] text-black font-golos font-medium leading-[28.8px] line-clamp-6
  xl:max-w-[350px] xl:ml-[-3px] xl:text-[22px] xl:leading-[26.4px]
  sm:max-w-full sm:text-[18px] sm:leading-[21.6px]
}

.vacancies__button-block {
  @apply flex items-center justify-center h-[340px]
  xl:h-[302px]
  md:items-end md:h-[257px] md:pb-[8px]
  sm:h-[227px]
}

.vacancies__button {
  @apply opacity-0
}
</style>
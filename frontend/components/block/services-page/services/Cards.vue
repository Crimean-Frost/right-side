<template>
  <div class="services__cards-container">
    <ul class="services__list">
      <li
          v-for="(item, index) in data"
          :key="index"
          v-intersection-observer="value => onIntersectionObserver(value, index)"
          :class="['services__item', {'show-up-500': intersectingCardsArr.includes(index)}]"
      >
        <BlockCardNumeration class="services__item-numeration">{{ index + 1 }}</BlockCardNumeration>
        <div class="services__item-content">
          <p class="services__item-text" v-html="item.label"></p>
          <ButtonSecondary :to="`${route.path}${config.public.prefix}${item.slug}`" class="services__item-button">
            Узнать больше
          </ButtonSecondary>
        </div>
      </li>
      <li class="services__button-block">
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionObserverButton(value)"
            :class="['services__button', {'fade-up__text-1000': isButtonIntersection}]"
            :text="button"
            :to="link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {CategoriesBase} from "~/types/responses/collections/categories";

type BlockServicesPageServicesCardProps = {
  data: CategoriesBase[]
  button: string
  link?: string
}

const props = defineProps<BlockServicesPageServicesCardProps>();
const route = useRoute();
const config = useRuntimeConfig();

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
.services__cards-container {
  @apply flex justify-center items-center mt-[74px] ml-[17.6%]
  xl:mt-[64px] xl:ml-[17%]
  md:ml-0 md:mt-[69px]
  sm:mt-[46px]
}

.services__list {
  @apply w-[1256.26px] grid grid-cols-2 gap-[8px] md:grid-cols-1 xl:w-[945px] md:w-full
}

.services__item {
  @apply relative flex items-end justify-start h-[342px] p-[30px] border-2 border-dashed border-dark-green rounded-[9px] rounded-tl-[15px] opacity-0
  xl:h-[302px] xl:p-[26px]
  sm:p-[25px] sm:pr-[21px]
}

.services__item-content {
  @apply w-full mb-[34px] ml-[-1px]
  xl:mb-[13px] xl:ml-[-3px]
  md:mb-[37px]
  sm:mb-[35px] sm:ml-[-2px]
}

.services__item:nth-child(2),
.services__item:nth-child(3) {
  @apply border-solid border-black
}

.services__item:nth-child(even) {
  @apply md:border-solid md:border-black
}

.services__item:nth-child(odd) {
  @apply md:border-dashed md:border-dark-green
}

.services__item-numeration {
  @apply absolute top-[31px] left-[31px]
  xl:top-[26px] xl:left-[26px]
}

.services__item-text {
  @apply max-w-[325px] mb-[28px] text-[24px] text-black font-golos font-medium leading-[28.8px] xl:text-[22px] xl:leading-[26.4px]
  xl:mb-[23px]
  md:max-w-[550px] md:mb-[29px]
  sm:max-w-[250px] sm:text-[18px] sm:leading-[21.6px] sm:mt-[74px]
}

.services__item-button {
  @apply h-[50px] xl:w-[200px] xl:h-[50px] sm:w-full sm:h-[57px]
}

.services__button-block {
  @apply flex items-center justify-center h-[342px]
  xl:h-[303px]
  md:h-[259px] md:items-end md:pb-[8px]
  sm:h-[229px]
}

.services__button {
  @apply opacity-0
}
</style>
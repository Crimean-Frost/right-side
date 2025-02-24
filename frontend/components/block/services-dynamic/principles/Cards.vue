<template>
  <div class="principles__list">
    <ul class="principles__item">
      <li class="principles__card" v-for="(item, index) in cardsData" :key="index">
        <div class="principles__card-header">
          <picture class="principles__card-picture">
            <img
                v-intersection-observer="value => onIntersectionObserver(value, (index % 8) + 1)"
                :class="['principles__card-header-icon', {'show-up-1000': intersectingIconsArr.includes((index % 8) + 1)}]"
                :src="`/img/svg/service/principles_${(index % 8) + 1}.svg`"
                :alt="`Иконка №${(index % 8) + 1}`"
            >
          </picture>
          <span class="principles__card-header-container"></span>
        </div>
        <div class="principles__card-content">
          <span class="principles__card-text" v-html="typograf.execute(item.description)"></span>
        </div>
      </li>
      <li
          v-intersection-observer="value => onIntersectionObserverButton(value)"
          :class="['principles__card-button-container', {'fade-up__text-1000': isButtonIntersection}]"
      >
        <ButtonPrimary
            class="principles__card-button"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Principle} from "~/types/responses/components/section-components/principle";

type ServicesDynamicPrinciplesCardsProps = {
  cardsData: Principle[]
}

const props = defineProps<ServicesDynamicPrinciplesCardsProps>();
const intersectingIconsArr = reactive<number[]>([]);
const iconQueue = reactive<number[]>([]);
const isProcessing = ref(false);
const isButtonIntersection = ref(false);

function processQueue() {
  if (isProcessing.value || iconQueue.length === 0) return;

  isProcessing.value = true;
  (async () => {
    while (iconQueue.length > 0) {
      const index = iconQueue.shift()!;
      if (!intersectingIconsArr.includes(index)) {
        intersectingIconsArr.push(index);
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    isProcessing.value = false;
  })();
}

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], index: number) {
  if (isIntersecting && !intersectingIconsArr.includes(index) && !iconQueue.includes(index)) {
    iconQueue.push(index);
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
.principles__card {
  @apply flex flex-col
}

.principles__item {
  @apply grid grid-cols-2 gap-[10px] mb-[14px]
  xl:grid-cols-[48%_51.4%] xl:gap-[10px]
  md:grid-cols-1 md:gap-[8px] md:mb-[8px]
}

.principles__card-picture {
  @apply w-[7.2%] flex items-center justify-center
  xl:w-[9%]
  lg:w-[13%]
  md:w-[9%]
  sm:w-[14.5%]
}

.principles__card-header-icon {
  @apply mt-[-4px] opacity-0 xl:mt-[-5px] lg:mt-[-2px]
}

.principles__card-header {
  @apply relative flex items-center justify-between h-[50.5px]
}

.principles__card-header-container {
  @apply absolute top-0 right-0 w-[92.8%] h-full border-2 border-black rounded-t-[5px]
  xl:w-[91%] lg:w-[87%] md:w-[91.5%] sm:w-[85.5%]
}

.principles__card-header-container::before {
  content: '';
  position: absolute;
  bottom: -4px;
  right: 0;
  z-index: 1;
  height: 6px;
  width: 100%;
  background-color: #F8FCFD;
}

.principles__card-content {
  @apply flex items-end justify-start h-[253.27px] border-2 border-black rounded-tl-[9px] rounded-tr-none rounded-b-[9px] mt-[-2px] px-[34px] py-[47px]
  xl:h-[221px] xl:px-[24px] xl:py-[35px]
  md:h-[253.5px] md:items-center md:px-[23px]
  sm:pt-[32px] sm:px-[24px]
}

.principles__card-text {
  @apply text-left max-w-[550px] text-black text-[22px] font-golos font-medium leading-[120%]
  md:mt-[-46px]
  sm:max-w-[250px] sm:mt-[-43px] sm:text-[18px] sm:leading-[21.6px]
}

.principles__card:nth-child(4n + 1) .principles__card-header-container,
.principles__card:nth-child(4n + 4) .principles__card-header-container,
.principles__card:nth-child(4n + 1) .principles__card-content,
.principles__card:nth-child(4n + 4) .principles__card-content {
  @apply border-dark-green border-dashed
}

.principles__card:nth-child(odd) .principles__card-header-container {
  @apply md:left-auto md:right-0 md:border-dark-green md:border-dashed
}

.principles__card:nth-child(odd) .principles__card-content {
  @apply md:rounded-tl-[9px] md:rounded-tr-none md:border-dark-green md:border-dashed
}

.principles__card:nth-child(even) .principles__card-header {
  @apply flex-row-reverse
}

.principles__card:nth-child(even) .principles__card-header-container {
  @apply right-auto left-0 md:left-0 md:right-auto md:border-black md:border-solid
}

.principles__card:nth-child(even) .principles__card-content {
  @apply rounded-tl-none rounded-tr-[9px] md:rounded-tl-none md:rounded-tr-[9px] md:border-black md:border-solid
}

.principles__card-button-container {
  @apply flex items-center justify-center h-[300px] opacity-0
  xl:text-[16px] xl:tracking-[-0.64px]
  sm:h-[241px]
}
</style>
<template>
  <section class="advantages__section">
    <TextSectionMain
        v-intersection-observer="value => onIntersectionTitleObserver(value)"
        :class="['title-block__container-description', {'fade-up__text-500': isDescriptionVisible}]"
        :text="typograf.execute(title)"
    />
    <ul class="advantages__list">
      <li
          v-for="(item, index) in cardsData"
          :key="index"
          v-intersection-observer="value => onIntersectionCardsObserver(value, index)"
          :class="['advantages__item', {'show-up-500': intersectingCardsArr.includes(index)}]"
      >
        <BlockCardNumeration>{{ item.number }}</BlockCardNumeration>
        <span class="advantages__item-text" v-html="typograf.execute(item.description)"></span>
      </li>
      <li class="advantages__item-button-container">
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionButtonObserver(value)"
            :class="['advantages__item-button', {'fade-up__text-1000': isButtonIntersection}]"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {CompetenceCardComponent} from "~/types/responses/components/section-components/competence-card-component";

export type ServicesDynamicAdvantagesProps = {
  title: string,
  cardsData: CompetenceCardComponent[],
}

const props = defineProps<ServicesDynamicAdvantagesProps>();

const isDescriptionVisible = ref(false);
const intersectingCardsArr = reactive<number[]>([]);
const cardQueue = reactive<number[]>([]);
const isProcessing = ref(false);
const isButtonIntersection = ref(false);

function onIntersectionTitleObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}

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

function onIntersectionCardsObserver([{isIntersecting}]: IntersectionObserverEntry[], index: number) {
  if (isIntersecting && !intersectingCardsArr.includes(index) && !cardQueue.includes(index)) {
    cardQueue.push(index);
    cardQueue.sort((a, b) => a - b);
    processQueue();
  }
}

function onIntersectionButtonObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isButtonIntersection.value = true;
  }
}
</script>

<style scoped>
.advantages__section {
  @apply mt-[165px] max-w-[1390px] ml-auto mr-[26px]
  xl:mt-[155px] xl:max-w-[1013px] xl:mr-[53px]
  lg:mr-0
  md:mt-[126px]
  sm:mt-[101px]
}

.title-block__container-description {
  @apply opacity-0
}

.advantages__list {
  @apply grid grid-cols-2 gap-[9px] max-w-[1256px] mt-[71px] ml-[6.76px]
  xl:max-w-[944px] xl:mt-[63px] xl:ml-[4px]
  md:grid-cols-1 md:mt-[65px] md:ml-[0px]
  sm:gap-[8px] sm:mt-[46px]
}

.advantages__item {
  @apply h-[342px] border-2 border-black rounded-[9px] rounded-tl-[16px] p-[30px] opacity-0
  xl:h-[302px] xl:p-[26px]
  lg:h-[320px]
  md:h-[302px]
}

.advantages__item-text {
  @apply block max-w-[430px] mt-[72px] ml-[-2px] text-[24px] font-golos font-medium text-black leading-[120%] line-clamp-4
  xl:text-[22px] xl:leading-[118%]
  md:mt-[71px] md:ml-[-3px]
  sm:max-w-[250px] sm:mt-[51px] sm:text-[18px] sm:leading-[122%]
}

.advantages__item:nth-child(4n + 1),
.advantages__item:nth-child(4n + 4) {
  @apply border-dashed border-2 border-dark-green
}

.advantages__item:nth-child(odd) {
  @apply md:border-dashed md:border-dark-green
}

.advantages__item:nth-child(even) {
  @apply md:border-solid md:border-black
}

.advantages__item:nth-child(1) .advantages__item-text {
  @apply max-w-[350px] xl:max-w-[300px] sm:max-w-[250px]
}

.advantages__item:nth-child(3) .advantages__item-text {
  @apply max-w-[450px] xl:max-w-[400px] md:max-w-[410px]
}

.advantages__item-button-container {
  @apply flex items-center justify-center md:h-[297px] sm:h-[260px]
}

.advantages__item-button {
  @apply opacity-0
}
</style>
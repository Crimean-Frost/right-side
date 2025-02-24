<template>
  <div class="competencies__list-container">
    <ul class="competencies__list">
      <li
          v-for="(item, index) in cardInnerText"
          :key="index"
          v-intersection-observer="value => onIntersectionObserver(value, index)"
          :class="['competencies__item', {'show-up-500': intersectingCardsArr.includes(index)}]"
      >
        <BlockCardNumeration>
          {{ item.number }}
        </BlockCardNumeration>
        <span class="competencies__item-text" v-html="typograf.execute(item.description)"></span>
      </li>
      <li class="competencies__item-button-container">
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionObserverButton(value)"
            :class="['competencies__item-button', {'fade-up__text-1000': isButtonIntersection}]"
            :text="button"
            :link="link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {CompetenceCardComponent} from "~/types/responses/components/section-components/competence-card-component";

type BlockHomeCompetenciesCardsProps = {
  cardInnerText: CompetenceCardComponent[]
  button: string
  link?: string
}

const props = defineProps<BlockHomeCompetenciesCardsProps>();

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
.competencies__list-container {
  @apply flex justify-end
}

.competencies__list {
  @apply grid grid-cols-2 gap-[8px] w-[1256.26px] mr-[7.4%] xl:w-[944px] xl:mr-[8.3%] lg:mr-0
  md:grid-cols-1 md:w-full
}

.competencies__item {
  @apply h-[342px] p-[30px] border-2 border-black rounded-[9px] rounded-tl-[16px] opacity-0
  xl:h-[302px] xl:p-[26px]
  lg:h-[350px]
  md:h-[302px]
}

.competencies__item:nth-child(4n + 1),
.competencies__item:nth-child(4n + 4) {
  @apply border-dashed border-[#023438]
  md:border-2 md:border-black md:border-solid
}

.competencies__item:nth-child(odd) {
  @apply md:border-dashed md:border-[#023438]
}

.competencies__item-button-container {
  @apply flex justify-center items-center md:h-[302px] sm:h-[263px]
}

.competencies__item-button {
  @apply opacity-0
}

.competencies__item-text {
  @apply block mt-[72px] ml-[-2px] font-golos font-medium text-[24px] text-black leading-[120%] max-w-[450px]
  xl:text-[22px] xl:leading-[118%] xl:mt-[71px]
  md:max-w-[420px]
  sm:text-[18px] sm:leading-[122%] sm:mt-[52px] sm:ml-[-3px] sm:mr-[-5px]
}

.competencies__item-text * {
  @apply line-clamp-6 lg:line-clamp-[7] md:line-clamp-6 sm:line-clamp-[7]
}

.competencies__item:nth-child(4) .competencies__item-text {
  @apply mt-[62px] xl:mt-[71px] sm:mt-[52px]
}

.competencies__item:nth-child(5) .competencies__item-text {
  @apply xl:mt-[51px] md:max-w-[400px]
}

.competencies__item:nth-child(6) .competencies__item-text {
  @apply xl:mt-[51px]
}

.competencies__item:nth-child(7) .competencies__item-text {
  @apply max-w-[482px] mt-[52px] md:max-w-[435px]
}
</style>
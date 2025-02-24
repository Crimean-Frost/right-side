<template>
  <div class="principles__list">
    <ul :class="getRowClass(rowIndex)" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <li :class="['principles__card', rows[rowIndex] ? getIcon(rowIndex, index).class : '']"
          v-for="(item, index) in row" :key="index">
        <div class="principles__card-header">
          <div class="principles__card-header-icon-container">
            <picture v-if="getIcon(rowIndex, index).icon !== null">
              <img
                  v-intersection-observer="value => onIntersectionObserver(value, index)"
                  :src="getIcon(rowIndex, index).icon!"
                  :class="['principles__card-header-icon', {'show-up-500': intersectingIconsArr.includes(index)}]"
                  :alt="`Иконка № ${index}`"
              >
            </picture>
          </div>
          <span class="principles__card-header-container"></span>
        </div>
        <div class="principles__card-content">
          <span class="principles__card-text" v-html="typograf.execute(item.description)">
          </span>
        </div>
      </li>
      <li
          v-intersection-observer="value => onIntersectionObserverButton(value)"
          :class="['principles__card-button-container', {'fade-up__text-1000': isButtonIntersection}]"
          v-if="rowIndex === rows.length - 1"
      >
        <ButtonPrimary
            class="principles__card-button"
            :text="button"
            :to="link"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Principle} from "~/types/responses/components/section-components/principle";

type BlockHomePrinciplesCardsProps = {
  principles: Principle[]
  button: string
  link?: string
}
const props = defineProps<BlockHomePrinciplesCardsProps>();

const rows: Principle[][] = [];

const cardsPerRowOdd = 3;
const cardsPerRowEven = 2;
const intersectingIconsArr = reactive<number[]>([]);
const iconQueue = reactive<number[]>([]);
const isProcessing = ref(false);
const isButtonIntersection = ref(false);

if (props.principles.length > 0) {
  for (let i = 0; i < props.principles.length;) {
    const currentRowCount = (rows.length % 2 !== 0) ? cardsPerRowEven : cardsPerRowOdd;

    rows.push(props.principles.slice(i, i + currentRowCount));

    i += currentRowCount;
  }
}

const iconList = [
  ['/img/svg/principles_1.svg', null, '/img/svg/principles_2.svg'],
  ['/img/svg/principles_3.svg', '/img/svg/principles_4.svg'],
  [null, '/img/svg/principles_5.svg', '/img/svg/principles_6.svg'],
  ['/img/svg/principles_7.svg', '/img/svg/principles_8.svg'],
];

const getIcon = (rowIndex: number, index: number): (Record<string, string | null>) => {
  const firstIndex = rowIndex % 4;
  const currentRows = rows[rowIndex];
  if (
      (rows.length - 1 === rowIndex && firstIndex === 0 && currentRows.length === 2 && index === 1) ||
      (rows.length - 1 === rowIndex && firstIndex === 2 && currentRows.length === 1 && index === 0)
  ) {
    return {icon: iconList[firstIndex][index + 1], class: 'principles__card-header-icon-last'};
  } else {
    return {icon: iconList[firstIndex][index], class: ''};
  }
}

const getRowClass = (rowIndex: number) => {
  const index = rowIndex % 4;
  if (index === 0) {
    return 'principles__list-first-line';
  } else if (index === 2) {
    return 'principles__list-third-line';
  } else {
    return 'principles__list-second-line';
  }
}

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
.principles__list {
  @apply mt-[75px] lg:mt-[69px] sm:mt-[43.5px]
}

.principles__card {
  @apply flex flex-col
}

.principles__list-first-line {
  @apply grid grid-cols-[33.6%_31.7%_33.4%] gap-[13.35px] mb-[14px]
  xl:gap-[10px]
  lg:grid-cols-1 lg:gap-[8px] lg:mb-[8px] last:mb-0
}

.principles__card-header-icon {
  @apply mt-[-8px] opacity-0 xl:mt-[-13px] lg:mt-[-2px]
}

.principles__card-header {
  @apply relative flex items-center justify-between h-[50.5px]
}

.principles__card-header-container {
  @apply absolute top-0 right-0 w-[86.5%] h-full border-2 border-black rounded-t-[5px]
  lg:w-[91.5%] sm:w-[85.5%]
}

.principles__card-header-icon-container {
  @apply flex items-center justify-center
  w-[13.5%] h-full
  lg:w-[8.5%] sm:w-[14.5%]
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
  @apply flex flex-col justify-center h-[253.27px] border-2 border-black rounded-tl-[9px] rounded-b-[9px] mt-[-2px] px-[33px]
  xl:px-[23px]
}

.principles__card-text * {
  @apply max-w-[404px] text-black text-[22px] font-golos font-medium leading-[118%] line-clamp-6
  sm:max-w-[263px] sm:text-[18px] sm:line-clamp-[8]
}

.principles__list-first-line .principles__card:nth-child(1) .principles__card-header-icon {
  @apply min-w-[48px] min-h-[45px] max-w-[48px] max-h-[45px]
  xl:min-w-[43px] xl:min-h-[40px] xl:max-w-[43px] xl:max-h-[40px]
  md:min-w-[48px] md:min-h-[45px] md:max-w-[48px] md:max-h-[45px]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply w-[90%] left-0 border-dashed border-[#023438]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header {
  @apply order-1 lg:order-2
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-content {
  @apply border-dashed border-[#023438] rounded-tl-none rounded-tr-[9px] order-2
  lg:order-1 lg:rounded-t-[9px] lg:rounded-bl-none lg:pt-[20px]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-text * {
  @apply sm:max-w-[350px]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply lg:border-t-0 lg:border-b-2 lg:rounded-t-none lg:rounded-b-[9px] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-container::before {
  @apply lg:top-[-3px]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-header {
  @apply lg:flex-row-reverse
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-header-container {
  @apply w-[90%] lg:left-0 lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-header-icon-container {
  @apply w-[10%] ml-[-6%] lg:w-[8.5%] lg:ml-0 sm:w-[12.5%]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-header-icon {
  @apply min-w-[57px] min-h-[54px] lg:mt-[-57px]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-content {
  @apply lg:rounded-tl-none lg:rounded-tr-[9px]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-text * {
  @apply sm:max-w-[250px]
}

.principles__list-second-line {
  @apply grid grid-cols-[49.8%_49.8%] gap-[9px] mb-[9px]
  xl:grid-cols-[51.3%_48.1%]
  lg:grid-cols-1 lg:mb-[10px] last:mb-0
}

.principles__list-second-line .principles__card-header-container {
  @apply w-[93%] xl:w-[90%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-second-line .principles__card-header-icon-container {
  @apply w-[7%] xl:w-[10%] lg:w-[8.5%] sm:w-[14.5%]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-icon {
  @apply mt-[-5px] ml-[9px] min-w-[46px] min-h-[44px] max-w-[46px] max-h-[44px] xl:mt-[-8px]
  lg:mt-[-4px]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-container {
  @apply border-dashed border-[#023438] xl:w-[91%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-icon-container {
  @apply xl:w-[9%] lg:w-[8.5%] sm:w-[12.5%]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-content {
  @apply border-dashed border-[#023438]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-text * {
  @apply lg:max-w-[533px]
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-header-icon {
  @apply mt-[-4px] min-w-[46px] min-h-[44px] max-w-[46px] max-h-[44px]
  xl:mt-[-7px] lg:mt-[-4px]
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-header {
  @apply flex-row-reverse
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply left-0
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-content {
  @apply rounded-tl-none rounded-tr-[9px] px-[33px] xl:px-[25px] lg:px-[23px]
}

.principles__list-second-line .principles__card-text * {
  @apply max-w-[633px]
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-text * {
  @apply max-w-[533px] lg:max-w-[450px] sm:max-w-[250px]
}


.principles__list-third-line {
  @apply grid grid-cols-[34.1%_34.1%_31.3%] gap-[9px] mb-[11px]
  xl:grid-cols-[32.7%_32.8%_33.3%]
  lg:grid-cols-1  lg:mb-[8px] last:mb-0
}

.principles__list-third-line .principles__card:nth-child(1) .principles__card-header {
  @apply order-1 lg:order-2 lg:mt-[-2px] lg:flex-row-reverse
}

.principles__list-third-line .principles__card-header-container {
  @apply w-[91.5%] xl:w-[86.8%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-third-line .principles__card-header-icon-container {
  @apply w-[8.5%] xl:w-[13.2%] lg:w-[8.5%] sm:w-[14.5%]
}

.principles__list-third-line .principles__card:nth-child(1) .principles__card-header-container {
  @apply left-0 lg:right-0 lg:left-auto lg:rounded-t-none lg:rounded-b-[9px]
}

.principles__list-third-line .principles__card:nth-child(1) .principles__card-header-container::before {
  @apply lg:top-[-3px]
}

.principles__list-third-line .principles__card:nth-child(1) .principles__card-content {
  @apply rounded-tl-none rounded-tr-[9px] order-2
  lg:order-1 lg:rounded-t-[9px] lg:rounded-br-none lg:pt-[20px]
}

.principles__list-third-line .principles__card:nth-child(1) .principles__card-text * {
  @apply lg:max-w-[550px]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-icon {
  @apply min-w-[62px] min-h-[58px] max-w-[62px] max-h-[58px]
  xl:mt-[-8px]
  lg:mt-[-59px]
  sm:min-w-[60px] sm:min-h-[56px] sm:max-w-[60px] sm:max-h-[56px]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-content {
  @apply border-dashed border-[#023438]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply border-dashed border-[#023438]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-icon-container {
  @apply ml-[-5%] xl:ml-[-7%] lg:ml-0
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-text * {
  @apply sm:max-w-[270px]
}

.principles__list-third-line .principles__card:nth-child(3) .principles__card-header-container {
  @apply right-auto left-0
}

.principles__list-third-line .principles__card:nth-child(3) .principles__card-header {
  @apply flex-row-reverse
}

.principles__list-third-line .principles__card:nth-child(3) .principles__card-content {
  @apply rounded-tl-none rounded-tr-[9px]
}

.principles__card-button-container {
  @apply flex items-center justify-center h-[300px] opacity-0 lg:hidden
}

.principles__card-button {
  @apply xl:mt-[18px]
}

.principles__card-header-icon-last .principles__card-header-icon-container {
  @apply w-[9%]
}

.principles__card-header-icon-last .principles__card-header {
  @apply flex-row-reverse
}
</style>
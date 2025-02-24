<template>
  <div class="principles__list">
    <ul :class="getRowClass(rowIndex)" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <li :class="['principles__card', getIcon(rowIndex, index).class]" v-for="(item, index) in row" :key="index">
        <div class="principles__card-header">
          <div class="principles__card-header-icon-container">
            <picture v-if="getIcon(rowIndex, index).icon !== null">
              <img
                  v-intersection-observer="value => onIntersectionObserver(value, index)"
                  :src="getIcon(rowIndex, index).icon!"
                  :alt="`Иконка № ${index}`"
                  :class="['principles__card-header-icon', {'show-up-1000': intersectingIconsArr.includes(index)}]"
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
    </ul>
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {Principle} from "~/types/responses/components/section-components/principle";

type BlockSectorAdvantagesCardsProps = {
  principles: Principle[],
  button: string
  link?: string
}
const props = defineProps<BlockSectorAdvantagesCardsProps>();

const rows: Principle[][] = [];

const cardsPerRowFirst = 3;
const cardsPerRowOther = 2;
const intersectingIconsArr = reactive<number[]>([]);
const iconQueue = reactive<number[]>([]);
const isProcessing = ref(false);

if (props.principles.length > 0) {
  for (let i = 0; i < props.principles.length;) {
    const currentRowCount = (rows.length % 3 === 0) ? cardsPerRowFirst : cardsPerRowOther;

    rows.push(props.principles.slice(i, i + currentRowCount));

    i += currentRowCount;
  }
}

const iconList = [
  ['/img/svg/service/principles_4.svg', null, '/img/svg/service/principles_1.svg'],
  ['/img/svg/service/principles_6.svg', '/img/svg/service/principles_7.svg'],
  [null, '/img/svg/list_with_circle.svg'],
];

const getIcon = (rowIndex: number, index: number): (Record<string, string | null>) => {
  const firstIndex = rowIndex % 3;
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
  const index = rowIndex % 3;
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
</script>

<style scoped>
.principles__list {
  @apply mt-[66px] lg:mt-[63px] sm:mt-[41px]
}

.principles__card {
  @apply flex flex-col
}

.principles__list-first-line {
  @apply grid grid-cols-[33.6%_31.7%_33.4%] gap-[13.35px] mb-[15px]
  xl:gap-[10px]
  lg:grid-cols-1 lg:gap-[8px] lg:mb-[8px]
  last:mb-0
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
  @apply flex justify-center items-center
  w-[13.5%] h-full
  lg:w-[8.5%] sm:w-[14.5%]
}

.principles__card-header-container::before {
  content: '';
  position: absolute;
  bottom: -3px;
  right: 0;
  z-index: 1;
  height: 4px;
  width: 100%;
  background-color: #F8FCFD;
}

.principles__card-content {
  @apply flex flex-col justify-center h-[253.27px] border-2 border-black rounded-tl-[9px] rounded-b-[9px] mt-[-2px] px-[33px]
  xl:px-[23px]
}

.principles__card-text * {
  @apply max-w-[420px] text-black text-[22px] font-golos font-medium leading-[120%] line-clamp-6
    lg:max-w-[533px]
  sm:max-w-[276px] sm:text-[18px] sm:leading-[122%] sm:line-clamp-[8]
}

.principles__list-first-line .principles__card:nth-child(1) .principles__card-header-icon {
  @apply min-w-[48px] min-h-[45px] max-w-[48px] max-h-[45px]
  xl:min-w-[43px] xl:min-h-[40px] xl:max-w-[43px] xl:max-h-[40px]
  md:min-w-[48px] md:min-h-[45px] md:max-w-[48px] md:max-h-[45px]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply w-[90%] left-0 border-dashed border-[#023438]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-icon-container {
  @apply w-[10%]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header {
  @apply order-1 lg:order-2
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-content {
  @apply border-dashed border-[#023438] rounded-tl-none rounded-tr-[9px] order-2 lg:order-1
  lg:rounded-t-[9px] lg:rounded-bl-none lg:pt-[20px]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply lg:border-t-0 lg:border-b-2 lg:rounded-t-none lg:rounded-b-[9px] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-first-line .principles__card:nth-child(2) .principles__card-header-icon-container {
  @apply lg:w-[8.5%] sm:w-[14.5%]
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
  @apply w-[4%] ml-[-3%] xl:w-[5%] lg:w-[8.5%] lg:ml-0 sm:w-[12.5%]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-header-icon {
  @apply min-w-[57px] min-h-[54px] lg:mt-[-57px]
}

.principles__list-first-line .principles__card:nth-child(3) .principles__card-content {
  @apply lg:rounded-tl-none lg:rounded-tr-[9px]
}

.principles__list-second-line {
  @apply grid grid-cols-[49.8%_49.8%] gap-[9px] mb-[10px]
  xl:grid-cols-[51.3%_48.1%]
  lg:grid-cols-1 lg:mb-[8px]
  sm:mb-[10px] last:mb-0
}

.principles__list-second-line .principles__card-header-container {
  @apply w-[93%] xl:w-[90%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-second-line .principles__card-header-icon-container {
  @apply w-[7%] xl:w-[10%] lg:w-[8.5%] sm:w-[14.5%]
}

.principles__list-second-line .principles__card-text * {
  @apply max-w-[633px] lg:max-w-[533px] sm:max-w-[276px]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-icon {
  @apply mt-[-5px] min-w-[46px] min-h-[44px] max-w-[46px] max-h-[44px] xl:mt-[-8px] lg:mt-[-4px]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-container {
  @apply border-dashed border-[#023438] xl:w-[91%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-header-icon-container {
  @apply xl:w-[9%] lg:w-[8.5%] sm:w-[14.5%]
}

.principles__list-second-line .principles__card:nth-child(1) .principles__card-content {
  @apply border-dashed border-[#023438]
}

.principles__list-second-line .principles__card:nth-child(2) .principles__card-header-icon {
  @apply mt-[-4px] min-w-[46px] min-h-[44px] max-w-[46px] max-h-[44px] xl:mt-[-7px] lg:mt-[-4px]
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

.principles__list-third-line {
  @apply grid grid-cols-2 gap-[9px] mb-[11px]
  xl:grid-cols-[51.3%_48%]
  lg:grid-cols-1 lg:mb-[8px]
  last:mb-0
}

.principles__list-third-line .principles__card .principles__card-header {
  @apply order-1 lg:order-2 lg:mt-[-2px] flex-row-reverse lg:flex-row
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header {
  @apply lg:order-1
}

.principles__list-third-line .principles__card-header-icon {
  @apply w-[46px] h-[43px] min-w-[46px] min-h-[43px] mt-[-6px] xl:mt-[-5px] lg:mt-[8px]
}

.principles__list-third-line .principles__card-header-container {
  @apply w-[93.5%] xl:w-[89.8%] lg:w-[91.5%] sm:w-[85.5%]
}

.principles__list-third-line .principles__card-header-icon-container {
  @apply w-[6.5%] xl:w-[10.2%] lg:w-[8.5%] lg:mt-[-63px] sm:w-[14.5%]
}

.principles__list-third-line .principles__card-header-icon-container {
  @apply w-[6.5%] xl:w-[10.2%] lg:w-[8.5%] sm:w-[14.5%]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header {
  @apply flex-row
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-icon-container {
  @apply ml-[-4%] xl:ml-[-6%] lg:ml-0
}

.principles__list-third-line .principles__card .principles__card-header-container {
  @apply left-0 lg:right-0 lg:left-auto lg:rounded-t-none lg:rounded-b-[9px] lg:border-dashed lg:border-dark-green
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply left-auto right-0 border-dashed border-dark-green
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-container {
  @apply lg:border-solid lg:border-black lg:rounded-t-[9px] lg:rounded-b-none
}

.principles__list-third-line .principles__card .principles__card-header-container::before {
  @apply lg:top-[-3px]
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-header-container::before {
  @apply lg:top-auto lg:bottom-[-3px]
}

.principles__list-third-line .principles__card .principles__card-content {
  @apply rounded-tl-none rounded-tr-[9px] order-2
  lg:order-1 lg:pt-[20px] lg:rounded-t-[9px] lg:rounded-br-none lg:border-dark-green lg:border-dashed
}

.principles__list-third-line .principles__card:nth-child(2) .principles__card-content {
  @apply border-dark-green border-dashed rounded-tl-[9px] rounded-tr-none
  lg:order-2 lg:border-solid lg:border-black lg:rounded-b-[9px]
}

.principles__list-third-line .principles__card .principles__card-text * {
  @apply max-w-[633px] lg:max-w-[533px] sm:max-w-[276px]
}

.principles__card-header-icon-last .principles__card-header-icon-container {
  @apply lg:mt-0
}

.principles__card-header-icon-last .principles__card-header {
  @apply flex-row-reverse
}
</style>
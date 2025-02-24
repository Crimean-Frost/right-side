<template>
  <ul class="drop-down-text__container">
    <li
        v-for="(item, index) in data" :key="index"
        class="drop-down-text__item"
        :style="{ height: `${dropDownAnimationItemsSource.blockHeight[index] ? dropDownAnimationItemsSource.blockHeight[index] + 1 : 0}px` }"
    >
      <div ref="dropDownHeaderRef" class="drop-down-text__header" @click="toggleIsDropDownTextOpen(index)">
        <h3 class="drop-down-text__header-title">
          {{ typograf.execute(item.label) }}
        </h3>
        <SvgCrossDropDown
            :class="['drop-down-text__header-icon', {'drop-down-text__header-icon-active': item.isTextOpen}]"
        />
      </div>
      <div class="drop-down-text__content" ref="dropDownTextRef">
        <p class="drop-down-text__content-text">{{ typograf.execute(item.description) }}</p>
        <ButtonSecondary
            class="drop-down-text__content-button"
            :to="`services/${config.public.prefix}${item.slug}`"
        >
          {{ button }}
        </ButtonSecondary>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type {ServicesBase} from "~/types/responses/collections/services";
import type {CategoriesBase} from "~/types/responses/collections/categories";

type BaseType = ServicesBase | CategoriesBase

export type ServiceWithTextOpen = BaseType & {
  isTextOpen: boolean;
};

type BlockSectorServicesDropDownTextProps = {
  data: ServiceWithTextOpen[]
  button: string
}

type BlockDropDownTextEmits = {
  toggleIsDropDownTextOpen: [value: number]
}

const config = useRuntimeConfig();

type DropDownAnimationItemsSource = {
  blockHeight: number[]
  headerHeight: number[]
  textHeight: number[]
}

const props = defineProps<BlockSectorServicesDropDownTextProps>();
const emit = defineEmits<BlockDropDownTextEmits>();
const dropDownHeaderRef = ref<HTMLElement[] | null>([]);
const dropDownTextRef = ref<HTMLElement[] | null>([]);

const dropDownAnimationItemsSource = ref<DropDownAnimationItemsSource>({
  blockHeight: [],
  headerHeight: [],
  textHeight: [],
})

const dropDownAnimationItemsSourceHeight = () => {
  dropDownHeaderRef.value?.forEach(item => {
    dropDownAnimationItemsSource.value.headerHeight.push(item.offsetHeight);
  });
  dropDownTextRef.value?.forEach(item => {
    dropDownAnimationItemsSource.value.textHeight.push(item.offsetHeight);
  })
  props.data.forEach(item => {
    if (item.isTextOpen) {
      for (let i = 0; i < props.data.length; i++) {
        calculateBlockMaxHeight(i);
      }
    } else {
      dropDownAnimationItemsSource.value.blockHeight = [...dropDownAnimationItemsSource.value.headerHeight];
    }
  })
}

const calculateBlockMaxHeight = (index: number) => {
  if (props.data[index].isTextOpen) {
    dropDownAnimationItemsSource.value.blockHeight[index] = dropDownAnimationItemsSource.value.headerHeight[index] + dropDownAnimationItemsSource.value.textHeight[index]
  } else {
    dropDownAnimationItemsSource.value.blockHeight[index] = dropDownAnimationItemsSource.value.headerHeight[index];
  }
}

const dropDownAnimation = (index: number, isOpen: boolean) => {
  if (isOpen) {
    dropDownAnimationItemsSource.value.blockHeight[index] += 10
    setTimeout(() => {
      dropDownAnimationItemsSource.value.blockHeight[index] -= 10
    }, 200)
  } else {
    dropDownAnimationItemsSource.value.blockHeight[index] -= 10
    setTimeout(() => {
      dropDownAnimationItemsSource.value.blockHeight[index] += 10
    }, 200)
  }
}

const toggleIsDropDownTextOpen = (index: number) => {
  emit('toggleIsDropDownTextOpen', index);
  calculateBlockMaxHeight(index);
  setTimeout(() => {
    dropDownAnimation(index, props.data[index].isTextOpen)
  }, 500)
};

onMounted(() => {
  dropDownAnimationItemsSourceHeight();
})
</script>


<style scoped>
.drop-down-text__container {
  @apply w-[1156px] xl:w-[824px] lg:w-full
}

.drop-down-text__item {
  @apply overflow-hidden mb-[30px]
    md:mb-[28px]
  sm:mb-[23px] transition-all ease-linear duration-500
  last:mb-0
}

.drop-down-text__item:nth-child(1) {
  @apply md:mb-[31px] sm:mb-[22px]
}

.drop-down-text__item:nth-child(2) {
  @apply sm:mb-[34px]
}

.drop-down-text__item:nth-child(3) {
  @apply xl:mb-[31px] md:mb-[33px] sm:mb-[34px]
}

.drop-down-text__item:nth-child(4) {
  @apply md:mb-[29px] sm:mb-[34px]
}

.drop-down-text__header {
  @apply flex justify-between items-center pb-[14px] cursor-pointer border-b
    md:pb-[14px]
  sm:pb-[6px]
}

.drop-down-text__item:nth-child(3) .drop-down-text__header {
  @apply sm:pb-[11px]
}

.drop-down-text__item:nth-child(4) .drop-down-text__header {
  @apply sm:pb-[11px]
}

.drop-down-text__item:nth-child(5) .drop-down-text__header {
  @apply sm:pb-[11px]
}

.drop-down-text__header-title {
  @apply text-black text-[26px] font-golos font-medium leading-[108%]
    xl:max-w-[650px]
  sm:text-[18px] sm:leading-[21.6px] sm:max-w-[275px]
}

.drop-down-text__header-icon {
  @apply w-[50px] h-[50px] min-w-[50px] min-h-[50px] mr-[-11px] rotate-[-43.5deg] transition-all ease-linear duration-500
}

.drop-down-text__header-icon-active {
  @apply rotate-0
}

.drop-down-text__content {
  @apply pt-[21px] md:pt-[22px] sm:pt-[18px]
}

.drop-down-text__content-text {
  @apply mb-[33px] text-[18px] font-normal font-onest leading-[116%] text-black max-w-[565px]
  lg:max-w-[550px]
  md:mb-[35px] md:leading-[105%] md:tracking-[-0.72px]
  sm:mb-[19px] sm:text-[16px] sm:leading-[126%] sm:w-full sm:tracking-normal
}

.drop-down-text__item:nth-child(1) .drop-down-text__content-text {
  @apply mb-[40px] xl:mb-[34px] md:mb-[35px] sm:mb-[16px]
}

.drop-down-text__item:nth-child(3) .drop-down-text__content-text {
  @apply mb-[34px] sm:mb-[24px]
}

.drop-down-text__item:nth-child(4) .drop-down-text__content-text {
  @apply mb-[35px] sm:mb-[24px]
}

.drop-down-text__item:nth-child(5) .drop-down-text__content-text {
  @apply mb-[42px] xl:mb-[32px] md:mb-[34px] sm:mb-[20px]
}

.drop-down-text__content-button {
  @apply h-[50px] xl:w-[200px]
  md:mt-0
  sm:w-full sm:h-[57px]
}
</style>
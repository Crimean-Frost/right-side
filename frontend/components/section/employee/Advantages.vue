<template>
  <section class="advantages__section">
    <TitleSection class="advantages__title">{{ title }}</TitleSection>
    <ul class="drop-down-text__container">
      <li
          v-for="(item, index) in dropDownTextData" :key="index"
          class="drop-down-text__item"
          :style="{height: `${dropDownAnimationItemsSource.blockHeight[index] ? dropDownAnimationItemsSource.blockHeight[index] : 0}px`}"
      >
        <div ref="dropDownHeaderRef" class="drop-down-text__header" @click="toggleIsDropDownTextOpen(index)">
          <h3 class="drop-down-text__header-title">
            {{ typograf.execute(item.title) }}
          </h3>
          <SvgCrossDropDown
              :class="['drop-down-text__header-icon', {'drop-down-text__header-icon-active': item.isTextOpen}]"
          />
        </div>
        <div class="drop-down-text__content" ref="dropDownTextRef">
          <p class="drop-down-text__content-text">{{ typograf.execute(item.description) }}</p>
        </div>
      </li>
    </ul>
    <ButtonPrimary class="advantages__left-button">
      {{ buttonText }}
    </ButtonPrimary>
  </section>
</template>

<script setup lang="ts">

import type {CompetenceCardComponent} from "~/types/responses/components/section-components/competence-card-component";

type DropDownAnimationItemsSource = {
  blockHeight: number[]
  headerHeight: number[]
  textHeight: number[]
}

export type ServicesDynamicAdvantagesProps = {
  title: string,
  dropDownText: CompetenceCardComponent[],
  buttonText: string
}

const props = defineProps<ServicesDynamicAdvantagesProps>();

const dropDownTextData = reactive(
    props.dropDownText?.map(advantages => ({
      ...advantages,
      isTextOpen: false,
    }))
)

const dropDownHeaderRef = ref<HTMLElement[] | null>([]);
const dropDownTextRef = ref<HTMLElement[] | null>([]);

const dropDownAnimationItemsSource = ref<DropDownAnimationItemsSource>({
  blockHeight: [],
  headerHeight: [],
  textHeight: [],
});

const dropDownAnimationItemsSourceHeight = () => {
  dropDownHeaderRef.value?.forEach(item => {
    dropDownAnimationItemsSource.value.headerHeight.push(item.offsetHeight);
  });
  dropDownTextRef.value?.forEach(item => {
    dropDownAnimationItemsSource.value.textHeight.push(item.offsetHeight);
  })
  dropDownTextData.forEach(item => {
    if (item.isTextOpen) {
      for (let i = 0; i < dropDownTextData.length; i++) {
        calculateBlockMaxHeight(i);
      }
    } else {
      dropDownAnimationItemsSource.value.blockHeight = [...dropDownAnimationItemsSource.value.headerHeight];
    }
  })
};

const calculateBlockMaxHeight = (index: number) => {
  if (dropDownTextData[index].isTextOpen) {
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
  dropDownTextData[index].isTextOpen = !dropDownTextData[index].isTextOpen;
  calculateBlockMaxHeight(index);
  setTimeout(() => {
    dropDownAnimation(index, dropDownTextData[index].isTextOpen)
  }, 500)
};

onMounted(() => {
  dropDownAnimationItemsSourceHeight();
})
</script>

<style scoped>
.advantages__section {
  @apply relative flex justify-between items-start mt-[164px] min-h-[250px]
    xl:mt-[177px]
  lg:flex-col lg:mt-[120px]
  sm:mt-[101px]
}

.advantages__left-button {
  @apply absolute bottom-[-2px] left-0 w-[200px] h-[200px] min-w-[200px] min-h-[200px]
    xl:w-[167px] xl:h-[167px] xl:min-w-[167px] xl:min-h-[167px]
  lg:relative lg:w-[200px] lg:h-[200px] lg:mx-auto lg:mt-[58px]
  sm:w-[180px] sm:h-[180px] sm:mt-[50px]
}

.advantages__title {
  @apply mt-[-1px] xl:mt-[-2px] xl:ml-0 lg:ml-0 lg:mb-[39px] sm:mb-[40px]
}

.advantages__content {
  @apply lg:w-full
}

.drop-down-text__container {
  @apply w-[1156px] mr-[260px] mt-[-16px]
  2xl:mr-[119px] 2xl:w-[824px] 2xl:mt-[-5px]
  lg:w-full lg:mt-[22px]
  sm:mt-0
}

.drop-down-text__item {
  @apply overflow-hidden mb-[35px] transition-all ease-linear duration-500
  sm:mb-[23px] last:mb-0
}

.drop-down-text__header {
  @apply flex justify-between items-center pb-[14px] cursor-pointer border-b
  sm:pb-[6px]
}

.drop-down-text__header-title {
  @apply text-black text-[26px] font-golos font-medium leading-[108%]
  xl:max-w-[720px]
    lg:max-w-[450px]
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
  @apply text-[18px] font-normal font-onest leading-[116%] text-black max-w-[566px]
  lg:max-w-[550px]
  md:leading-[105%] md:tracking-[-0.72px]
  sm:text-[16px] sm:leading-[20px] sm:w-full sm:tracking-normal
}
</style>
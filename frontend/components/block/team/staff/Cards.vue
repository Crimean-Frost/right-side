<template>
  <div class="staff__list-container" ref="staffCardsContainerRef">
    <ul class="staff__list" :style="{'max-height': `${staffCardsContainerHeight}px`}">
      <li ref="cardRef" class="staff__card" v-for="(item, index) in cardsData" :key="index">
        <NuxtLink :to="`/team/` + item.slug + '/'" class="staff__card-link">
          <div class="staff__card-picture">
            <picture>
              <source :srcset="`${config.public.apiBase}${item.mainPhotoMobile?.url}`" media="(max-width: 900px)">
              <img :src="`${config.public.apiBase}${item.mainPhoto?.url}`" :alt="item.mainPhoto?.alternativeText"
                   class="staff__card-img">
            </picture>
            <picture>
              <img src="/img/svg/arrow_dio.svg" alt="Стрелочка" class="staff__card-icon">
            </picture>
          </div>
          <span class="staff__card-name">
          {{ item.lastName }} <br class="staff__card-name-br">{{ item.firstName }} {{ item.middleName }}
        </span>
          <p class="staff__card-description staff__card-position" v-if="item.position">{{ typograf.execute(item.position) }}</p>
          <p class="staff__card-description">{{ typograf.execute(item.shortDescription) }}</p>
        </NuxtLink>
      </li>
    </ul>
    <ButtonSecondary @click="toggleIsStaffCardsOpen" class="staff__card-button">
      {{ isStaffCardsOpen ? closeCardsText : openCardsText }}
    </ButtonSecondary>
  </div>
</template>

<script setup lang="ts">
import type {EmployeesBase} from "~/types/responses/collections/employees";

const config = useRuntimeConfig();

export type BlockTeamStaffCardsProps = {
  openCardsText: string
  closeCardsText: string
  cardsData: EmployeesBase[]
}
const props = defineProps<BlockTeamStaffCardsProps>();

const isStaffCardsOpen = ref(false);
const pageSize = ref(0);
const staffCardsContainerHeight = ref(0);
const cardRowHeight = ref<number[]>([]);
const staffCardsContainerRef = ref<HTMLElement | null>(null);
const cardRef = ref<HTMLElement[] | null>(null);

const toggleIsStaffCardsOpen = () => {
  isStaffCardsOpen.value = !isStaffCardsOpen.value;
  calculateStaffCardsContainerHeight();
  if (!isStaffCardsOpen.value) {
    scrollToTop()
  }
}

const scrollToTop = () => {
  if (staffCardsContainerRef.value) {
    const offsetHeight = 400;
    const topPosition = staffCardsContainerRef.value.getBoundingClientRect().top + window.scrollY - offsetHeight;
    window.scrollTo({top: topPosition, behavior: 'smooth'});
  }
}

const calculateStaffCardsContainerHeight = () => {
  if (isStaffCardsOpen.value) {
    staffCardsContainerHeight.value = cardRowHeight.value.reduce((total, height) => total + height + 30, 0);
  } else {
    calculateStaffCardsContainerMinHeight()
  }
}

const calculateStaffCardsContainerMinHeight = () => {
  if (pageSize.value >= 1250) {
    calculateCardRowHeight(cardRef.value!, 3);
    staffCardsContainerHeight.value = cardRef.value!.slice(0, 2)[0].clientHeight + cardRef.value!.slice(3, 5)[0].clientHeight + 60
  } else if (pageSize.value > 650) {
    calculateCardRowHeight(cardRef.value!, 2);
    staffCardsContainerHeight.value = cardRef.value!.slice(0, 1)[0].clientHeight + cardRef.value!.slice(2, 3)[0].clientHeight + cardRef.value!.slice(4, 5)[0].clientHeight + 60
  } else if (pageSize.value <= 650) {
    calculateCardRowHeight(cardRef.value!, 1);
    staffCardsContainerHeight.value = cardRef.value!.slice(0)[0].clientHeight + cardRef.value!.slice(1)[0].clientHeight + cardRef.value!.slice(2)[0].clientHeight + cardRef.value!.slice(3)[0].clientHeight + cardRef.value!.slice(4)[0].clientHeight + 90
  }
}

const calculateCardRowHeight = (items: HTMLElement[], rowCount: number) => {
  if (pageSize.value > 650) {
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i += rowCount) {
        const cardsRow = items.slice(i, i + rowCount - 1);
        const maxHeight = Math.max(...cardsRow.map(item => item.clientHeight))
        cardRowHeight.value.push(maxHeight)
        cardsRow.forEach(item => {
          item.style.height = `${maxHeight}px`
        })
      }
    }
  } else {
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i += rowCount) {
        const cardsRow = items.slice(i, i + rowCount);
        const maxHeight = Math.max(...cardsRow.map(item => item.clientHeight))
        cardRowHeight.value.push(maxHeight)
        cardsRow.forEach(item => {
          item.style.height = `${maxHeight}px`
        })
      }
    }
  }
}

onMounted(() => {
  pageSize.value = window.innerWidth;
  calculateStaffCardsContainerMinHeight()
})
</script>

<style scoped>
.staff__list-container {
  @apply max-w-[1275px] ml-auto mr-[136px]
  2xl:mx-auto
  xl:max-w-[1062px] xl:mr-0
  lg:max-w-[744px] lg:mx-auto
  sm:max-w-[346px]
}

.staff__list {
  @apply grid grid-cols-3 gap-[10px] max-h-[1512px] overflow-hidden transition-all duration-700
  xl:max-h-[1320px]
  lg:grid-cols-2 lg:max-h-[2045px]
  sm:grid-cols-1 sm:max-h-[2920px] sm:gap-[22px]
}

.staff__card {
  @apply min-h-[729px] mb-[20px]
  xl:min-h-[632px]
  lg:mb-[12px] md:min-h-[636px]
  sm:min-h-[524px] sm:mb-0
}

.staff__card-link {
  @apply block cursor-pointer
}

.staff__card-picture {
  @apply relative
}

.staff__card-img {
  @apply h-[537px] object-cover rounded-[16px]
  xl:h-[438px] md:h-[468px] sm:h-[429px]
}

.staff__card-icon {
  @apply absolute bottom-[16px] right-[16px] w-[48px] h-[48px]
}

.staff__card-name {
  @apply block mt-[30px] text-[24px] text-black font-golos font-medium leading-[29px]
  xl:mt-[29px] xl:leading-[27px] xl:text-[22px]
  md:mt-[19px]
  sm:mt-[18px] sm:text-[18px] sm:leading-[23px]
}

.staff__card-name-br {
  @apply block sm:hidden
}

.staff__card-description {
  @apply max-w-[87%] mt-[16px] font-onest text-[18px] text-black font-light tracking-[-0.7px] leading-[115%]
  xl:max-w-[93%] xl:mt-[13px]
  lg:max-w-[320px] lg:mt-[14px] lg:leading-[108%]
  sm:max-w-[80%] sm:mt-[10px] sm:text-[16px] sm:leading-[115%] sm:tracking-[-0.64px]
}

.staff__card-position {
  @apply mt-[16px] mb-[-4px] max-w-full
  xl:mt-[13px] xl:mb-[-2px]
  sm:mt-[12px] sm:mb-0
}

.staff__card-button {
  @apply mt-[15px] w-full bg-white text-black
  xl:mt-[38px] xl:h-[60px]
  md:mt-[18px]
  sm:h-[57px] sm:mt-[28.5px] sm:text-[16px] sm:leading-[89%] sm:tracking-[-0.64px] !important
}
</style>
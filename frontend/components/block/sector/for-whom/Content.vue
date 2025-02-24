<template>
  <div class="whom__container" v-if="forWhomCardData.length > 0">
    <template v-for="(card, index) in forWhomCardData" :key="index">
      <div :class="[`whom__card whom__card-${index}`, {'whom__card-active': card.isTextOpen}]"
           @click="toggleIsCardTextOpen(index)">
        <div class="whom__card-inner">
          <h3 class="whom__card-title" v-html="typograf.execute(card.label)"></h3>
          <picture class="whom__card-picture">
            <img src="/img/svg/plus_black.svg" alt="" class="whom__card-icon">
          </picture>
        </div>
        <div :class="['whom__content', {'whom__content-active': forWhomCardData[index].isTextOpen}]">
          <p class="whom__content-text" v-html="typograf.execute(card.description)"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">

import type {ForWhomCard} from "~/types/responses/components/section-components/for-whom-card";

type IForWhomContentProps = {
  cards: ForWhomCard[]
}

const props = defineProps<IForWhomContentProps>();

const forWhomCardData = reactive(
    (props.cards.slice(0, 4)).map(card => ({
      ...card,
      isTextOpen: false
    })) || []
);

const toggleIsCardTextOpen = (index: number) => {
  forWhomCardData.forEach((card, i) => {
    card.isTextOpen = i === index ? !card.isTextOpen : false;
  });
};
</script>

<style scoped>
.whom__container {
  @apply relative w-[753px] h-[760px] mt-[64px] mx-auto bg-[url('/img/svg/for_whom.svg')] bg-cover
  xl:w-[598px] xl:h-[604px] xl:mt-[54px]
  lg:mt-[68px]
  sm:mt-[38px]
}

.whom__card {
  @apply absolute z-[1] w-[420px] h-[209px] bg-white border-2 border-black rounded-[16px]
  lg:w-[333px] lg:h-[165.71px]
}

.whom__card-active {
  @apply z-[5]
}

.whom__card-0 {
  @apply top-[58.5px] bottom-auto left-[-132px]
  xl:top-[69.5px] xl:left-[-224px]
  lg:top-[27px] lg:left-[-73px]
}

.whom__card-1 {
  @apply bottom-[101px] right-[-178px]
  2xl:right-[-140px]
  xl:bottom-[-12px] xl:right-[-237px]
  lg:bottom-[24px] lg:right-[-73px]
}

.whom__card-2 {
  @apply top-[103px] bottom-auto right-[-196px]
  2xl:top-[88px] 2xl:right-[-251px]
  b-lg:right-[-148px]
  lg:right-[-73px] lg:top-[95px]
}

.whom__card-3 {
  @apply bottom-[158px] left-[-222px] right-auto
  2xl:bottom-[32px] 2xl:left-[-199px]
  lg:bottom-[81px] lg:left-[-61px]
}

.whom__card-inner {
  @apply py-[38px] px-[23px] flex items-end w-full h-full cursor-pointer
  lg:py-[28px] lg:px-[18px]
}

.whom__card-title {
  @apply text-[26px] font-golos font-medium text-black leading-[120%]
  lg:text-[22px]
}

.whom__card-picture {
  @apply absolute top-[16px] right-[16px]
  lg:top-[8px] lg:right-[8px]
  sm:top-[7px] sm:right-[7px]
}

.whom__card-icon {
  @apply w-[45px] h-[45px] rounded-[6px];
  animation: pulse 1.5s ease-in-out infinite;
}

.whom__content {
  @apply absolute z-[2] bg-white max-w-[357px] py-[15px] px-[12px] rounded-[16px] shadow-[0_4px_14.6px_2px_rgba(0,0,0,0.12)]
  invisible opacity-0 transition-opacity duration-500
  xl:top-[-97px] xl:right-[-280px] xl:w-[359px]
  lg:top-[-86px] lg:right-[-299px] lg:w-[330px] lg:p-[16px] lg:tracking-[-0.6px]
  sm:p-[14px]
}

.whom__card-0 .whom__content {
  @apply left-auto top-[-82px] right-[-303px] max-w-[384px]
  2xl:top-[-71px] 2xl:right-[-283px] 2xl:max-w-[359px]
  lg:top-[-97px] lg:right-[-215px] lg:max-w-[315px]
}

.whom__card-1 .whom__content {
  @apply left-auto top-[-72px] right-[-132px] max-w-[315px]
  2xl:top-[-50px] 2xl:right-[-116px] 2xl:max-w-[282px]
  lg:top-[-60px] lg:max-w-[290px]
}

.whom__card-2 .whom__content {
  @apply left-auto top-[-33px] right-[-276.5px] max-w-[357px]
  2xl:top-[-27px] 2xl:right-[-75px] 2xl:max-w-[300px]
  lg:top-[-42px] lg:right-[3px] lg:max-w-[312px]
}

.whom__card-3 .whom__content {
  @apply left-auto top-[-71px] right-[-167.5px] max-w-[351px]
  2xl:top-[-47px] 2xl:right-[-132px] 2xl:max-w-[315px]
  lg:top-[-81px] lg:right-[-50px] lg:max-w-[312px]
}

.whom__content-active {
  @apply visible opacity-100
}

@media (max-width: 1439px) {
  .whom__card-1 .whom__content {
    @apply xl:right-[10px] lg:right-[-2px]
  }
}

.whom__content-text {
  @apply font-onest text-black font-light text-[18px] leading-[116%] tracking-[-0.68px]
  xl:text-[16px] xl:leading-[111%] xl:tracking-[-0.64px]
  lg:tracking-[-0.6px]
}

@media (max-width: 766px) {
  .whom__container {
    @apply w-full max-w-[360px] h-[363px]
  }

  .whom__card {
    @apply w-[158px] h-[136px]
  }

  .whom__card-0 {
    @apply top-0 left-[10px]
  }

  .whom__card-1 {
    @apply top-auto bottom-[-19px] right-[-10px]
  }

  .whom__card-2 {
    @apply right-[-10px] top-[47px]
  }

  .whom__card-3 {
    @apply bottom-[21px] left-[11px]
  }

  .whom__card-inner {
    @apply py-[19px] px-[15px]
  }

  .whom__card-title {
    @apply text-[16px] leading-[120%]
  }

  .whom__card-picture {
    @apply right-[10px]
  }

  .whom__card-icon {
    @apply w-[35px] h-[35px]
  }

  .whom__card-0 .whom__content {
    @apply top-[-63px] bottom-auto right-[-171px] max-w-[310px]  p-[14px]
  }

  .whom__card-1 .whom__content {
    @apply top-[-48px] bottom-auto right-[10px] max-w-[310px] p-[14px]
  }

  .whom__card-2 .whom__content {
    @apply top-[-42px] bottom-auto right-[-1px] max-w-[310px] p-[14px]
  }

  .whom__card-3 .whom__content {
    @apply top-[-54px] bottom-auto right-[-163px] max-w-[310px] p-[14px]
  }
}

@media (max-width: 360px) {
  .whom__container {
    @apply mx-[-10px]
  }
}
</style>
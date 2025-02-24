<template>
  <article class="article" v-for="(articleItem, index) in casesArticleListData" :key="index">
    <picture>
      <img :src="apiBase + articleItem?.cover?.url" :alt="articleItem?.cover?.alternativeText" class="article__img">
    </picture>
    <div class="article__content">
      <h2 class="article__title">
        {{ typograf.execute(articleItem?.shortTitle) }}
      </h2>
<!--      <p class="article__description">-->
<!--        {{ typograf.execute(articleItem?.shortDescription) }}-->
<!--      </p>-->
    </div>
      <ButtonSecondary :to="`/cases/` + articleItem.slug" class="article__button">
        {{ generalCardButton }}
      </ButtonSecondary>
  </article>
</template>

<script setup lang="ts">

import type {CasesBase} from "~/types/responses/collections/cases";

export type BlockCasesArticleProps = {
  casesArticleListData?: CasesBase[];
  generalCardButton?: string;
}

const props = defineProps<BlockCasesArticleProps>();

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

const tempDiv = ref<HTMLElement | null>(null);

</script>

<style scoped>
.article {
  @apply relative h-[490px] border-2 border-dashed py-[22.5px] px-[21.3px] rounded-[15px]
  xl:h-[448px] xl:rounded-[9px] xl:rounded-ss-[15px] xl:py-[25px] xl:px-[23.5px]
  md:h-[429px] md:py-[23.5px] md:px-[13.5px] md:rounded-[15px]
  sm:h-[357px] sm:py-[18.5px] sm:px-[14px]
}

.article__img {
  @apply object-cover w-full h-[212px] mb-[24px] rounded-[15px]
  b-xl:h-[170px]
  2xl:h-[150px]
  xl:h-[212px]
  b-lg:h-[195px] b-lg:min-h-[170px] b-lg:max-h-[212px]
  md:h-[170.5px] md:min-h-[161px]
  sm:min-h-[161.5px] sm:h-[161.5px]
}

.article__content {
  @apply h-[145px] mb-[12px] lg:ml-[-2px] sm:ml-[0.5px]
}

.article__title {
  @apply mb-[12.5px] font-golos text-black text-[26px] leading-[31.2px] font-semibold
  xl:mb-[11px] xl:text-[22px] xl:leading-[26.4px]
  md:mb-[13.5px] sm:text-[16px]
  sm:leading-[19.2px] sm:mb-[13px]
}

.article__description {
  @apply font-onest text-black font-light leading-[18.4px] tracking-[-0.64px]
  xl:text-[16px] xl:leading-[18.4px] md:tracking-[-0.6px] sm:tracking-[-0.55px]
}

.article__button {
  @apply absolute bottom-[23.5px] left-[21.5px] w-[200px] h-[50px] inline-flex items-center justify-center text-black
  font-onest font-light tracking-[-0.6px] border border-orange rounded-[30px] pt-[1px]
  xl:bottom-[25px] xl:left-[24px]
  md:bottom-[23.5px] md:left-[11.5px]
  sm:w-[calc(100%-28px)] sm:bottom-[18px] sm:left-[14px] sm:mx-auto sm:text-[16px] sm:tracking-[-0.64px] sm:leading-[89%]
}
</style>
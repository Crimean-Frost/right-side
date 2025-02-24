<template>
  <ul class="learn-more__cards">
    <li class="learn-more__card" v-for="(item, index) in cards" :key="index">
      <p class="learn-more__card-title"> {{ typograf.execute(item.title) }} </p>
      <picture>
        <img :src="apiBase + item.cover.url"
             :alt="item.cover.alternativeText ? item.cover.alternativeText : 'Изображение'"
             class="learn-more__card-img">
      </picture>
      <ButtonSecondary :to="!item.link!.startsWith('/') ? `/${item.link}` : item.link" class="learn-more__button">
        {{ item.button }}
      </ButtonSecondary>
    </li>
  </ul>
</template>

<script setup lang="ts">

import type {TitleCard} from "~/types/responses/components/section-components/title-card";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

export type BlockBlogLearnMoreCardProps = {
  cards?: TitleCard[],
}
const props = defineProps<BlockBlogLearnMoreCardProps>();
</script>

<style scoped>
.learn-more__cards {
  @apply grid grid-cols-2 gap-[10px] md:grid-cols-1
}

.learn-more__card {
  @apply relative p-[30px] h-[415.5px] w-full bg-[#23303866] rounded-[15px]
  xl:h-[300px] xl:p-[25px]
  md:py-[23px]
  sm:h-[291px]
}

.learn-more__card-title {
  @apply text-[26px] text-white leading-[31.2px] font-golos font-medium
  xl:ml-[2px]
  md:ml-0 md:mt-[2px]
  sm:text-[18px] sm:leading-[21.6px]
}

.learn-more__card-img {
  @apply object-cover absolute top-0 left-0 w-full h-full z-[-1] rounded-[15px]
}

.learn-more__button {
  @apply absolute bottom-[30px] right-[32px] w-[250px] border font-light
  xl:bottom-[25px] xl:right-[23px] xl:w-[200px] xl:h-[50px]
  md:bottom-[26px] md:right-[25px] md:w-[250px] md:h-[58px] md:text-[16px] md:tracking-[-0.64px] md:leading-[115%]
  sm:bottom-[25px] sm:right-[25px] sm:w-[calc(100%-50px)] sm:h-[50px] sm:font-normal sm:leading-[89%]
}
</style>
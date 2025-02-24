<template>
  <div class="content">
    <div class="content__sidebar">
    </div>
    <div class="content__body">
      <div class="content__block">
        <span v-html="typograf.execute(removeMetaCharsetTag(description))" class="content__paragraph"></span>
      </div>
      <div
          class="content__block"
          v-for="paragraph in chapters"
          :key="paragraph.id"
      >
        <div :id="`paragraph-${paragraph.id}`" class="content__target"></div>
        <h2 class="content__title" v-html="typograf.execute(removeMetaCharsetTag(paragraph.title))"></h2>
        <span class="content__paragraph" v-html="typograf.execute(removeMetaCharsetTag(paragraph.description))"></span>
      </div>
      <div class="content__authors" v-if="authorList.length > 0">
        <p class="content__authors-text">
          {{ authorLabel }}
        </p>
        <ul class="content__author-list">
          <template v-for="author in authorList" :key="author.id">
            <li v-if="author.slug" class="content__author-item">
              <NuxtLink :to="`/team/${author.slug}/`" class="content__author-block">
                <picture>
                  <img :src="`${config.public.apiBase}${author.mainPhotoMobile?.url}`"
                       :alt="author.mainPhotoMobile?.alternativeText" class="content__author-img">
                </picture>
                <p class="content__author-name">
                  {{ author.firstName }} {{ author.lastName }}
                </p>
              </NuxtLink>
            </li>
            <li v-else class="content__author-item">
              <div class="content__author-block">
                <picture>
                  <img :src="`${config.public.apiBase}${author.mainPhotoMobile?.url}`"
                       :alt="author.mainPhotoMobile?.alternativeText" class="content__author-img">
                </picture>
                <p class="content__author-name">
                  {{ author.firstName }} {{ author.lastName }}
                </p>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type {EmployeesBase} from "~/types/responses/collections/employees";

export type CaseContentProps = {
  chapters?: { id: number; title: string; description: string, shortTitle: string }[];
  description?: string;
  authorLabel?: string;
  authorList: EmployeesBase[]
};

defineProps<CaseContentProps>();

const config = useRuntimeConfig();
</script>

<style scoped>
.content {
  @apply flex gap-[130px]
  b-lg:gap-[50px]
  b-md:gap-0 b-md:flex-col
}

.content__sidebar {
  @apply w-[350px] flex-shrink-0 b-xl:w-[226px] b-sm:w-full
}

.content__body {
  @apply flex flex-col gap-[65px] pr-[310px]
  b-xl:pr-[80px] b-lg:pr-[20px]
  b-sm:gap-[77px]
}

.content__block {
  @apply relative
}

.content__target {
  @apply absolute top-[-130px] b-lg:top-[-100px] left-0
}

.content__title {
  @apply block mb-[24px] text-[68px] text-black font-golos font-normal leading-[94%] tracking-[-2.7px] indent-[118px]
  b-xl:mb-[34px]
  xl:text-[50px] xl:tracking-[-2px]
  md:text-[48px]
  b-sm:mb-[31px]
  sm:text-[28px] sm:font-normal sm:indent-0 sm:tracking-[-1.3px]
}

.content__paragraph {
  @apply font-onest font-light leading-[116%] tracking-[-0.72px] text-[18px] text-black
  b-md:leading-[105%]
  b-sm:text-[16px] b-sm:tracking-[-0.64px] b-sm:leading-[116%]
}

.content__paragraph * strong {
  @apply font-normal
}

.content__authors {
  @apply mt-[-20px] b-xl:mt-[-23px] b-md:mt-[-29px] b-sm:mt-[-41px]
}

.content__authors-text {
  @apply mb-[18.5px] font-onest text-[14px] font-medium text-dark-green-56
}

.content__author-list {
  @apply flex items-center flex-wrap gap-[20px] b-sm:flex-col b-sm:gap-[11px] b-sm:mx-[-11px]
}

.content__author-item {
  @apply px-[14px] py-[13px] border border-dark-green-56 rounded-[54px]
  b-md:pr-[26px]
  b-sm:py-[6px] b-sm:px-[12px] b-sm:w-full b-sm:mr-[-20px]
}

.content__author-block {
  @apply flex items-center
}

.content__author-img {
  @apply w-[46px] h-[46px] min-w-[46px] min-h-[46px] rounded-[200px] mr-[13px] b-sm:mr-[10px]
}

.content__author-name {
  @apply inline-block mb-[3px] text-[18px] font-onest leading-[115%] mx-auto text-nowrap
  b-md:tracking-[-0.75px]
  b-sm:text-[16px] b-sm:text-wrap py-[10px]
}
</style>

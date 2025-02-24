<template>
  <section class="publication__section">
    <TitleSection class="publication__title">{{ title }}</TitleSection>
    <ul class="publication__list">
      <li class="publication__item" v-for="publication in publications" :key="publication.id">
        <div class="publication__item-content">
          <h3 ref="publicationTitleRef" :style="{width: `${calculateTitleMaxWidth + 20}px`}"
              class="publication__item-title">{{ publication.title }}</h3>
          <p class="publication__item-description">{{ typograf.execute(publication.description) }}</p>
        </div>
        <NuxtLink :to="publication.link.includes(protocol) ? publication.link : `${publication.link}/`" class="publication__item-link" target="_blank">
          <picture>
            <img src="/img/svg/arrow_dio.svg" alt="Стрелочка" class="publication__item-link-icon">
          </picture>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type {Publication} from "~/types/responses/components/section-components/publication";

export type SectionEmployeePublicationsProps = {
  title: string
  publications: Publication[]
}
const protocol = 'https://'
const props = defineProps<SectionEmployeePublicationsProps>();

const publicationTitleRef = ref<HTMLElement[] | null>(null);

const calculateTitleMaxWidth = computed(() => {
  let itemsWidth: number[] = [];
  publicationTitleRef.value?.forEach(item => {
    itemsWidth.push(item.offsetWidth);
  });
  return Math.max(...itemsWidth);
})
</script>

<style scoped>
.publication__section {
  @apply flex items-start justify-between mt-[160px]
  lg:mt-[122px] lg:flex-col
  sm:mt-[100px]
}

.publication__title {
  @apply min-w-[100px] max-w-[111px] mt-[-3px] mr-[20px]
  xl:mt-[-2px]
  lg:mb-[39px]
  md:max-w-full
  sm:max-w-[111px] sm:mb-[35px]
}

.publication__list {
  @apply w-[74.4%] mt-[9.5px] xl:w-[66.4%] lg:w-full sm:mt-0
}

.publication__item {
  @apply flex items-end justify-between w-full mb-[28.5px] pb-[20px] border-b-2 border-black
  last:border-[0] last:pb-0 last:mb-0
  xl:mb-[30.5px] xl:pb-[18px]
  lg:mb-[24px] lg:pb-[25px] last:lg:border-b-2 last:lg:border-black last:lg:pb-[26px]
  sm:mb-[20px] sm:pb-[25px] last:sm:pb-[23px]
}

.publication__item-content {
  @apply flex items-center
}

.publication__item-title {
  @apply block max-w-[1000px] mr-[10px] ml-[-5px] font-golos text-[50px] leading-[94%] tracking-[-2px] text-wrap
  xl:max-w-[450px]
  lg:mr-[13px]
  md:max-w-[350px] md:text-[48px] md:tracking-[-1.92px]
  sm:max-w-[250px] sm:ml-[-2px] sm:text-[28px] sm:tracking-[-1.36px]
}

.publication__item-description {
  @apply max-w-[305px] mt-[2px] text-[18px] font-onest leading-[115%] text-dark-green-56
  lg:max-w-[255px] lg:mt-[6px]
  md:max-w-[280px] md:leading-[108%] md:tracking-[-0.72px]
  sm:hidden
}

.publication__item-link {
  @apply cursor-pointer
}

.publication__item-link-icon {
  @apply w-[48px] min-w-[48px] h-[48px] min-h-[48px] mt-[2px] lg:mt-[4px] sm:mt-[2px]
}
</style>
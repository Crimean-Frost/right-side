<template>
  <div class="partners__container">
    <div class="partners__row" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <div class="partners__row-inner">
        <ul class="partners__list">
          <li class="partners__card" v-for="(item, index) in row" :key="index">
            <template v-if="item.link">
              <NuxtLink :to="item.link + '/'" target="_blank">
                <picture>
                  <img
                      :src="`${config.public.apiBase}${item.logo.url}`"
                      :alt="item.logo.alternativeText ? item.logo.alternativeText : 'Изображение компании партнёра'"
                      class="partners__img"
                  >
                </picture>
                <div class="partners__card-hover">
                  <picture v-if="item.logoHover">
                    <img
                        :src="`${config.public.apiBase}${item.logoHover.url}`"
                        :alt="item.logoHover.alternativeText ? item.logoHover.alternativeText : 'Изображение компании партнёра'"
                        class="partners__img-hover"
                    >
                  </picture>
                </div>
              </NuxtLink>
            </template>
            <template v-else>
              <picture>
                <img
                    :src="`${config.public.apiBase}${item.logo.url}`"
                    :alt="item.logo.alternativeText ? item.logo.alternativeText : 'Изображение компании партнёра'"
                    class="partners__img"
                >
              </picture>
              <div class="partners__card-hover">
                <picture v-if="item.logoHover">
                  <img
                      :src="`${config.public.apiBase}${item.logoHover.url}`"
                      :alt="item.logoHover.alternativeText ? item.logoHover.alternativeText : 'Изображение компании партнёра'"
                      class="partners__img-hover"
                  >
                </picture>
              </div>
            </template>
          </li>
          <li class="partners__card-advertisement" v-if="rowIndex === rows.length - 1">
            <p class="partners__card-advertisement-text">Место для вашей рекламы</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PartnersCollectionData} from "~/types/responses/collections/partners";

type BlockPartnersBlockContainerProps = {
  data: PartnersCollectionData[],
}

const props = defineProps<BlockPartnersBlockContainerProps>();

const config = useRuntimeConfig();

const rows: PartnersCollectionData[][] = [];

const cardsPerRow = 4;

for (let i = 0; i < props.data.length; i += cardsPerRow) {
  rows.push(props.data.slice(i, i + cardsPerRow));
}

</script>

<style scoped>
.partners__row {
  @apply flex justify-start mb-[12px] sm:mb-[10px]
}

.partners__row-inner {
  @apply max-w-[1512px] w-full xl:max-w-full
}

.partners__row:nth-child(2n+2) {
  @apply justify-center ml-[63px] xl:ml-0
}

.partners__row:nth-child(4n+3) {
  @apply justify-end
}

.partners__row:nth-child(4n+3) .partners__row-inner {
  @apply max-w-[1131px] xl:max-w-full xl:ml-[25.2%] lg:ml-0
}

.partners__list {
  @apply grid grid-cols-4 gap-[12px] w-[100%] lg:grid-cols-2 sm:gap-[10px]
}

.partners__row:nth-child(4n+3) .partners__list {
  @apply grid-cols-3 lg:grid-cols-2
}

.partners__card {
  @apply relative flex items-center justify-center w-full h-[202px] border border-black rounded-[15px] hover:border-orange transition duration-500
  xl:h-[190px] lg:h-[200px] sm:h-[127px]
}

.partners__card-hover {
  @apply absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-100
}

.partners__img,
.partners__img-hover {
  @apply sm:max-w-[90px] sm:max-h-[60px] object-cover
}

.partners__card-advertisement {
  @apply hidden lg:flex lg:justify-center lg:items-center border border-black hover:border-orange transition duration-500 rounded-[15px]
}

.partners__card-advertisement-text {
  @apply text-center text-[20px] text-black leading-[24px] font-normal tracking-[0.5px] sm:text-[14px] sm:leading-[16.8px] sm:tracking-[0]
}
</style>
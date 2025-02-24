<template>
  <nav class="footer__navigation">
    <ul class="footer__navigation-list">
      <li class="footer__navigation-item" v-for="(item, index) in blockFooterNavigationData" :key="index">
        <NuxtLink :to="`/${item.path}/`">
          <TextFooterMain
            :text="item.label"
            class="footer__navigation-text">
          </TextFooterMain>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import type {FooterItem} from "~/types/responses/components/section-components/footer";

export type BlockFooterNavigationProps = {
  blockFooterNavigationData?: FooterItem[],
}
const props = defineProps<BlockFooterNavigationProps>();

</script>

<style scoped>
.footer__navigation-list {
  @apply pr-[153px] mt-[-2px]
  xl:pr-[205px] xl:mt-0 lg:flex
  lg:justify-between lg:items-center lg:w-[100%] lg:mt-[57.5px] lg:mb-[56px] lg:pr-[1.2px]
  sm:block sm:my-[40px] sm:mb-[39.5px]
}

.footer__navigation-item {
  @apply mb-[16.7px] lg:mb-0 sm:mb-[12.5px] last:mb-0
}

.footer__navigation-text {
  @apply font-light leading-[14.24px] tracking-[-0.65px]
}
</style>
<template>
  <div class="footer__privacy">
    <ul>
      <li  class="footer__privacy-user-agreement" v-for="(item, index) in files" :key="index">
        <NuxtLink :to="apiBase + item.file.url + '/'" target="_blank">
          <TextFooterSecondary
            :text="item.label"
          />
        </NuxtLink>
      </li>
      <li class="footer__privacy-mobile-requisite" v-for="(secondItem, secondIndex) in secondFiles" :key="secondIndex">
        <NuxtLink :to="apiBase + secondItem.file.url + '/'" target="_blank">
          <TextFooterSecondary
            :text="secondItem.label"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">


import type {FileLink} from "~/types/responses/components/section-components/footer";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

type BlockFooterPrivacyProps = {
  files?: FileLink[]
  secondFiles?: FileLink[]
}

const props = defineProps<BlockFooterPrivacyProps>();
</script>

<style scoped>
.footer__privacy {
  @apply pl-[50px] xl:pl-[4px]
  lg:pr-[4.5px] lg:pt-[2px]
  sm:pt-[1px] sm:pl-0
}

.footer__privacy-user-agreement {
  @apply block mb-[22px] sm:mb-[16px] last:mb-0
}

.footer__privacy-mobile-requisite {
  @apply hidden lg:block mt-[62px] sm:hidden
}
</style>
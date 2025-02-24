<template>
  <div class="footer__contacts">
    <ul class="footer__contacts-list">
      <li class="footer__contacts-item" v-for="(item, index) in blockFooterContactsData" :key="index">
        <NuxtLink :to="getLink(item)" class="footer__contacts-link">
          <div class="footer__contacts-img-container">
            <picture>
              <img :src="apiBase + item.icon?.url" :alt="item.icon?.alternativeText ? item.icon?.alternativeText : 'Иконка'" class="footer__contacts-icon">
            </picture>
          </div>
          <TextFooterMain
            :text="typograf.execute(item.label)"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import type {ContactLink} from "~/types/responses/components/section-components/contact-link";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

export type BlockFooterContactsProps = {
  blockFooterContactsData?: ContactLink[],
}
const props = defineProps<BlockFooterContactsProps>()

const getLink = (item: ContactLink) => {
  if (item.action === 'phone') {
    return `tel:${item.link}`;
  } else if (item.action === 'mail') {
    return `mailto:${item.link}`;
  } else {
    return item.link + "/";
  }
};
</script>

<style scoped>
.footer__contacts {
  @apply pr-[38px] xl:pr-[36px] mt-[-3px] lg:mt-0 lg:pr-[65px] lg:pt-[5px]
}

.footer__contacts-link {
  @apply flex items-center
}

.footer__contacts-img-container {
  @apply flex items-center justify-center w-[24px] h-[24px] mr-[6px]
}

.footer__contacts-item {
  @apply mb-[16px] xl:mb-[17px] last:mb-0
  lg:mb-[16px]
}

</style>
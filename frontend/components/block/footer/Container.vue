<template>
  <footer class="footer">
    <picture>
      <img :src="apiBase + footer?.logo?.url" :alt="footer?.logo?.alternativeText" class="footer__logo">
    </picture>
    <div class="footer__content">
      <TextFooterSecondary
          class="footer__copyright-mobile"
          :text="footer?.disclaimer"/>
      <div class="footer__main">
        <div class="footer__main-inner">
          <BlockFooterOffice
              :address="footer?.address"
              :working-time="footer?.workingTime"
          />
          <BlockFooterNavigation class="footer-navigation__desktop"
                                 :block-footer-navigation-data="footer?.footerMenu?.items"/>
          <BlockFooterContacts :block-footer-contacts-data="footer?.contactLinks"/>
        </div>
        <BlockFooterNavigation class="footer-navigation__mobile"
                               :block-footer-navigation-data="footer?.footerMenu?.items"/>
      </div>
      <div class="footer__personal">
        <BlockFooterCompany
            :description="footer?.description"
            :credit="bartTextAddLink(footer?.credit)"
        />
        <BlockFooterPrivacy
            :files="footer?.centerFileLinks"
            :second-files="footer?.rightFileLinks"
        />
        <BlockFooterRequisites
            :files="footer?.rightFileLinks"
            :disclaimer="footer?.disclaimer"
        />
        <TextFooterSecondary
            :text="bartTextAddLink(footer?.credit)"
            class="footer__mobile-bart">
        </TextFooterSecondary>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

import type {Footer} from "~/types/responses/components/section-components/footer";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

type BlockFooterContainerProps = {
  footer?: Footer,
}

const props = defineProps<BlockFooterContainerProps>();

const bartTextAddLink = (text?: string) => {
  if (text) {
    return text.replace('B.ART', '<a href="https://bart-group.com/" class="cursor-pointer" target="_blank">B.ART</a>')
  }
}
</script>

<style scoped>

.footer {
  @apply bg-footer-gray px-[10px] pt-[80px] pb-[50px] mt-[160px] rounded-t-[16px]
  lg:mt-[118.5px] lg:pb-[78px]
  sm:mt-[100px] sm:pt-[59px] sm:pb-[31px]
}

.footer__main {
  @apply pb-[36px] border-b border-white-18 lg:pb-0
}

.footer__main-inner {
  @apply flex justify-between items-start sm:block
}

.footer__logo {
  @apply w-[179px] h-[50px] mb-[40px]
  lg:w-[232px] lg:h-[65px] lg:ml-[2px] lg:mb-[33px]
  sm:w-[194px] sm:h-[54.16px] sm:mb-[23.5px]
}

.footer__content {
  @apply p-[2px] xl:p-0 lg:px-[2px]
}

.footer__personal {
  @apply flex justify-between items-start pt-[40px] lg:pt-[62px] lg:pr-[8px]
  sm:block sm:pt-[42px] sm:pb-0 sm:leading-[20px]
}

.footer-navigation__desktop {
  @apply lg:hidden
}

.footer__copyright-mobile {
  @apply hidden lg:block lg:mb-[41px]
}

.footer-navigation__mobile {
  @apply hidden lg:block
}

.footer__mobile-bart {
  @apply hidden mt-[44px] sm:block sm:mt-[45px]
}

</style>
<template>
  <BlockHeader
      :logo="data?.data?.header?.logo"
      :open-modal-callback-button="data?.data?.header?.openModalButton"
      @openSidebar="setIsSidebarOpen(!isSidebarOpen)"
  />
  <BlockSidebar
      :is-sidebar-open="isSidebarOpen"
      :header-menu="data?.data?.header?.headerMenu"
      @close-sidebar="setIsSidebarOpen(false)"
  />
  <main class="main">
    <slot></slot>
    <ModalApplication/>
    <ModalStatus/>
  </main>
  <BlockFooterContainer :footer="data?.data?.footer"/>
</template>

<script setup lang="ts">
import type {LayoutResponse} from "~/types/responses/layout";

const config = useRuntimeConfig();
const isSidebarOpen = ref(false);

const setIsSidebarOpen = (value: boolean) => {
  isSidebarOpen.value = value;
};

const { data, error } = useFetch<LayoutResponse>(
    apiUrl.layouts,
    {baseURL: config.public.apiBase},
)

if (data.value && data.value.data?.favicon) {
  const faviconUrl = data.value.data.favicon.url
  useHead({
    link: [{
      rel: 'icon',
      type: 'image/webp',
      href: config.public.apiBase + faviconUrl
    }]
  })
}

useHead({
  htmlAttrs: {
    lang: 'ru',
  }
})

// onUnmounted(() => {
//   window.scrollTo({top: 0, behavior: "instant"});
// });
//
// onMounted(() => {
//   window.scrollTo({top: 0, behavior: "instant"});
// })
</script>

<style scoped>
.main {
  @apply min-h-[50vh] px-[12px] xl:px-[10px] md:px-[12px] max-w-[1920px] mx-auto
}

</style>

<template>
  <template v-for="(section, index) in pageData?.data?.content" :key="index">
    <template v-if="section.__component === 'sections.main-hero'">
      <SectionServicesSectorHero
        :title-page="section.hero?.title"
        :description-page="section.hero?.description"
        :image="section.icon[0]"
        :image-mobile="section.iconMobile"
        :button="section.openModalButton"
      />
    </template>
    <template v-if="section.__component === 'sections.sector-services'">
      <SectionServicesSectorServices
        :section="section"
        :services-data="services"
      />
    </template>
    <template v-if="section.__component === 'sections.sector-cases' && pageData && pageData.data.cases.length > 0">
      <SectionServicesSectorCases
        :title="section.title"
        :button="section.button"
        :cases="pageData.data.cases"
      />
    </template>
    <template v-if="section.__component === 'sections.principles'">
      <SectionServicesSectorAdvantages
        :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.sector-application'">
      <SectionServicesSectorApplication
        :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.for-whom'">
      <SectionServicesSectorForWhom
        :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.contact-us-title' && contactUsWithoutData">
      <SectionServicesSectorContactUs
        v-if="contactUsWithoutData"
        class="sector__contact-us-section"
        :title="section.titleContainer?.title"
        :description="section.titleContainer?.description"
        :form-data="contactUsWithoutData"
      />
    </template>
  </template>
  <ModalSector v-if="modalWindow"
    :modal-window="modalWindow"
  />
</template>

<script setup lang="ts">
import type {CategoriesCollectionResponse} from "~/types/responses/collections/categories";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";
import type {ModalWindow} from "~/types/responses/components/sections/modal-window";
import type {DetailCategoryPageResponse} from "~/types/responses/pages/detial-category";
import type {ServicesBase} from "~/types/responses/collections/services";

const config = useRuntimeConfig();
const route = useRoute();

const pageApiUrl = computed(() => {
  return apiUrlFormat(apiUrl.sector, {'category-slug': route.params.sector})
});

const { data: pageData, error } = await useFetch<CategoriesCollectionResponse>(
    pageApiUrl.value,
    {baseURL: config.public.apiBase},
);

if (error.value?.data?.error?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    data: {
      myCustomField: true
    }
  })
}

const services = pageData.value?.data?.services || [];

services.sort((a: ServicesBase, b: ServicesBase) => {
  const aSorting = a.sorting === undefined ? Infinity : a.sorting;
  const bSorting = b.sorting === undefined ? Infinity : b.sorting;
  return aSorting - bSorting;
});

const {data: DetailCategoryPageData, error: contactUsError} = await useFetch<DetailCategoryPageResponse>(
    apiUrl.sectorDetailPage,
    {baseURL: config.public.apiBase},
);

const contactUsWithoutData = computed<ContactUsWithout | undefined>(() =>
    DetailCategoryPageData.value?.data?.content?.find(
        (section) => section.__component === 'sections.contact-us-without'
    )
);

const modalWindow = computed<ModalWindow | undefined>(() =>
    DetailCategoryPageData.value?.data?.content?.find(
        (section) => section.__component === 'sections.modal-window'
    )
)

seo(config.public.apiBase, pageData.value?.data?.seo);
</script>

<style scoped>
</style>
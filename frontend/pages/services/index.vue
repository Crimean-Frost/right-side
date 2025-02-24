<template>
  <template v-for="(section, index) in data?.data?.content" :key="index">
    <template v-if="section.__component === 'sections.main-hero'">
      <SectionServicesHero
        :title-page="section.hero?.title"
        :description-page="section.hero?.description"
        :image="section.icon[0]"
        :image-mobile="section.iconMobile"
        :button="section.openModalButton"
      />
    </template>
    <template v-if="section.__component === 'sections.services'">
      <SectionServices
        :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.contact-us'">
      <SectionServicesContactUs
        :contact-us="section"
      />
    </template>
  </template>
</template>

<script setup lang="ts">
import type {ServicesPageResponse} from "~/types/responses/pages/services";

const config = useRuntimeConfig();

const { data, error } = await useFetch<ServicesPageResponse>(
    apiUrl.services,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>

</style>
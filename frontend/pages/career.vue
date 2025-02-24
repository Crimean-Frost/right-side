<template>
  <div>
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component === 'sections.main-hero'">
        <SectionCareerHero
            :title-page="section.hero?.title"
            :description-page="section.hero?.description"
            :button="section.openModalButton"
            :image="section.icon[0]"
            :image-mobile="section.iconMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.about-command'">
        <SectionCareerAbout
            :heading-title="section.titleContainer?.title"
            :heading-description="section.titleContainer?.description"
            :section-descriptions="section.descriptions"
            :cover="section.cover"
            :cover-mobile="section.coverMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.vacancies'">
        <SectionCareerVacancies
          :section="section"
        />
      </template>
      <template v-if="section.__component === 'sections.contact-us-career'">
        <SectionCareerContactUs
            :contact-us="section"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {CareerPageResponse} from "~/types/responses/pages/career";

const config = useRuntimeConfig();

const { data, error } = await useFetch<CareerPageResponse>(
    apiUrl.career,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>

</style>
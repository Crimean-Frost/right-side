<template>
  <template v-for="(section, index) in data?.data?.content" :key="index">
    <template v-if="section.__component === 'sections.main-hero'">
      <SectionHomeHero
          :title="section.hero.title"
          :description="section.hero.description"
          :button="section.openModalButton"
      />
    </template>
    <template v-if="section.__component === 'sections.competence-card'">
      <SectionHomeCompetencies
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.about'">
      <SectionHomeAboutUs
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.services'">
      <SectionHomeServices
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.principles'">
      <SectionHomePrinciples
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.leave-application'">
      <SectionRequestPromoPrimary
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.cases' && section.cases.length > 0">
      <SectionHomeCases
          :titleContainer="section.titleContainer"
          :button="section.button"
          :cases="section.cases"
      />
    </template>
    <template v-if="section.__component === 'sections.clients-and-partners'">
      <SectionHomePartners
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.leave-application-description'">
      <SectionRequestPromoSecondary
          :section="section"
      />
    </template>
    <template v-if="section.__component === 'sections.blog' && section.blogs.length > 0">
      <SectionHomeBlog
          :titleContainer="section.titleContainer"
          :description="section.description"
          :button="section.button"
          :blogs="section.blogs"
      />
    </template>
    <template v-if="section.__component === 'sections.contact-us'">
      <SectionContactUs
          :contact-us="section"
      />
    </template>
  </template>
</template>

<script setup lang="ts">
import type {MainPageResponse} from "~/types/responses/pages/main";

const config = useRuntimeConfig();

const {data, error} = await useFetch<MainPageResponse>(
    apiUrl.home,
    {baseURL: config.public.apiBase},
)


seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>
</style>

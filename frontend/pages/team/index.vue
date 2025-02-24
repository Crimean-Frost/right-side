<template>
  <div>
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component === 'sections.main-hero'">
        <SectionTeamHero
            :title-page="section.hero?.title"
            :description-page="section.hero?.description"
            :button="section.openModalButton"
            :image="section.icon[0]"
            :image-mobile="section.iconMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.about-command'">
        <SectionTeamAbout
            :heading-title="section.titleContainer?.title"
            :heading-description="section.titleContainer?.description"
            :section-descriptions="section.descriptions"
            :cover="section.cover"
            :cover-mobile="section.coverMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.our-employees'">
        <SectionTeamStaff
          :title="section.titleContainer?.title"
          :description="section.titleContainer?.description"
          :cards-data="section.employees"
          :open-cards-text="section.openButton"
          :close-cards-text="section.closeButton"
        />
      </template>
      <template v-if="section.__component === 'sections.leave-application-description'">
        <SectionTeamLeaveApplicationDescription
            :heading-title="section.title"
            :card="section.card"
        />
      </template>
      <template v-if="section.__component === 'sections.contact-us'">
        <SectionTeamContactUs
            :contact-us="section"
        />
      </template>
      <template v-if="section.__component==='sections.advantages'">
        <SectionTeamLearnMore
          :section="section"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {TeamPageResponse} from "~/types/responses/pages/team";

const config = useRuntimeConfig();

const { data, error } = await useFetch<TeamPageResponse>(
    apiUrl.team,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>

</style>
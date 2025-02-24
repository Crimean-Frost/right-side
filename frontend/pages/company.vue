<template>
  <div>
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component === 'sections.main-hero'">
        <SectionCompanyHero
            :title-page="section.hero?.title"
            :description-page="section.hero?.description"
            :button="section.openModalButton"
            :image="section.icon[0]"
            :imageMobile="section.iconMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.learn-more-clean'">
        <SectionCompanyMission
            :heading-title="section.titleContainer.title"
            :heading-description="section.titleContainer.description"
            :cards="section.cards"
        />
      </template>
      <template v-if="section.__component === 'sections.about-company'">
        <SectionCompanyAbout
            :section="section"
        />
      </template>
      <template v-if="section.__component === 'sections.certificates'">
        <SectionCompanyCertificates
          :title="section.title"
          :certificates-list="section.images"
        />
      </template>
      <template v-if="section.__component === 'sections.leave-application'">
        <SectionCompanyLeaveApplicationTitle
            :heading-title="section.title"
            :card="section.card"
        />
      </template>
      <template v-if="section.__component==='sections.contact-us'">
        <SectionCompanyContactUs
            :contact-us="section"
        />
      </template>
      <template v-if="section.__component==='sections.advantages'">
        <SectionCompanyLearnMore
            :section="section"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {CompanyPageResponse} from "~/types/responses/pages/company";

const config = useRuntimeConfig();

const {data, error} = await useFetch<CompanyPageResponse>(
    apiUrl.company,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>

</style>
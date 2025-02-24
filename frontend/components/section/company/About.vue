<template>
  <section class="section__about">
    <BlockCompanyAboutHeading
      :title="section.titleContainer.title"
      :description="section.titleContainer.description"
    />
    <BlockCompanyAboutCards
        :data="section.cards"
        :button="section.button"
        :link="section.link"
    />
  </section>
</template>

<script setup lang="ts">

import type {AboutCompany} from "~/types/responses/components/sections/about-company";

export type SectionCompanyAboutProps = {
  section: AboutCompany
}
const props = defineProps<SectionCompanyAboutProps>();
</script>

<style scoped>
.section__about {
  @apply mt-[160px] xl:mt-[158px] md:mt-[118px] sm:mt-[98px]
}
</style>
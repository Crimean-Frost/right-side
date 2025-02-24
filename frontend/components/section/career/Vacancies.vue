<template>
  <section class="section__vacancies">
    <BlockCareerVacanciesHeading
      :title="section.titleContainer.title"
      :description="section.titleContainer.description"
    />
    <BlockCareerVacanciesCards
        :data="section.vacancies"
        :button="section.button"
        :link="section.link"
    />
  </section>
</template>

<script setup lang="ts">

import type {Vacancies} from "~/types/responses/components/sections/vacancies";

export type SectionCareerVacanciesProps = {
  section: Vacancies
}
const props = defineProps<SectionCareerVacanciesProps>();
</script>

<style scoped>
.section__vacancies {
  @apply mt-[158px] xl:mt-[158px] md:mt-[118px] sm:mt-[99px]
}
</style>
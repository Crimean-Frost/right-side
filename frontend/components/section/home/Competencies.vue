<template>
  <section class="competencies">
    <BlockHomeCompetenciesHeading
        class="competencies__heading"
        :title="typograf.execute(section.titleContainer.title)"
        :description="typograf.execute(section.titleContainer.description)"
    />
    <BlockHomeCompetenciesCard
      class="competencies__card-list"
      :card-inner-text="section.competenceCards"
      :button="section.button"
      :link="section.link"
    />
  </section>
</template>

<script setup lang="ts">

import type {CompetenceCard} from "~/types/responses/components/sections/competence-card";

export type SectionHomeCompetencies = {
  section: CompetenceCard
}
const props = defineProps<SectionHomeCompetencies>();
</script>

<style scoped>
.competencies {
  @apply ml-[13px] mt-[157px]
  xl:mt-[115px] xl:ml-[-2px]
  lg:mt-[52px] lg:ml-0
  sm:mt-[42px]
}

.competencies__heading {
  @apply mb-[74px] xl:mb-[61px] md:mb-[68px] sm:mb-[45px]
}
</style>
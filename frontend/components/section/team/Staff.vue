<template>
  <section class="staff__section">
    <BlockTeamStaffHeading
        :title="title"
        :description="description"
    />
    <BlockTeamStaffCards
        class="staff__section-cards"
        :cards-data="cardsData"
        :open-cards-text="openCardsText"
        :close-cards-text="closeCardsText"
    />
  </section>
</template>

<script setup lang="ts">
import type {EmployeesBase} from "~/types/responses/collections/employees";

export type SectionTeamStaffProps = {
  title: string
  description: string
  openCardsText: string
  closeCardsText: string
  cardsData: EmployeesBase[]
}
const props = defineProps<SectionTeamStaffProps>();
</script>


<style scoped>
.staff__section {
  @apply mt-[159px] xl:mt-[161px] md:mt-[121px] sm:mt-[101px]
}

.staff__section-cards {
  @apply mt-[73px] xl:mt-[66px] md:mt-[45px] sm:mt-[43px]
}
</style>
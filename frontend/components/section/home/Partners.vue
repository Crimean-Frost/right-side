<template>
  <section class="partners__section">
    <TitleSection class="partners__title">{{ section.title }}</TitleSection>
    <BlockHomePartnersCardsContainer
      :data="section.partners"
    />
  </section>
</template>

<script setup lang="ts">

import type {ClientsAndPartners} from "~/types/responses/components/sections/clients-and-partners";

export type SectionHomePartnersProps = {
  section: ClientsAndPartners
}

const props = defineProps<SectionHomePartnersProps>();
</script>

<style scoped>
.partners__section {
  @apply mt-[152px] lg:mt-[117px] sm:mt-[98px]
}

.partners__title {
  @apply mb-[64px] xl:mb-[61px] lg:mb-[35px] sm:mb-[41px]
}
</style>
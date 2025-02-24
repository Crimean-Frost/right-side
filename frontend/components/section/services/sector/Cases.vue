<template>
  <section class="cases__section">
    <TitleSection class="cases__title">{{ title }}</TitleSection>
    <BlockCarousel
      :data="cases"
      :button="button"
    />
  </section>
</template>

<script setup lang="ts">

import type {CasesBase} from "~/types/responses/collections/cases";

export type SectionServicesSectorCasesProps = {
  title: string
  button: string
  cases: CasesBase[]
}
const props = defineProps<SectionServicesSectorCasesProps>();
</script>

<style scoped>
.cases__section {
  @apply mt-[151px] md:mt-[118.5px] sm:mt-[99px]
}

.cases__title {
  @apply mb-[64px] xl:mb-[60px] md:mb-[61px] sm:mb-[41px]
}
</style>
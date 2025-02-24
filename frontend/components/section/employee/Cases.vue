<template>
  <section class="cases__section">
    <TitleSection class="cases__title">{{ title }}</TitleSection>
    <BlockEmployeeCarousel
      :data="cases"
      :button="button"
    />
  </section>
</template>

<script setup lang="ts">

import type {CasesBase} from "~/types/responses/collections/cases";

export type SectionEmployeeCasesProps = {
  title: string
  button: string
  cases: CasesBase[]
}
const props = defineProps<SectionEmployeeCasesProps>();
</script>

<style scoped>
.cases__section {
  @apply mt-[146px] md:mt-[103px] sm:mt-[96px]
}

.cases__title {
  @apply mb-[64px] xl:mb-[60px] md:mb-[41px] sm:mb-[42px]
}
</style>
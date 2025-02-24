<template>
  <section class="cases__section">
    <BlockHomeCasesHeading class="cases__section-heading"
      :title="titleContainer.title"
      :description="titleContainer.description"
    />
    <BlockCarousel
      class="cases__section-carousel"
      :data="cases"
      :button="button"
    />
  </section>
</template>

<script setup lang="ts">
import type {CasesBase} from "~/types/responses/collections/cases";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";

export type SectionHomeCasesProps = {
  titleContainer: TitleContainer
  button: string
  cases: CasesBase[]
}
const props = defineProps<SectionHomeCasesProps>();

</script>


<style scoped>
.cases__section {
  @apply mt-[158px] md:mt-[118px] sm:mt-[99px]
}

.cases__section-carousel {
  @apply mt-[65px] xl:mt-[63px] md:mt-[24px] sm:mt-[45px]
}
</style>
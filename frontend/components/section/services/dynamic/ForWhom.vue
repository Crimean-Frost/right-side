<template>
<section class="for-whom__section">
  <BlockServicesDynamicForWhomHeading :title="section.titleContainer.title" :description="section.titleContainer.description"/>
  <BlockServicesDynamicForWhomContent :cards="section.cards"/>
</section>
</template>

<script setup lang="ts">
import type {ForWhom} from "~/types/responses/components/sections/for-whom";

export type SectionSectorForWhomProps = {
  section: ForWhom
}

const props = defineProps<SectionSectorForWhomProps>();
</script>

<style scoped>
.for-whom__section {
  @apply mt-[157px] xl:mt-[188px] lg:mt-[168px] md:mt-[68px]
}
</style>
<template>
<section class="whom__section">
  <BlockSectorForWhomHeading :title="section.titleContainer.title" :description="section.titleContainer.description"/>
  <BlockSectorForWhomContent :cards="section.cards" />
</section>
</template>

<script setup lang="ts">
import type {ForWhom} from "~/types/responses/components/sections/for-whom";

export type SectionServicesSectorForWhomProps = {
  section: ForWhom
}
const props = defineProps<SectionServicesSectorForWhomProps>();

</script>

<style scoped>
.whom__section {
  @apply mt-[160px] xl:mt-[158px] md:mt-[117px] sm:mt-[99px]
}
</style>
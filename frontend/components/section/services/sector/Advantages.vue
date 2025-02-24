<template>
 <section class="advantages__section">
   <BlockSectorAdvantagesHeading
     :title="section.titleContainer.title"
     :description="section.titleContainer.description"
   />
   <BlockSectorAdvantagesCards
     :principles="section.principles"
     :button="section.button"
     :link="section.link"
   />
 </section>
</template>

<script setup lang="ts">
import type {Principles} from "~/types/responses/components/sections/principles";

type BlockSectorAdvantagesProps = {
  section: Principles
}
const props = defineProps<BlockSectorAdvantagesProps>();
</script>

<style scoped>
.advantages__section {
  @apply mt-[160px] md:mt-[116px] sm:mt-[97px]
}
</style>
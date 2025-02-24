<template>
  <section class="about-us__section">
    <BlockHomeAboutUsHeading
        :title="section.titleContainer.title"
        :description="section.titleContainer.description"
        :section="section"
    />
    <BlockPromo
        :card="section.card"
    />
  </section>
</template>

<script setup lang="ts">
import type {About} from "~/types/responses/components/sections/about";

export type SectionHomeAboutProps = {
  section: About
}
const props = defineProps<SectionHomeAboutProps>();
</script>

<style scoped>
.about-us__section {
  @apply mt-[158px] xl:mt-[159px] md:mt-[69px] sm:mt-[57px]
}
</style>
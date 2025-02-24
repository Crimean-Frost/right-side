<template>
  <section class="about-us__section">
    <BlockServicesDynamicAboutServiceHeading
        :title="headingTitle"
        :description="headingDescription"
        :section-descriptions="sectionDescriptions"
    />
  </section>
</template>

<script setup lang="ts">

import type {Image} from "~/types/responses/components/default-components/image";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";

export type AboutServiceSectionProps = {
  headingTitle: string
  headingDescription: string
  sectionDescriptions: Vacancy[]
  cover: Image
  coverMobile: Image
}

const props = defineProps<AboutServiceSectionProps>();
const config = useRuntimeConfig();
</script>

<style scoped>
.about-us__section {
  @apply mt-[157px] xl:mt-[127px] md:mt-[55px] sm:mt-[19px]
}
</style>
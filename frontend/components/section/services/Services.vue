<template>
  <section class="section__services">
    <BlockServicesPageServicesHeading
      :title="section.titleContainer.title"
      :description="section.titleContainer.description"
    />
    <BlockServicesPageServicesCards
        :data="section.categories"
        :button="section.button"
        :link="section.link"
    />
  </section>
</template>

<script setup lang="ts">

import type {Services} from "~/types/responses/components/sections/services";

export type SectionServicesProps = {
  section: Services
}
const props = defineProps<SectionServicesProps>();
</script>

<style scoped>
.section__services {
  @apply mt-[160px] xl:mt-[123px] md:mt-[27px] sm:mt-[44px]
}
</style>
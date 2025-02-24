<template>
<section class="section__principles">
  <BlockHomePrinciplesHeading
    :title="section.titleContainer.title"
    :description="section.titleContainer.description"
  />
  <BlockHomePrinciplesCards
    :principles="section.principles"
    :button="section.button"
    :link="section.link"
  />
</section>
</template>

<script setup lang="ts">

import type {Principles} from "~/types/responses/components/sections/principles";

type SectionHomePrinciplesProps = {
  section: Principles
}
const props = defineProps<SectionHomePrinciplesProps>();

</script>

<style scoped>
.section__principles {
  @apply mt-[158px] md:mt-[119px] sm:mt-[99px]
}
</style>
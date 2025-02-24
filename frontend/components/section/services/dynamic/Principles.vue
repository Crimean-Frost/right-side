<template>
  <section class="principles__section">
    <BlockServicesDynamicPrinciplesHeading
        :title="title"
        :description="description"
    />
    <BlockServicesDynamicPrinciplesCards
        class="principles__cards-container"
        :cards-data="cardsData"
    />
  </section>
</template>

<script setup lang="ts">

import type {Principle} from "~/types/responses/components/section-components/principle";

export type ServicesDynamicPrinciplesSectionProps = {
  title: string
  description: string
  cardsData: Principle[]
}

const props = defineProps<ServicesDynamicPrinciplesSectionProps>();
</script>

<style scoped>
.principles__section {
  @apply mt-[158px] md:mt-[69px] sm:mt-[59px]
}

.principles__cards-container {
  @apply mt-[67px] xl:mt-[71px] md:mt-[64px] sm:mt-[48px]
}
</style>
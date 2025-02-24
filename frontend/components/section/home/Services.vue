<template>
  <section class="services__section">
    <BlockHomeServicesHeading
        class="services__heading"
        :title="section.titleContainer.title"
        :description="section.titleContainer.description"
    />
    <div class="services__content">
      <BlockDropDownText
          class="services__section-drop-down"
          :data="servicesDropDownData"
          :button="section.serviceButton"
          @toggle-is-drop-down-text-open="toggleIsDropDownTextOpen"
      />
      <ButtonPrimary
        class="services__content-button"
        :text="section.button"
        :to="section.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type {Services} from "~/types/responses/components/sections/services";

export type SectionHomeServicesProps = {
  section: Services
}
const props = defineProps<SectionHomeServicesProps>();
const servicesDropDownData = reactive(
  props.section.categories.map(service => ({
    ...service,
    isTextOpen: false
  })) || []
);

const toggleIsDropDownTextOpen = (index: number) => {
  servicesDropDownData[index].isTextOpen = !servicesDropDownData[index].isTextOpen;
};
</script>

<style scoped>
.services__section {
  @apply mt-[158px] xl:mt-[160px] md:mt-[119px] sm:mt-[99px]
}

.services__heading {
  @apply md:mr-[10px]
}

.services__section-drop-down {
  @apply mt-[79px] mr-[136px] xl:mt-[74px] xl:mr-[119px] lg:mr-auto lg:mt-[66px] sm:mt-[47px]
}

.services__content {
  @apply flex justify-between items-end flex-row-reverse lg:block
}

.services__content-button {
  @apply block w-[200px] h-[200px] min-w-[200px] min-h-[200px] mr-[50px]
    xl:w-[167px] xl:h-[167px] xl:min-w-[167px] xl:min-h-[167px]
  lg:w-[200px] lg:h-[200px] lg:min-w-[200px] lg:min-h-[200px] lg:mx-auto lg:mt-[60px]
  sm:w-[180px] sm:h-[180px] sm:min-w-[180px] sm:min-h-[180px] sm:mt-[38.5px]
}
</style>
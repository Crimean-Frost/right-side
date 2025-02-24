<template>
  <section class="services__section">
    <BlockSectorServicesHeading
      :title="section.titleContainer.title"
      :description="section.titleContainer.description"
    />
    <div class="services__content">
      <BlockSectorServicesDropDownText
        class="services__content-drop-down-block"
        :data="sectorServicesData"
        :button="section.serviceButton"
        @toggle-is-drop-down-text-open="toggleIsDropDownTextOpen"/>
      <ButtonPrimary
        class="services__content-button"
        :text="section.button"
        :to="section.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

import type {SectorServices} from "~/types/responses/components/sections/sector-services";
import type {ServicesBase} from "~/types/responses/collections/services";

export type SectionServicesSectorServices = {
  section: SectorServices
  servicesData?: ServicesBase[]
}
const props = defineProps<SectionServicesSectorServices>();

const sectorServicesData = reactive(
  props.servicesData?.map(service => ({
    ...service,
    isTextOpen: false
  })) || []
);

const toggleIsDropDownTextOpen = (index: number) => {
  sectorServicesData[index].isTextOpen = !sectorServicesData[index].isTextOpen;
};
</script>

<style scoped>
.services__section {
  @apply mt-[108px] xl:mt-[134px] md:mt-[23px] sm:mt-[17px]
}

.services__content {
  @apply flex items-end justify-between flex-row-reverse lg:flex-col
}

.services__content-drop-down-block {
  @apply mt-[73px] mr-[7.2%] xl:mt-[68px] xl:mr-[8.4%] lg:mr-0 sm:mt-[45px]
}

.services__content-button {
  @apply min-w-[200px] min-h-[200px] mr-[50px]
  xl:min-w-[167px] xl:min-h-[167px]
  lg:min-w-[200px] lg:min-h-[200px] lg:mx-auto lg:mt-[60px]
  sm:w-[180px] sm:h-[180px] sm:min-w-[180px] sm:min-h-[180px] sm:mt-[38px]
}
</style>
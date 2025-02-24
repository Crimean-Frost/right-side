<template>
  <section class="contact__section">
    <BlockServicesPageContactUsHeading
        :title="contactUs.titleContainer.title"
        :description="contactUs.titleContainer.description"
    />
    <div class="contact__content">
      <BlockServicesPageContactUsForm
          :contact-us-form="contactUs.form"
          class="contact__content-form"
      />
      <div class="contact__content-img-block">
        <picture v-if="contactUs.image?.url">
          <img src="/img/webp/drawing.webp" alt="Круг с узорами" class="contact__content-drawing">
        </picture>
        <picture class="contact__content-picture">
          <source :srcset="`${config.public.apiBase}${contactUs.imageMobile?.url}`" media="(max-width:640px)">
          <img :src="`${config.public.apiBase}${contactUs.image?.url}`"
               :alt="contactUs.image?.alternativeText ? contactUs.image?.alternativeText : 'Изображение'"
               class="contact__content-img">
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {ContactUs} from "~/types/responses/components/sections/contact-us";

export type SectionServiceContactUsProps = {
  contactUs: ContactUs
}

const props = defineProps<SectionServiceContactUsProps>();
const config = useRuntimeConfig();
</script>


<style scoped>
.contact__section {
  @apply mt-[158px] xl:mt-[159px] md:mt-[112px] sm:mt-[92px]
}

.contact__content {
  @apply flex items-start justify-between w-full mt-[61px]
  xl:mt-[60px]
  lg:flex-col md:mt-[63px] sm:mt-[36px]
}

.contact__content-form {
  @apply w-[49.4%] mr-[50px] xl:w-[41%] lg:w-full lg:mr-0
}

.contact__content-img-block {
  @apply relative mt-[8px] rounded-[15px] overflow-hidden
  lg:mx-auto lg:mt-[50px]
}

.contact__content-img {
  @apply max-w-[856px] min-h-[443px] rounded-[15px] object-cover
  xl:max-w-[694px] xl:min-h-[412px]
  md:max-w-full md:w-full
  sm:min-h-[442px]
}

.contact__content-drawing {
  @apply absolute z-[1] top-0 left-[-3px] w-[289px] h-[259px]
  xl:left-0 xl:w-[231px] xl:h-[210px]
  lg:top-[33px] lg:w-[170px] lg:h-[154px]
  sm:top-[11px] sm:w-[75px] sm:h-[68px]
}
</style>
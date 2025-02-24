<template>
  <section class="contact-us__section">
    <BlockCompanyContactUsHeading
        :title="contactUs.titleContainer.title"
        :description="contactUs.titleContainer.description"
    />
    <div class="contact__content">
      <BlockCompanyContactUsForm
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

export type SectionCompanyContactUsProps = {
  contactUs: ContactUs
}

const props = defineProps<SectionCompanyContactUsProps>();
const config = useRuntimeConfig();
</script>


<style scoped>
.contact-us__section {
  @apply mt-[159px] xl:mt-[160px] md:mt-[119px] sm:mt-[98px]
}

.contact__content {
  @apply flex items-start justify-between w-full mt-[54px]
  xl:mt-[68px]
  lg:flex-col
  md:mt-[66px] sm:mt-[39px]
}

.contact__content-form {
  @apply w-[49.4%] mr-[50px] xl:w-[41%] lg:w-full lg:mr-0 sm:ml-[-5px]
}

.contact__content-img-block {
  @apply relative mt-[8px] rounded-[15px] overflow-hidden
  lg:mx-auto lg:mt-[39px]
  sm:mt-[100px]
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
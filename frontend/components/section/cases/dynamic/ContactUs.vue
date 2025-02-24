<template>
  <section class="contact-us__section">
    <BlockCaseContactUsHeading
        :title="contactUs.titleContainer.title"
        :description="contactUs.titleContainer.description"
    />
    <div class="contact__content">
      <BlockCaseContactUsForm :contact-us-form="contactUs.form" class="contact__content-form"/>
      <picture class="contact__content-picture">
        <img src="/img/webp/drawing.webp" alt="Круг с узорами" class="contact__content-drawing">
        <source :srcset="`${config.public.apiBase}${contactUs.imageMobile?.url}`" media="(max-width:640px)">
        <img :src="`${config.public.apiBase}${contactUs.image?.url}`" :alt="contactUs.image?.alternativeText"
             class="contact__content-img">
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {ContactUs} from "~/types/responses/components/sections/contact-us";

export type SectionCaseContactUsProps = {
  contactUs: ContactUs
}

const props = defineProps<SectionCaseContactUsProps>();
const config = useRuntimeConfig();
</script>


<style scoped>
.contact-us__section {
  @apply mt-[158px] b-xl:mt-[160px] b-md:mt-[120px] b-sm:mt-[100px]
}

.contact__content {
  @apply flex items-start justify-between w-full mt-[59px]
  xl:mt-[58px]
  lg:flex-col md:mt-[56px] sm:mt-[37px]
}

.contact__content-form {
  @apply w-[49.4%] mr-[50px] xl:w-[41%] lg:w-full lg:mr-0
}

.contact__content-img {
  @apply mt-[8px] max-w-[856px] min-h-[443px] rounded-[15px] object-cover
  xl:max-w-[694px] xl:min-h-[412px]
  lg:mx-auto lg:mt-[50px]
  md:max-w-full md:w-full
  sm:min-h-[442px]
}

.contact__content-picture {
  @apply relative overflow-hidden lg:mx-auto
}

.contact__content-drawing {
  @apply absolute z-[1] top-[7px] left-[-3px] w-[289px] h-[259px]
  xl:left-0 xl:w-[231px] xl:h-[210px]
  lg:top-[110px]
  sm:top-[69px] sm:w-[162px] sm:h-[147px] sm:hidden
}
</style>
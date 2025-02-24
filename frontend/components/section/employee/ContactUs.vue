<template>
  <section class="contact-us__section">
    <BlockEmployeeContactUsHeading
        :title="title"
        :description="description"
    />
    <div class="contact__content">
      <BlockTeamContactUsForm
          :contact-us-form="formData.form"
          class="contact__content-form"
      />
      <div class="contact__content-img-block">
        <picture v-if="formData.image?.url">
          <img src="/img/webp/drawing.webp" alt="Круг с узорами" class="contact__content-drawing">
        </picture>
        <picture class="contact__content-picture">
          <source :srcset="`${config.public.apiBase}${formData.imageMobile?.url}`" media="(max-width:640px)">
          <img :src="`${config.public.apiBase}${formData.image?.url}`"
               :alt="formData.image?.alternativeText ? formData.image?.alternativeText : 'Изображение'"
               class="contact__content-img">
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";

export type SectionTeamContactUsProps = {
  title: string
  description: string
  formData: ContactUsWithout
}

const props = defineProps<SectionTeamContactUsProps>();
const config = useRuntimeConfig();
</script>


<style scoped>
.contact-us__section {
  @apply mt-[157px] xl:mt-[160px] md:mt-[121px] sm:mt-[102px]
}

.contact__content {
  @apply flex items-start justify-between w-full mt-[60.5px]
  xl:mt-[57px]
  lg:flex-col lg:mt-[55px]
  sm:mt-[36px]
}

.contact__content-form {
  @apply w-[49.4%] mr-[50px] xl:w-[41%] lg:w-full lg:mr-0
}

.contact__content-img-block {
  @apply relative mt-[8px] rounded-[15px] overflow-hidden
  lg:mx-auto lg:mt-[52px]
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
<template>
  <section class="contacts__container">
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component==='sections.contacts'">
        <BlockHeadingContainer
          :title="section.titleContainer?.title"
          :description="section.titleContainer?.description"
        />
        <div class="contacts__info-container">
          <BlockContactsInfo
            :contact-links="section.contactLinks"
          />
          <BlockContactsAddress
            :label="section.addressLabel"
            :address="section.address"
            class="contacts__info-container-address"
          />
        </div>
      </template>
      <template v-else-if="section.__component==='sections.map'">
        <BlockContactsMap
          :section="section"
        />
      </template>
    </template>
  </section>
</template>

<script setup lang="ts">

import type {ContactsPageResponse} from "~/types/responses/pages/contacts";

const config = useRuntimeConfig();

const { data, error } = await useFetch<ContactsPageResponse>(
    apiUrl.contacts,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>
<style scoped>
.contacts__container {
  @apply mt-[188px] xl:mt-[165px] md:mt-[177px] sm:mt-[132px]
}

.contacts__info-container {
  @apply flex items-start mt-[161px] mb-[150px]
  xl:mt-[172px] xl:mb-[148px] xl:ml-[2px]
  lg:block lg:mt-[68px] lg:mb-[70px] lg:ml-0
  sm:mt-[40px] sm:mb-[29px]
}

.contacts__info-container-address {
  @apply lg:mt-[60px] sm:mt-[40px]
}
</style>
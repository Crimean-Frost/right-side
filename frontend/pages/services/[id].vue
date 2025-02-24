<template>
  <div>
    <template v-for="(section, index) in pageData?.data?.content" :key="index">
      <template v-if="section.__component === 'sections.main-hero'">
        <SectionServicesDynamicHero
            :title-page="section.hero?.title"
            :description-page="section.hero?.description"
            :image="section.icon[0]"
            :image-mobile="section.iconMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.about-command'">
        <SectionServicesDynamicAboutService
            :heading-title="section.titleContainer?.title"
            :heading-description="section.titleContainer?.description"
            :section-descriptions="section.descriptions"
            :cover="section.cover"
            :cover-mobile="section.coverMobile"
        />
      </template>
      <template v-if="section.__component === 'sections.competence-card'">
        <SectionServicesDynamicAdvantages
            :title="section.titleContainer?.description"
            :cards-data="section.competenceCards"
        />
      </template>
      <template v-if="section.__component === 'sections.principles'">
        <SectionServicesDynamicPrinciples
            :title="section.titleContainer?.title"
            :description="section.titleContainer?.description"
            :cards-data="section.principles"
        />
      </template>
      <template v-if="section.__component === 'sections.for-whom'">
        <SectionServicesDynamicForWhom
            :section="section"
        />
      </template>
      <template v-if="section.__component === 'sections.contact-us-title' && contactUsWithoutData">
        <SectionServicesDynamicContactUs
            v-if="contactUsWithoutData"
            :title="section.titleContainer?.title"
            :description="section.titleContainer?.description"
            :form-data="contactUsWithoutData"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {DetailServicePageResponse} from "~/types/responses/pages/detail-service";
import type {ServiceCollectionResponse} from "~/types/responses/collections/services";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";

const config = useRuntimeConfig();
const route = useRoute();

const pageApiUrl = computed(() => {
  return apiUrlFormat(apiUrl.servicesCollection, {'services-slug': route.params.id})
})

const {data: pageData, error} = await useFetch<ServiceCollectionResponse>(
    pageApiUrl,
    {baseURL: config.public.apiBase},
);
if (error.value?.data?.error?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    data: {
      myCustomField: true
    }
  })
}

const {data: contactUsData, error: contactUsError} = await useFetch<DetailServicePageResponse>(
    apiUrl.serviceDetailPage,
    {baseURL: config.public.apiBase},
);

const contactUsWithoutData = computed<ContactUsWithout | undefined>(
    () =>
        contactUsData.value?.data?.content?.map((section) => ({
          ...section
        }))[0]
);

seo(config.public.apiBase, pageData.value?.data?.seo);
</script>
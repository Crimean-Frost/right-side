<template>
  <div>
    <template v-for="(section, index) in pageData?.data?.content" :key="index">
      <template v-if="section.__component === 'sections.about-employee'">
        <SectionEmployeeHero
            :first-name="pageData?.data?.firstName"
            :last-name="pageData?.data?.lastName"
            :middle-name="pageData?.data?.middleName"
            :description="pageData?.data?.description"
            :image-url="pageData?.data?.mainPhoto?.url"
            :image-alt="pageData?.data?.mainPhoto?.alternativeText"
            :image-url-mobile="pageData?.data?.mainPhotoMobile?.url"
            :button-text="pageData?.data?.button"
        />
      </template>
      <template v-if="section.__component === 'sections.about-employee'">
        <SectionEmployeeAboutEmployee
            :heading-title="section.titleContainer?.title"
            :heading-description="section.titleContainer?.description"
            :section-description="section.descriptions"
            :large-image="section.largeImage?.url"
            :large-image-mobile="section.largeImageMobile?.url"
            :large-image-alt="section.largeImage?.alternativeText"
            :small-image="section.smallImage?.url"
            :small-image-alt="section.smallImage?.alternativeText"
        />
      </template>
      <template v-if="section.__component === 'sections.competences-employee'">
        <SectionEmployeeAdvantages
            :title="section.title"
            :drop-down-text="section.cards"
            :button-text="section.button"
        />
      </template>
      <template v-if="section.__component === 'sections.publications'">
        <SectionEmployeePublications
            :title="section.title"
            :publications="section.publications"
        />
      </template>
      <template v-if="section.__component === 'sections.sector-cases' && pageData && pageData.data.cases.length > 0">
        <SectionEmployeeCases
            :title="section.title"
            :button="section.button"
            :cases="pageData.data.cases"
        />
      </template>
      <template v-if="section.__component === 'sections.contact-us-title' && contactUsData">
        <SectionEmployeeContactUs
            v-if="contactUsData"
            :title="section.titleContainer.title"
            :description="section.titleContainer.description"
            :form-data="contactUsData"
        />
      </template>
    </template>
    <SectionEmployeeLearnMore
        v-if="learnMoreData"
        :section="learnMoreData"
    />
  </div>
</template>
<script lang="ts" setup>
import type {EmployeesCollectionResponse} from "~/types/responses/collections/employees";
import type {DetailEmployeePageResponse} from "~/types/responses/pages/detail-employee";
import type {Advantages} from "~/types/responses/components/sections/advantages";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";

const config = useRuntimeConfig();
const route = useRoute();

const pageApiUrl = computed(() => {
  return apiUrlFormat(apiUrl.staff, {'employee-slug': route.params.id})
})

const {data: pageData, error} = await useFetch<EmployeesCollectionResponse>(
    pageApiUrl,
    {
      baseURL: config?.public.apiBase,
    }
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
const {data: employeeData} = await useFetch<DetailEmployeePageResponse>(
    apiUrl.staffDetailPage,
    {baseURL: config.public.apiBase}
);


const contactUsData = computed<ContactUsWithout | undefined>(() =>
    employeeData.value?.data?.content?.find(
        (section) => section.__component === 'sections.contact-us-without'
    )
);

const learnMoreData = computed<Advantages | undefined>(() =>
    employeeData.value?.data?.content?.find(
        (section) => section.__component === 'sections.advantages'
    )
);

seo(config.public.apiBase, pageData.value?.data?.seo);
</script>
